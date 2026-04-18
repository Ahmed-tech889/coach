# PRI Insight v8.0

FlightHub QA Evaluator — AI-powered call scoring against the 11-attribute PRI rubric.

## Project Structure

```
pri-insight/
├── api/
│   └── analyze.js        # Vercel serverless function — proxies Anthropic API
├── public/
│   └── index.html        # Full single-page app
├── vercel.json           # Vercel routing config
├── package.json          # Node project metadata
├── .env.example          # Environment variable reference
└── README.md             # This file
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repo in vercel.com → Add New Project
3. Go to Project Settings → Environment Variables
4. Add: `ANTHROPIC_API_KEY` = your Anthropic key (`sk-ant-...`)
5. Deploy

## Local Development

To test locally, create a `.env` file:
```
ANTHROPIC_API_KEY=sk-ant-...
```
Then run:
```
npx vercel dev
```

## How It Works

- `public/index.html` — the entire frontend (HTML + CSS + JS, no build step)
- `api/analyze.js` — serverless function that receives the transcript, injects the API key from the environment, calls Anthropic, and returns the result
- The API key is **never exposed to the browser**
