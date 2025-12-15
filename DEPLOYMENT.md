# Deployment Guide

This guide will walk you through deploying your marketing website to the web using GitHub for version control and Vercel for hosting.

## Prerequisites

- GitHub account ([sign up here](https://github.com/signup))
- Vercel account ([sign up here](https://vercel.com/signup)) - You can sign up with GitHub for easier integration

## Step 1: Set Up GitHub Repository

### 1.1 Create a new repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., "jmcg-website" or "marketing-website")
5. Choose "Private" or "Public" (your choice)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 1.2 Initialize Git and push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Marketing website setup"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (preferably with GitHub)
2. Click "Add New..." → "Project"
3. Import your GitHub repository:
   - Find your repository in the list
   - Click "Import"
4. Vercel will auto-detect your settings:
   - **Framework Preset**: Vite (should auto-detect)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
5. Click "Deploy"
6. Wait 1-2 minutes for the build to complete
7. Your site will be live at `your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# In your project directory, run:
vercel

# Follow the prompts:
# - Login or sign up
# - Link to existing project or create new
# - Confirm settings
```

## Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `yourdomain.com`)
3. Follow Vercel's instructions to update your DNS records
4. SSL certificate will be automatically provisioned

## Step 4: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every time you push to the `main` branch
- Create preview deployments for pull requests
- Provide deployment URLs for each commit

### Daily Workflow:

```bash
# Make your changes locally
# ...

# Commit and push
git add .
git commit -m "Your commit message"
git push

# Vercel automatically deploys within 1-2 minutes!
```

## Alternative Hosting Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

### Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select your repository
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `build`
5. Click "Save and Deploy"

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Configure:
   - Public directory: `build`
   - Single-page app: Yes
   - Build command: `npm run build`
5. Deploy: `firebase deploy`

## Troubleshooting

### Build fails on Vercel

- Check that `package.json` has the correct build script
- Ensure all dependencies are listed (not using global packages)
- Check build logs in Vercel dashboard for specific errors

### Site shows 404 on refresh

- This is handled by the `rewrites` configuration in `vercel.json`
- Ensure `vercel.json` is in your project root

### Assets not loading

- Make sure paths are relative (Vite handles this automatically)
- Check that assets are in the `src/assets` directory
- Clear browser cache and try again

## Cost Estimates

**Vercel Free Tier:**
- 100 GB bandwidth/month
- Unlimited deployments
- Free SSL certificates
- Custom domains included
- Perfect for marketing websites

**Expected cost: $0/month** for typical marketing agency traffic.

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vite Deployment Guide: https://vitejs.dev/guide/static-deploy.html
- GitHub Docs: https://docs.github.com

