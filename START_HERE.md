# 🎯 START HERE - Your Portfolio Deployment Guide

**Welcome, Prasidh!** Your portfolio is ready to go live. Follow these simple steps.

---

## 🚀 Quick Deploy (Copy & Paste These Commands)

### Step 1: Open Terminal in Your Project Folder

Make sure you're in the `portfolio-main` directory.

### Step 2: Install Dependencies

```bash
pnpm install
```

**Don't have pnpm?** Install it first:
```bash
npm install -g pnpm
```

### Step 3: Test Locally (Optional but Recommended)

```bash
pnpm dev
```

Open http://localhost:3000 to see your portfolio. Press `Ctrl+C` to stop.

### Step 4: Build for Production

```bash
pnpm build
```

This creates the production-ready files. Should complete without errors.

### Step 5: Initialize Git and Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio of Prasidh P Shetty"

# Add your GitHub repository (create it first on GitHub.com)
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Before running these commands:**
1. Go to https://github.com/new
2. Create a repository named `portfolio`
3. Don't initialize with README or .gitignore
4. Click "Create repository"
5. Then run the commands above

### Step 6: Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Select your `portfolio` repository
5. Click "Deploy"
6. Wait 2 minutes
7. Done! 🎉

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 📁 Important Files Created for You

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment configuration |
| `.env.example` | Environment variables template |
| `GIT_SETUP.md` | Detailed Git commands |
| `DEPLOYMENT.md` | Complete deployment guide |
| `QUICK_START.md` | 5-minute quick start |
| `PRE_DEPLOYMENT_CHECKLIST.md` | Pre-deployment checklist |
| `VERCEL_DEPLOYMENT_STEPS.md` | Step-by-step Vercel guide |

---

## ✅ What's Already Done

- ✅ All personal information updated (name, bio, links)
- ✅ Social media links configured
- ✅ GitHub username updated everywhere
- ✅ Vercel configuration created
- ✅ Git configuration ready
- ✅ Build scripts verified
- ✅ Environment variables template created

---

## 🎯 Your Next Actions

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `portfolio`
   - Click "Create repository"

2. **Run the Commands Above**
   - Copy and paste each command
   - Wait for each to complete

3. **Deploy to Vercel**
   - Use Vercel Dashboard (easiest)
   - Or use Vercel CLI

4. **Share Your Portfolio!**
   - Your site will be at: `https://portfolio-xxx.vercel.app`
   - Add to LinkedIn, GitHub profile, resume

---

## 🆘 Need Help?

### If Build Fails:
```bash
# Clear and reinstall
rm -rf node_modules
pnpm install
pnpm build
```

### If Git Push Fails:
```bash
# Check if repository exists on GitHub
# Make sure you created it first at github.com/new

# Check remote
git remote -v

# If wrong, remove and re-add
git remote remove origin
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git
git push -u origin main
```

### If Vercel Deploy Fails:
- Check build logs in Vercel dashboard
- Make sure GitHub repository is public
- Try deploying via Vercel CLI instead

---

## 📚 Detailed Guides Available

- **Quick Start**: Read `QUICK_START.md`
- **Git Help**: Read `GIT_SETUP.md`
- **Vercel Help**: Read `VERCEL_DEPLOYMENT_STEPS.md`
- **Full Guide**: Read `DEPLOYMENT.md`
- **Checklist**: Read `PRE_DEPLOYMENT_CHECKLIST.md`

---

## 🎨 After Deployment

### Update Your Projects

Edit `content/projects/projects.json`:
```json
{
  "myproject": {
    "title": "My Awesome Project",
    "tags": "React, Node.js",
    "github": "https://github.com/Prasidhpshetty7/myproject",
    "demo": "https://myproject.com",
    "description": "Project description here"
  }
}
```

### Add Blog Posts

Create files in `content/articles/`:
```markdown
---
title: My First Post
date: 2026-03-20
---

# My First Post

Content here...
```

### Update Images

Replace these files:
- `src/assets/img/profile.jpg` - Your profile photo
- `src/assets/img/style_profile.png` - Styled profile image
- `src/assets/img/me.png` - Avatar image

---

## 🔄 How to Update Your Live Site

After initial deployment, updating is easy:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Update: describe your changes"
git push
```

Vercel automatically deploys your changes! 🚀

---

## 📊 Monitor Your Site

After deployment:
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Analytics**: Enable in Vercel settings
- **Performance**: Run Lighthouse in Chrome DevTools

---

## 🎉 You're All Set!

Your portfolio is configured and ready to deploy. Just follow the commands above!

**Questions?** Check the detailed guides in the other `.md` files.

**Good luck with your deployment!** 🚀

---

**Portfolio Owner**: Prasidh P Shetty  
**Email**: shettyprasidh262@gmail.com  
**GitHub**: [@Prasidhpshetty7](https://github.com/Prasidhpshetty7)  
**Deployment Date**: March 2026
