# Pre-Deployment Checklist

Complete this checklist before deploying to ensure everything works correctly.

## ✅ Code Quality Checks

- [ ] Run `pnpm install` to ensure all dependencies are installed
- [ ] Run `pnpm lint:js` to check JavaScript/Vue code
- [ ] Run `pnpm lint:css` to check CSS code
- [ ] Run `pnpm build` to test production build locally
- [ ] Run `pnpm preview` to preview production build

## ✅ Content Verification

- [ ] Personal information is correct in all files
- [ ] Social media links are working
- [ ] Email address is correct
- [ ] GitHub username is correct in all places
- [ ] Projects are added/updated in `content/projects/projects.json`
- [ ] About page bio is complete
- [ ] /now page is updated with current information

## ✅ Images and Assets

- [ ] Profile image exists at `src/assets/img/profile.jpg`
- [ ] Profile image exists at `src/assets/img/style_profile.png`
- [ ] Favicon files are in `public/` folder
- [ ] All project thumbnails are accessible (URLs work)

## ✅ Configuration Files

- [ ] `vercel.json` exists and is configured
- [ ] `.gitignore` includes `.env` and sensitive files
- [ ] `.env.example` is updated with all required variables
- [ ] `package.json` has correct build scripts
- [ ] No `netlify.toml` file exists (removed for Vercel)

## ✅ Environment Variables (Optional but Recommended)

These can be added later in Vercel dashboard:

- [ ] `VITE_GITHUB_TOKEN` - For GitHub contributions display
- [ ] `VITE_GOOGLE_ANALYTICS_ID` - For analytics tracking
- [ ] `VITE_GOOGLE_SEARCH_CONSOLE_TOKEN` - For search console verification
- [ ] Firebase variables (if using Firebase features)

## ✅ Git Repository

- [ ] Git is initialized (`git init`)
- [ ] All files are added (`git add .`)
- [ ] Initial commit is made (`git commit -m "Initial commit"`)
- [ ] GitHub repository is created
- [ ] Remote origin is added
- [ ] Code is pushed to GitHub (`git push -u origin main`)

## ✅ SEO and Meta Tags

- [ ] Site title is correct in `src/config/siteconfig.json`
- [ ] Site description is compelling
- [ ] Author meta tag is updated in `index.html`
- [ ] Open Graph tags will work (check after deployment)

## ✅ Functionality Tests (After Local Build)

Run these commands and test:

```bash
pnpm build
pnpm preview
```

Then check:

- [ ] Homepage loads correctly
- [ ] Navigation works (all menu items)
- [ ] About page displays correctly
- [ ] /now page displays correctly
- [ ] Articles page loads (even if empty)
- [ ] Social media icons are visible
- [ ] Links open in new tabs (external links)
- [ ] Mobile responsive design works
- [ ] Dark/light theme toggle works (if implemented)

## ✅ Browser Testing (After Deployment)

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test in Edge
- [ ] Test on mobile device
- [ ] Test on tablet

## ✅ Performance Checks (After Deployment)

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check page load speed
- [ ] Verify images are optimized
- [ ] Check for console errors

## 🚀 Ready to Deploy!

Once all items are checked, you're ready to deploy to Vercel!

Follow the steps in `DEPLOYMENT.md` for detailed deployment instructions.

## Post-Deployment Tasks

After successful deployment:

- [ ] Test live site thoroughly
- [ ] Share portfolio link on social media
- [ ] Add portfolio link to GitHub profile
- [ ] Add portfolio link to LinkedIn
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (if configured)
- [ ] Monitor Vercel analytics
- [ ] Set up custom domain (optional)

## Troubleshooting

If you encounter issues:

1. Check Vercel build logs
2. Verify all environment variables are set
3. Test build locally first
4. Check browser console for errors
5. Review `DEPLOYMENT.md` for common issues

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/
- Vue 3 Documentation: https://vuejs.org/
- GitHub Issues: Create an issue in your repository

---

**Last Updated**: March 2026
**Portfolio Owner**: Prasidh P Shetty
