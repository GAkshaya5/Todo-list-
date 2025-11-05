Deploying this Node/Express todo app to Render

This repo is a simple Node/Express + EJS app. Below are step-by-step instructions to deploy it to Render (https://render.com).

Prerequisites
- A GitHub account (or Git provider supported by Render)
- A Render account
- Git installed locally and a GitHub remote repo created for this project

Quick summary
1. Add this project to a Git repo and push to GitHub.
2. Create a new Web Service on Render and connect it to your GitHub repo (or use `render.yaml`).
3. Render will run `npm install` and `npm start` (see `package.json`). The app reads the port from `process.env.PORT` so it will work on Render.

PowerShell commands (example)

# initialize a git repo (if not already initialized)
cd "c:\Users\Akshaya Gundeti\OneDrive\Desktop\my first web page\assignment 7"
git init
git add .
git commit -m "Initial commit"

# create a GitHub repo in the web UI and then add it as a remote, OR run the GitHub CLI
# Example: replace <your-repo-url> with the GitHub repo url
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main

Deploy on Render (web UI)
1. Log in to https://dashboard.render.com
2. Click "New" → "Web Service"
3. Connect your GitHub account and choose the repo you pushed
4. Branch: main (or your branch)
5. Build Command: npm install
6. Start Command: npm start
7. Environment: Node
8. Click Create Web Service. Render will build and deploy. Your app will be available at the URL Render provides.

Use `render.yaml` to manage the service
- This project includes `render.yaml` with a sample service config. Update the `repo` field to point to your GitHub repo before using automatic deploys from Render or `render deploy`.

Notes and tips
- The app uses `process.env.PORT || 3020` and will pick the port Render provides automatically when deployed.
- If you need environment variables (API keys, etc.), add them in Render → Service → Environment.
- For logs: Dashboard → Service → Logs.
- For automatic redeploy on pushes, enable auto-deploy in the Render service settings or use `render.yaml` with `autoDeploy: true`.

Optional: Use the Render CLI
- See https://render.com/docs/deploy-using-the-cli

If you'd like, I can:
- Create a GitHub repo for you (requires your GitHub auth) — not done here.
- Add a `Procfile` or Dockerfile if you prefer container deployment.
- Refactor the code to export the Express `app` object so multiple server entrypoints can share the same app implementation.

