# Deployment Guide for Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- Git installed on your machine
- GitHub account
- Vercel account (sign up at https://vercel.com)
- pnpm installed (or npm/yarn)

## Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio setup"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `portfolio` (or any name you prefer)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 3: Push to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build` (or leave default)
   - **Output Directory**: `dist` (or leave default)
   - **Install Command**: `pnpm install` (or leave default)
5. Add Environment Variables (if needed):
   - `VITE_GITHUB_TOKEN` - Your GitHub personal access token
   - `VITE_GOOGLE_ANALYTICS_ID` - Your GA ID
   - `VITE_GOOGLE_SEARCH_CONSOLE_TOKEN` - Your search console token
   - Other variables from `.env.example`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 5: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

Make sure to add these in Vercel dashboard under Project Settings > Environment Variables:

```
VITE_GITHUB_TOKEN=your_github_token_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
VITE_GOOGLE_SEARCH_CONSOLE_TOKEN=your_token_here
VITE_FIREBASE_API_KEY=your_firebase_key_here
VITE_FIREBASE_APP_ID=your_firebase_app_id_here
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
VITE_FIREBASE_MESSAGE_SENDER=your_sender_id_here
```

**Note**: Environment variables in Vite must be prefixed with `VITE_` to be exposed to the client.

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure `pnpm-lock.yaml` is committed
- Check build logs in Vercel dashboard

### Environment Variables Not Working

- Make sure they're prefixed with `VITE_`
- Redeploy after adding environment variables
- Check that you're accessing them with `import.meta.env.VITE_VARIABLE_NAME`

### 404 Errors on Routes

- The `vercel.json` file should handle this with rewrites
- If issues persist, check Vercel routing configuration

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Useful Commands

```bash
# Test build locally
pnpm build
pnpm preview

# Check for errors
pnpm lint:js
pnpm lint:css

# Format code
pnpm format
```

## Support

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/
- Vue Documentation: https://vuejs.org/

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Social media links work
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] SEO meta tags are correct
- [ ] Analytics tracking works (if configured)
- [ ] Custom domain configured (if applicable)
