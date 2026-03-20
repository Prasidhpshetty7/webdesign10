# Git Setup and Push to GitHub

Follow these steps to push your portfolio to GitHub and deploy to Vercel.

## Step 1: Initialize Git (if not already done)

```bash
git init
```

## Step 2: Check Git Status

```bash
git status
```

This will show you all the files that will be committed.

## Step 3: Add All Files

```bash
git add .
```

## Step 4: Commit Your Changes

```bash
git commit -m "Initial commit: Portfolio of Prasidh P Shetty"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "Personal Portfolio - Web Designer & Full-Stack Developer"
4. Choose: **Public** (recommended for portfolio)
5. **DO NOT** check any boxes (no README, .gitignore, or license)
6. Click "Create repository"

## Step 6: Add Remote and Push

Replace `Prasidhpshetty7` with your actual GitHub username if different:

```bash
# Add remote origin
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git

# Verify remote
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 7: Verify on GitHub

Go to your repository URL and verify all files are uploaded:
https://github.com/Prasidhpshetty7/portfolio

## Common Issues and Solutions

### Issue: "remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/Prasidhpshetty7/portfolio.git
```

### Issue: Authentication failed
```bash
# Use GitHub CLI (recommended)
gh auth login

# Or use Personal Access Token
# Go to: GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
# Generate new token with 'repo' scope
# Use token as password when pushing
```

### Issue: Large files warning
```bash
# Check file sizes
git ls-files -z | xargs -0 du -h | sort -h

# If you have large files, add them to .gitignore
```

## Next Steps

After successfully pushing to GitHub, proceed to deploy on Vercel:
See `DEPLOYMENT.md` for detailed Vercel deployment instructions.

## Quick Commands Reference

```bash
# Check status
git status

# Add specific file
git add filename.ext

# Add all files
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b branch-name

# Switch branch
git checkout branch-name
```

## Git Best Practices

1. **Commit often** with meaningful messages
2. **Never commit** sensitive data (.env files are already in .gitignore)
3. **Use branches** for new features
4. **Pull before push** to avoid conflicts
5. **Write clear commit messages** describing what changed

## Example Commit Messages

```bash
git commit -m "Add contact form component"
git commit -m "Fix responsive layout on mobile"
git commit -m "Update project descriptions"
git commit -m "Add new blog post about React"
git commit -m "Optimize images for faster loading"
```
