# 🚀 Vercel Deployment - Step by Step

This is your complete guide to deploy your portfolio to Vercel.

## 📋 What You'll Need

- ✅ GitHub account
- ✅ Vercel account (free) - Sign up at https://vercel.com
- ✅ Your code pushed to GitHub

---

## 🎯 Method 1: Deploy via Vercel Dashboard (Recommended - 5 minutes)

### Step 1: Push to GitHub First

```bash
# Make sure you're in the portfolio directory
cd portfolio-main

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect Vercel to GitHub

1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. Click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find your `portfolio` repository
4. Click "Import"

### Step 4: Configure Project Settings

Vercel will auto-detect your framework. Verify these settings:

```
Framework Preset: Vite
Build Command: pnpm build (or npm run build)
Output Directory: dist
Install Command: pnpm install (or npm install)
Root Directory: ./
```

**Leave these as default** - Vercel detects them automatically!

### Step 5: Add Environment Variables (Optional)

Click "Environment Variables" and add these if you have them:

```
VITE_GITHUB_TOKEN = your_github_personal_access_token
VITE_GOOGLE_ANALYTICS_ID = your_ga_id
VITE_GOOGLE_SEARCH_CONSOLE_TOKEN = your_search_console_token
```

**Note**: You can skip this step and add them later!

### Step 6: Deploy!

1. Click "Deploy"
2. Wait 1-2 minutes while Vercel builds your site
3. You'll see a success screen with your live URL!

### Step 7: Visit Your Live Site

Your portfolio will be live at:
```
https://your-project-name.vercel.app
```

---

## 🎯 Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```bash
# Navigate to your project directory
cd portfolio-main

# Deploy to production
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? **portfolio** (or any name)
- In which directory is your code located? **./**
- Want to override settings? **N**

Wait for deployment to complete!

---

## 🔧 Post-Deployment Configuration

### Add Environment Variables (If Needed)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add variables one by one:

```
Name: VITE_GITHUB_TOKEN
Value: your_github_token_here
Environment: Production, Preview, Development
```

Click "Save" after each variable.

### Set Up Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

---

## 🔄 Automatic Deployments

Once connected, Vercel automatically deploys when you:

1. **Push to main branch** → Production deployment
2. **Create pull request** → Preview deployment
3. **Push to any branch** → Preview deployment

### How to Update Your Site

```bash
# Make changes to your code
# Then:

git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically detect the push and deploy! 🎉

---

## 📊 Monitor Your Deployment

### View Build Logs

1. Go to Vercel Dashboard
2. Click on your project
3. Click on the latest deployment
4. View "Building" logs to see the build process

### Check Deployment Status

- ✅ **Ready** - Deployment successful
- 🔄 **Building** - Currently building
- ❌ **Error** - Build failed (check logs)

---

## 🐛 Troubleshooting Common Issues

### Issue 1: Build Fails

**Error**: "Command failed: pnpm build"

**Solution**:
```bash
# Test build locally first
pnpm install
pnpm build

# If it works locally, check Vercel build logs
# Make sure all dependencies are in package.json
```

### Issue 2: Environment Variables Not Working

**Error**: Variables are undefined

**Solution**:
- Make sure variables are prefixed with `VITE_`
- Redeploy after adding environment variables
- Check you're using `import.meta.env.VITE_VARIABLE_NAME`

### Issue 3: 404 on Page Refresh

**Error**: Page not found when refreshing

**Solution**:
- Check `vercel.json` exists with rewrites configuration
- It should already be configured correctly

### Issue 4: Images Not Loading

**Error**: Images show broken

**Solution**:
- Check image paths are correct
- Use relative paths: `@/assets/img/image.png`
- Verify images are committed to Git

### Issue 5: GitHub Connection Failed

**Error**: Can't import repository

**Solution**:
- Make sure repository is public or Vercel has access
- Re-authorize Vercel in GitHub settings
- Try importing via Vercel CLI instead

---

## 🎨 Customization After Deployment

### Update Site Content

1. Edit files locally
2. Test with `pnpm dev`
3. Commit and push to GitHub
4. Vercel auto-deploys!

### Add New Projects

1. Edit `content/projects/projects.json`
2. Add your project details
3. Commit and push

### Add Blog Posts

1. Create new `.md` file in `content/articles/`
2. Add frontmatter and content
3. Commit and push

---

## 📈 Performance Optimization

### After Deployment, Check:

1. **Lighthouse Score**
   - Open DevTools → Lighthouse
   - Run audit
   - Aim for 90+ in all categories

2. **Vercel Analytics**
   - Enable in Vercel Dashboard
   - Monitor page views and performance

3. **Image Optimization**
   - Use WebP format when possible
   - Compress images before uploading

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build successful
- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Links work properly
- [ ] Images display correctly
- [ ] Mobile responsive
- [ ] Environment variables added (if needed)
- [ ] Custom domain configured (optional)

---

## 🎉 Success!

Your portfolio is now live on Vercel!

**Share your portfolio:**
- Add to LinkedIn profile
- Add to GitHub profile README
- Share on social media
- Add to resume/CV

**Next Steps:**
- Monitor analytics
- Keep content updated
- Add new projects
- Write blog posts
- Optimize performance

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

**Deployed by**: Prasidh P Shetty
**Last Updated**: March 2026
