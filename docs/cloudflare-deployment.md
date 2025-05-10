# Cloudflare Pages 部署指南

本文档提供了将WINUC网站部署到Cloudflare Pages的详细步骤和配置说明。

## 准备工作

1. 一个Cloudflare账户
2. 已连接到GitHub或GitLab的Cloudflare Pages服务
3. 确保已安装Node.js 18.x或更高版本

## 部署步骤

### 1. 配置环境变量

在Cloudflare Pages的项目设置中，添加以下环境变量：

| 变量名 | 生产值 | 预览值 | 描述 |
|--------|--------|--------|------|
| `NODE_VERSION` | `18.12.0` | `18.12.0` | 指定Node.js版本 |
| `NEXT_PUBLIC_CLOUDFLARE_BASE_URL` | 你的域名 (如 `https://winuc.pages.dev`) | 预览域名 | Cloudflare Pages的基础URL |
| `NEXT_PUBLIC_SITE_URL` | 你的域名 (如 `https://winuc.pages.dev`) | 预览域名 | 站点URL，用于SEO和元数据 |

### 2. 构建设置

在Cloudflare Pages的项目设置中，配置以下构建设置：

- **框架预设**: Next.js
- **构建命令**: `npm run build`
- **构建输出目录**: `.next`
- **根目录**: `/` (项目根目录)
- **环境变量设置**: 添加上述环境变量

### 3. 自定义域名 (可选)

如果你有自定义域名:

1. 在Cloudflare Pages的项目中，转到"自定义域"选项卡
2. 点击"设置自定义域"并按照向导操作
3. 更新环境变量中的`NEXT_PUBLIC_CLOUDFLARE_BASE_URL`和`NEXT_PUBLIC_SITE_URL`为你的自定义域名

### 4. 本地部署命令

项目已配置了使用Cloudflare Wrangler CLI进行部署的便捷脚本:

```bash
# 安装依赖 (首次使用)
npm install

# 部署到生产环境
npm run deploy

# 部署到预览环境
npm run deploy:preview
```

使用这些命令前，请确保你已登录Cloudflare CLI:

```bash
npx wrangler login
```

### 5. 部署验证

部署完成后，请验证以下功能是否正常工作：

1. **页面导航**: 确保所有页面链接正常工作，包括动态路由
2. **图片加载**: 检查所有图片是否正确显示
3. **动画效果**: 验证所有动画效果是否平滑无错误
4. **响应式布局**: 在不同设备尺寸下测试网站
5. **表单提交**: 测试联系表单等交互功能

如发现任何问题，参考下方故障排除部分。

## 注意事项

### 图片优化

项目使用了自定义图片加载器(`src/lib/cloudflare-image-loader.js`)，以支持Cloudflare Pages上的图片优化。配置已经在`next.config.js`中设置好。

### 缓存策略

项目包含一个`_routes.json`文件，用于配置Cloudflare Pages的缓存策略。默认设置是4小时的缓存时间，可以根据需要调整。

### 故障排除

1. **图片加载问题**: 
   - 检查`NEXT_PUBLIC_CLOUDFLARE_BASE_URL`环境变量是否正确设置
   - 确认图片路径正确且格式支持
   - 检查自定义图片加载器的配置

2. **构建失败**: 
   - 检查Node.js版本和构建命令是否正确配置
   - 查看构建日志中的具体错误信息
   - 确保依赖项完全安装

3. **API路由问题**: 
   - 确保在`_routes.json`文件中正确配置了排除规则
   - 考虑使用Cloudflare Workers替代Next.js API路由

4. **客户端导航问题**:
   - 检查`next.config.js`中的`trailingSlash`设置
   - 确保所有链接使用正确的相对路径
   - 在生产构建中查看浏览器控制台是否有错误

5. **样式问题**:
   - 确保所有CSS正确加载
   - 检查构建输出中的CSS文件是否完整

如果遇到无法解决的问题，可以在项目的GitHub仓库中创建Issue。

## 性能优化

为了在Cloudflare Pages上获得最佳性能:

1. 使用Cloudflare的边缘缓存
2. 考虑使用Cloudflare Workers进行API路由处理
3. 设置适当的缓存策略
4. 优化图片和资源大小

## 相关资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Cloudflare Pages 与 Next.js](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) 