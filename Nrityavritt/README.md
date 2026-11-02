# Nrityavritt | Academy of Classical Kathak Dance
Official web platform for **Nrityavritt**, dedicated to the preservation and teaching of Jaipur Gharana Kathak in New Delhi, founded by **Guru Namita Dwivedi**.

---

## 🚀 Quick Setup & Deployment Guide

### Option 1: Deploy with Vercel (Automatic Sync with GitHub)
1. Push this folder to a new **GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nrityavritt Academy"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** and log in with GitHub.
3. Click **"Add New Project"** → select your GitHub repository.
4. Click **Deploy**. Vercel will build and host your site live!
5. **Connect your Custom Domain**:
   - In Vercel Project Dashboard → **Settings** → **Domains**.
   - Enter your domain (e.g. `nrityavritt.com`) and add the DNS records in your domain registrar (GoDaddy, Hostinger, Namecheap).
   - Free automated SSL (HTTPS) is activated automatically.
6. *(Optional)* Add your Gmail App Password under **Environment Variables** (`SMTP_USER`, `SMTP_PASS`, `NOTIFICATION_EMAIL`).

---

### Option 2: Deploy 100% on GitHub Pages (No Vercel Needed)
1. Push this repository to GitHub as shown above.
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter your domain and check **Enforce HTTPS**.
4. Student admission submissions will arrive directly at `nrityavritt@gmail.com` via the built-in direct static email pipeline.

---

## 🛠️ Local Development

To run the site locally on your computer:
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
