# 🚀 Deployment Guide - Vijay Patil Portfolio

Your portfolio is now ready to be deployed! Follow these steps to get it online.

## ✅ Step 1: Push to GitHub (COMPLETED ✓)

Your code is now committed to git locally. Now let's push it to GitHub:

### Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `portfolio` or `vijay-patil-portfolio`
3. **Description**: "Personal portfolio website with wedding countdown"
4. **Visibility**: Public (recommended) or Private
5. **Don't initialize** with README, .gitignore, or license (we already have these)
6. **Click "Create repository"**

### Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```powershell
# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```powershell
git remote add origin https://github.com/vijaypatil/portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel (FREE & RECOMMENDED)

Vercel is the best option for Next.js apps - it's made by the same team!

### Why Vercel?
- ✅ **FREE** for personal projects
- ✅ **Automatic deployments** from GitHub
- ✅ **FREE SSL certificate** (HTTPS)
- ✅ **Global CDN** (super fast worldwide)
- ✅ **Zero configuration** needed
- ✅ **Custom domain support** (FREE)

### Deploy Steps:

1. **Go to Vercel**: https://vercel.com/signup

2. **Sign up with GitHub**
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

3. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

4. **Configure Project** (Vercel auto-detects everything!)
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

5. **Click "Deploy"**
   - Vercel will build and deploy your site
   - Takes about 1-2 minutes

6. **Your site is LIVE! 🎉**
   - You'll get a URL like: `https://portfolio-username.vercel.app`
   - Share this link immediately!

---

## 🌍 Step 3: Add Custom Domain (Optional but Recommended)

### Buy a Domain

**Recommended Registrars:**
- **Namecheap**: https://www.namecheap.com (~$10/year)
- **Cloudflare**: https://www.cloudflare.com/products/registrar/ (~$9/year)
- **GoDaddy**: https://www.godaddy.com (~$15/year)

**Suggested Domain Names:**
- `vijaypatil.com`
- `vijaypatil.dev`
- `vijaypatil.me`
- `vijaypatil.in`

### Connect Domain to Vercel

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain name
   - Click "Add"

2. **Configure DNS** (at your domain registrar):
   
   Vercel will show you DNS records to add. Typically:
   
   **For apex domain (vijaypatil.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes to 24 hours)

4. **SSL Certificate**: Automatically issued by Vercel (FREE)

---

## 📱 Alternative Deployment Options

### Option 2: Netlify (Also Great!)

1. Go to: https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

### Option 3: GitHub Pages (Not Recommended for Next.js)

GitHub Pages doesn't support server-side rendering well. Stick with Vercel or Netlify.

---

## 🔄 Future Updates

### Automatic Deployments

Once connected to Vercel/Netlify:

1. Make changes to your code locally
2. Commit changes:
   ```powershell
   git add .
   git commit -m "Updated wedding details"
   git push
   ```
3. **Automatic deployment** happens within 1-2 minutes!
4. Your live site updates automatically!

### Manual Deployment Commands

```powershell
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your update message here"

# Push to GitHub (triggers auto-deploy)
git push

# View remote URL
git remote -v

# View commit history
git log --oneline
```

---

## 🎯 Quick Start Deployment (TL;DR)

```powershell
# 1. Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# 2. Go to vercel.com
# 3. Import GitHub repository
# 4. Click Deploy
# 5. DONE! 🎉
```

---

## 🆘 Troubleshooting

### "Authentication failed" when pushing
```powershell
# Use GitHub CLI or Personal Access Token
# Generate token at: https://github.com/settings/tokens
```

### "Build failed" on Vercel
- Check build logs in Vercel dashboard
- Usually a missing dependency or typo

### Domain not working
- Wait 24 hours for DNS propagation
- Check DNS settings in your domain registrar
- Use https://dnschecker.org to verify

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## ✅ Current Status

- [x] Code committed to git
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain added

**Next Step**: Push to GitHub using the commands above! 🚀
