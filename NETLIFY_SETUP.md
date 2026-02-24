# Netlify Configuration Guide

To enable the Admin features (Login and Saving) on Netlify, you need to configure Environment Variables.

## 1. Login Password
To secure your admin interface, set the following variable in Netlify:

- **Key**: `VITE_ADMIN_PASSWORD`
- **Value**: `YourSecretPassword`

*If you do not set this, the default password is `admin123`.*

## 2. GitHub Integration (Optional)
To allow the "Save" button to automatically commit changes to your GitHub repository, you can either:

### Option A: Configure in the App (Recommended for ease of use)
1. Log in to the admin interface on your live site.
2. Click the **Settings (Gear Icon)** button.
3. Enter your GitHub Token, Username, and Repository Name.
4. Click Save.
*These settings are saved in your browser's LocalStorage.*

### Option B: Configure in Netlify (Recommended for security)
Set these variables in Netlify:

- `VITE_GITHUB_TOKEN`: Your GitHub Personal Access Token (needs `repo` scope).
- `VITE_REPO_OWNER`: Your GitHub username (e.g., `charlescchan`).
- `VITE_REPO_NAME`: The name of your repository (e.g., `portfolio-2025`).

## How to set variables in Netlify:
1. Go to your site dashboard on Netlify.
2. Click **Site configuration** > **Environment variables**.
3. Click **Add a variable**.
4. Enter the Key and Value.
5. **Redeploy your site** for changes to take effect.
