# 贵州鑫辰启科技有限公司官网 - 腾讯云部署指南

## 一、项目打包

### 1.1 安装依赖

```bash
npm install
```

### 1.2 构建生产版本

```bash
npm run build
```

构建成功后，会生成 `dist` 目录，包含所有静态资源文件。

---

## 二、腾讯云服务器部署

### 2.1 购买腾讯云轻量应用服务器

1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/)
2. 进入「轻量应用服务器」
3. 购买服务器配置：
   - 地域：选择离目标用户最近的区域（如西南地区）
   - 操作系统：Ubuntu Server 22.04 LTS 64位
   - 套餐：根据流量需求选择合适配置

### 2.2 登录服务器

使用 SSH 登录服务器：

```bash
ssh root@服务器IP地址
```

### 2.3 安装 Node.js

```bash
# 更新软件包
apt update && apt upgrade -y

# 安装 Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# 验证安装
node -v
npm -v
```

### 2.4 安装 Nginx

```bash
# 安装 Nginx
apt install -y nginx

# 启动 Nginx
systemctl start nginx

# 设置开机自启
systemctl enable nginx

# 验证状态
systemctl status nginx
```

### 2.5 配置 Nginx

创建网站配置文件：

```bash
nano /etc/nginx/sites-available/xinchenqi.com
```

添加以下配置（替换 `your_domain.com` 为您的域名）：

```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    root /var/www/xinchenqi/dist;
    index index.html;

    # 配置前端路由重定向
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 日志配置
    access_log /var/log/nginx/xinchenqi_access.log;
    error_log /var/log/nginx/xinchenqi_error.log;
}
```

启用配置并重启 Nginx：

```bash
# 创建软链接
ln -s /etc/nginx/sites-available/xinchenqi.com /etc/nginx/sites-enabled/

# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx
```

### 2.6 上传项目文件

使用 `scp` 上传 `dist` 目录到服务器：

```bash
scp -r dist/ root@服务器IP地址:/var/www/xinchenqi/
```

---

## 三、腾讯云 CDN 配置

### 3.1 登录 CDN 控制台

1. 进入 [腾讯云 CDN 控制台](https://console.cloud.tencent.com/cdn)
2. 点击「域名管理」>「添加域名」

### 3.2 添加加速域名

- 加速域名：`your_domain.com`
- 业务类型：静态网站
- 源站类型：IP 源
- 源站地址：服务器公网 IP

### 3.3 配置缓存规则

配置静态资源缓存策略：

| 文件类型 | 缓存时间 | 缓存策略 |
|---------|---------|---------|
| HTML | 0秒 | 不缓存 |
| JS/CSS | 1年 | 缓存 |
| 图片 | 1年 | 缓存 |

---

## 四、腾讯云 SSL 证书配置

### 4.1 申请免费证书

1. 进入 [SSL 证书控制台](https://console.cloud.tencent.com/ssl)
2. 点击「申请证书」
3. 选择「免费证书」> 填写域名 > 完成验证

### 4.2 配置 HTTPS

更新 Nginx 配置文件：

```bash
nano /etc/nginx/sites-available/xinchenqi.com
```

添加 HTTPS 配置：

```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    # 强制 HTTPS 跳转
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your_domain.com www.your_domain.com;

    # SSL 证书路径
    ssl_certificate /etc/nginx/ssl/your_certificate.crt;
    ssl_certificate_key /etc/nginx/ssl/your_certificate.key;

    # SSL 配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    root /var/www/xinchenqi/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    access_log /var/log/nginx/xinchenqi_access.log;
    error_log /var/log/nginx/xinchenqi_error.log;
}
```

重启 Nginx：

```bash
systemctl restart nginx
```

---

## 五、腾讯云 COS 配置（可选）

### 5.1 创建存储桶

1. 进入 [腾讯云 COS 控制台](https://console.cloud.tencent.com/cos)
2. 创建存储桶：
   - 名称：自定义（如 `xinchenqi-cop`）
   - 地域：与服务器同区域
   - 访问权限：公共读

### 5.2 上传静态资源

将 `dist/assets` 目录上传到 COS 存储桶。

### 5.3 配置 CDN 回源

在 CDN 控制台配置回源路径指向 COS。

---

## 六、DNS 解析配置

### 6.1 添加解析记录

进入 [腾讯云 DNS 解析控制台](https://console.cloud.tencent.com/dns)：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|-------|
| A | @ | 服务器公网 IP |
| A | www | 服务器公网 IP |
| CNAME | cdn | CDN 加速域名 |

---

## 七、一键部署脚本

创建部署脚本 `deploy.sh`：

```bash
#!/bin/bash

# 变量配置
DOMAIN="your_domain.com"
SERVER_IP="服务器IP地址"
LOCAL_DIR="./dist"
REMOTE_DIR="/var/www/xinchenqi"

echo "=== 构建项目 ==="
npm run build

echo "=== 上传文件 ==="
scp -r $LOCAL_DIR/* root@$SERVER_IP:$REMOTE_DIR/

echo "=== 重启 Nginx ==="
ssh root@$SERVER_IP "systemctl restart nginx"

echo "=== 部署完成 ==="
echo "访问地址: https://$DOMAIN"
```

使用方式：

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 八、验证部署

1. 访问 `https://your_domain.com`
2. 检查页面是否正常加载
3. 使用 Lighthouse 检查性能评分

---

## 九、常见问题

### 9.1 403 权限错误

```bash
# 设置正确的文件权限
chown -R www-data:www-data /var/www/xinchenqi
chmod -R 755 /var/www/xinchenqi
```

### 9.2 SSL 证书配置错误

确保证书文件路径正确，权限为 600。

### 9.3 页面刷新 404

确保 Nginx 配置中包含 `try_files $uri $uri/ /index.html;`

---

## 十、技术支持

如有问题，请联系：
- 邮箱：contact@xinchenqi.com
- 电话：13800138000
