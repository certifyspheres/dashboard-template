# Deployment Guide - AdminPro Dashboard

## 🚀 Deployment Options

This guide covers multiple deployment options for your AdminPro Dashboard Template.

---

## 📋 Table of Contents

1. [Vercel Deployment](#vercel-deployment) ⭐ Recommended
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages](#github-pages)
4. [Custom Server](#custom-server)
5. [Docker Deployment](#docker-deployment)

---

## 🎯 Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Instant deployments
- ✅ Free tier available
- ✅ Perfect for React/Vite apps

### Method 1: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# From project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? dashboard-template
# - Directory? ./
# - Override settings? No
```

#### Step 4: Deploy to Production
```bash
vercel --prod
```

### Method 2: Deploy via GitHub Integration

#### Step 1: Push to GitHub
```bash
# Already done! ✅
# Repository: https://github.com/certifyspheres/dashboard-template
```

#### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub
4. Select `certifyspheres/dashboard-template`
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

#### Step 3: Add Custom Domain

1. Go to Project Settings → Domains
2. Add domain: `dashboard-theme.certifysphere.com`
3. Configure DNS:

**DNS Settings (at your domain provider):**
```
Type: CNAME
Name: dashboard-theme
Value: cname.vercel-dns.com
TTL: 3600
```

**Or use A Record:**
```
Type: A
Name: dashboard-theme
Value: 76.76.21.21
TTL: 3600
```

4. Wait for DNS propagation (5-30 minutes)
5. Vercel will automatically provision SSL certificate

### Vercel Configuration File

Create `vercel.json` in project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Environment Variables (if needed)

In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add variables:
   - `VITE_API_URL` (if using API)
   - `VITE_APP_NAME`
   - etc.

---

## 🌐 Netlify Deployment

### Method 1: Netlify CLI

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login
```bash
netlify login
```

#### Step 3: Deploy
```bash
# Build first
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Method 2: GitHub Integration

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select `certifyspheres/dashboard-template`
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Custom Domain on Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain: `dashboard-theme.certifysphere.com`
3. Configure DNS:

```
Type: CNAME
Name: dashboard-theme
Value: [your-site-name].netlify.app
```

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 📄 GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
```json
{
  "homepage": "https://certifyspheres.github.io/dashboard-template",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/dashboard-template/'
})
```

### Step 4: Deploy
```bash
npm run deploy
```

### Custom Domain on GitHub Pages

1. Add `CNAME` file in `public` folder:
```
dashboard-theme.certifysphere.com
```

2. Configure DNS:
```
Type: CNAME
Name: dashboard-theme
Value: certifyspheres.github.io
```

3. Enable in GitHub Settings → Pages → Custom domain

---

## 🖥️ Custom Server (VPS/Dedicated)

### Using Nginx

#### Step 1: Build the Project
```bash
npm run build
```

#### Step 2: Upload dist folder to server
```bash
scp -r dist/* user@your-server:/var/www/dashboard
```

#### Step 3: Configure Nginx

Create `/etc/nginx/sites-available/dashboard`:

```nginx
server {
    listen 80;
    server_name dashboard-theme.certifysphere.com;
    root /var/www/dashboard;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

#### Step 4: Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/dashboard /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Step 5: SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dashboard-theme.certifysphere.com
```

---

## 🐳 Docker Deployment

### Dockerfile

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

### Build and Run

```bash
# Build image
docker build -t adminpro-dashboard .

# Run container
docker run -d -p 80:80 adminpro-dashboard

# Or with docker-compose
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  dashboard:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

---

## 🔧 Build Optimization

### Optimize for Production

#### Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chart-vendor': ['recharts'],
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

### Enable Compression

Most platforms (Vercel, Netlify) handle this automatically.

For custom servers, enable gzip in Nginx (shown above).

---

## 📊 Performance Checklist

Before deploying:

- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`
- [ ] Check bundle size
- [ ] Optimize images
- [ ] Enable compression
- [ ] Configure caching headers
- [ ] Test on multiple devices
- [ ] Check Lighthouse score

---

## 🌍 DNS Configuration

### For dashboard-theme.certifysphere.com

**Recommended: CNAME Record**
```
Type: CNAME
Name: dashboard-theme
Value: cname.vercel-dns.com (or your platform)
TTL: 3600
```

**Alternative: A Record**
```
Type: A
Name: dashboard-theme
Value: [Platform IP]
TTL: 3600
```

### DNS Propagation

- Check status: https://dnschecker.org
- Usually takes 5-30 minutes
- Can take up to 48 hours globally

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Security headers configured
- [ ] CORS configured (if using API)
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] Dependencies updated

---

## 📈 Monitoring

### Vercel Analytics

Enable in Vercel Dashboard:
- Go to Project → Analytics
- Enable Web Analytics
- View real-time data

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

With Vercel/Netlify + GitHub:
- Push to `main` → Auto deploy to production
- Push to other branches → Auto deploy preview
- Pull requests → Auto deploy preview

### Manual Deployments

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# GitHub Pages
npm run deploy
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh

Add redirect rules (shown in platform configs above).

### Slow Loading

- Enable compression
- Optimize images
- Use CDN
- Code splitting

### Environment Variables Not Working

- Prefix with `VITE_`
- Rebuild after adding variables
- Check platform-specific syntax

---

## 📞 Support

### Vercel Support
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

### Netlify Support
- Docs: https://docs.netlify.com
- Forum: https://answers.netlify.com

---

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] Code committed to GitHub
- [ ] Build tested locally
- [ ] Environment variables configured
- [ ] Custom domain DNS configured

### Deployment
- [ ] Platform account created
- [ ] Project imported/deployed
- [ ] Custom domain added
- [ ] SSL certificate active

### Post-Deployment
- [ ] Site accessible via custom domain
- [ ] All pages working
- [ ] Theme controls working
- [ ] Forms working
- [ ] Charts rendering
- [ ] Mobile responsive
- [ ] Performance tested

---

## 🎉 Quick Deploy to Vercel

**Fastest Method:**

1. Push to GitHub ✅ (Already done!)
2. Visit: https://vercel.com/new
3. Import: `certifyspheres/dashboard-template`
4. Click "Deploy"
5. Add domain: `dashboard-theme.certifysphere.com`
6. Done! 🚀

**Estimated Time:** 5-10 minutes

---

**Your dashboard will be live at:**
- **Production:** https://dashboard-theme.certifysphere.com
- **Vercel URL:** https://dashboard-template.vercel.app

---

**Last Updated:** December 6, 2024  
**Status:** Ready for Deployment ✅
