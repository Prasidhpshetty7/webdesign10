# 🚀 Quick Start Guide

Get your portfolio deployed in 5 minutes!

## Prerequisites

Make sure you have:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) installed (`npm install -g pnpm`)
- [Git](https://git-scm.com/) installed
- GitHub account
- Vercel account (free)

## Step 1: Install Dependencies (2 minutes)

```bash
pnpm install
```

## Step 2: Test Locally (1 minute)

```bash
# Start development server
pnpm dev
```

Open http://localhost:3000 in your browser to see your portfolio.

## Step 3: Build for Production (1 minute)

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

Open http://localhost:8080 to preview the production build.

## Step 4: Push to GitHub (2 minutes)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio setup"

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Deploy to Vercel (2 minutes)

### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy" (use default settings)
5. Wait 1-2 minutes for deployment
6. Done! 🎉

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🎉 You're Live!

Your portfolio is now live at: `https://your-project.vercel.app`

## Next Steps

1. **Add Environment Variables** (Optional):
   - Go to Vercel Dashboard > Your Project > Settings > Environment Variables
   - Add `VITE_GITHUB_TOKEN` for GitHub contributions
   - Add `VITE_GOOGLE_ANALYTICS_ID` for analytics

2. **Custom Domain** (Optional):
   - Go to Vercel Dashboard > Your Project > Settings > Domains
   - Add your custom domain
   - Update DNS settings

3. **Update Content**:
   - Add your projects in `content/projects/projects.json`
   - Add blog posts in `content/articles/`
   - Update images in `src/assets/img/`

## Common Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint:js          # Lint JavaScript/Vue
pnpm lint:css         # Lint CSS
pnpm format           # Format code with Prettier

# Deployment
git add .             # Stage changes
git commit -m "msg"   # Commit changes
git push              # Push to GitHub (auto-deploys to Vercel)
```

## Automatic Deployments

After initial setup, every push to GitHub will automatically deploy to Vercel! 🚀

## Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Check `PRE_DEPLOYMENT_CHECKLIST.md` for verification steps
- Check `GIT_SETUP.md` for Git commands

## Troubleshooting

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
pnpm dev
```

**Git push fails?**
```bash
# Check remote
git remote -v

# Re-add remote if needed
git remote remove origin
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git
git push -u origin main
```

---

**Happy Coding! 💻✨**
