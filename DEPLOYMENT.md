# Deployment Instructions

Your Task Master app is ready to deploy! Follow these steps:

## Option 1: Vercel Dashboard (Recommended - Easiest)

1. Go to https://vercel.com/pervizs-projects-d6728d10/task-master/settings/environment-variables
2. Click "Add New"
3. Enter:
   - **Name:** `NEXT_PUBLIC_CONVEX_URL`
   - **Value:** `https://lovely-magpie-537.convex.cloud`
   - **Environment:** Check "Production"
4. Click "Save"
5. Go to Deployments tab and click "Redeploy" on the latest deployment

## Option 2: Command Line

Run these commands in PowerShell from the task-master directory:

```powershell
# Add environment variable (answer 'n' to "Mark as sensitive?")
npx vercel env add NEXT_PUBLIC_CONVEX_URL production
# When prompted, paste: https://lovely-magpie-537.convex.cloud

# Redeploy
npx vercel --prod
```

## Verify Deployment

Once deployed, your app will be live at:
https://task-master-agz49ffoq-pervizs-projects-d6728d10.vercel.app

Test it by:
1. Adding a task
2. Marking it complete
3. Deleting it
4. Filtering between All/Active/Completed tabs

---

## What's Already Done

✅ Convex production deployment created and pushed
✅ GitHub repository created and synced
✅ Vercel project created
✅ All code committed and pushed
✅ Accessibility improvements added
✅ Build succeeds locally

**Only missing:** Environment variable in Vercel → then redeploy
