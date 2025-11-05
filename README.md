# Todo List App

Simple Node.js + Express + EJS todo list app created for assignment.

Features
- Server-rendered EJS views
- Add todo items via a form
- Simple in-memory storage (items are not persistent across restarts)
- Static assets served from `public/` (CSS and JS)

Run locally

1. Install dependencies:

```powershell
cd "c:\Users\Akshaya Gundeti\OneDrive\Desktop\my first web page\assignment 7"
npm install
```

2. Start the app (default port in code is 3020, but you can set PORT):

```powershell
$env:PORT=3030; node app.js
# or
npm start
```

3. Open http://localhost:3030 (or the port you chose)

Deploy

See `README-DEPLOY-RENDER.md` for a guide to deploy the app to Render.

Notes
- To make todos persistent across restarts, we can add a JSON file or database. Ask me if you'd like that implemented.
