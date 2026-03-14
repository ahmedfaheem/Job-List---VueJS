# Job List (Vue 3 + Vite)

A job board web app built with Vue 3, Vue Router, Tailwind CSS, and a local `json-server` API.

## Features

- Browse all jobs
- View detailed job information
- Add a new job
- Edit existing jobs
- Delete jobs
- Toast notifications for user feedback 

## Tech Stack

- Vue 3
- Vue Router 4
- Vite
- Tailwind CSS
- json-server
- vue-toastification

## External Libraries

- `primeicons`: Icon set used across components (for example map marker, back arrow, warning icon).
- `vue-toastification`: Toast notifications for success/error feedback.
- `vue-spinner`: Loading spinner components for async loading states.
- `json-server`: Local mock REST API for jobs data in development.

Notes:
- PrimeIcons CSS is loaded in `src/main.js` via `import 'primeicons/primeicons.css'`.
- Toastification is registered globally in `src/main.js` via `.use(Toast)`.

## Setup

```bash
npm install
```

## Run The App

1. Start API server:

```bash
npm install json-server
npm run server
```

2. Start frontend dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## App Routes

- `/` Home page
- `/jobs` Jobs listing page
- `/job/:id` Job details page
- `/jobs/add` Add new job page
- `/jobs/edit/:id` Edit existing job page
- `/:pathMatch(.*)*` Not found page

## Data Source (json-server)

The app uses a local mock REST API powered by `json-server`.

- Data file: `src/jobs.json`
- API base URL: `http://localhost:8000`
- Resource: `/jobs`
- Start command: `npm run server`

### Current Database Shape

```json
{
	"jobs": [
		{
			"id": "1",
			"title": "Senior Vue Developer",
			"type": "Full-Time",
			"description": "...",
			"location": "Boston, MA",
			"salary": "$70K - $80K",
			"company": {
				"name": "NewTek Solutions",
				"description": "...",
				"contactEmail": "contact@teksolutions.com",
				"contactPhone": "555-555-5555"
			}
		}
	]
}
```

### Seed Data Included

- Initial jobs count: `6`
- IDs are currently strings in `src/jobs.json` (`"1"`, `"2"`, ...)

### API Endpoints

- `GET /jobs` Get all jobs
- `GET /jobs/:id` Get one job by id
- `POST /jobs` Create a job
- `PUT /jobs/:id` Replace a job
- `PATCH /jobs/:id` Update part of a job
- `DELETE /jobs/:id` Delete a job

### API Examples

Get all jobs:

```bash
curl http://localhost:8000/jobs
```

Get one job:

```bash
curl http://localhost:8000/jobs/1
```

## NPM Scripts

- `npm run dev`: Start Vite development server
- `npm run build`: Build production bundle
- `npm run preview`: Preview production build locally
- `npm run server`: Start json-server on port `8000`

## Troubleshooting

- If `npm run server` fails, verify `src/jobs.json` exists and is valid JSON.
- If API calls fail, make sure json-server is running on `http://localhost:8000`.
- If styles look broken, restart `npm run dev` after changing Tailwind config.

## Policy

- This project is for learning and portfolio use.

