# fullstack-app-ai

A fullstack application with a React + Vite + TypeScript frontend and an Express backend. The backend serves static assets and provides a RESTful API, with best-practices middleware for security, logging, and performance.

## Project Structure

```
fullstack-app-ai/
│
├── client/           # Frontend (React + Vite + TypeScript)
│   └── dist/         # Production build output (served by Express)
│
└── server/           # Backend (Express)
    ├── index.js      # Express server entry point
    └── middleware/   # Best-practices middleware
        └── middleware.js
```

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Setup

### 1. Install dependencies

From the project root, install dependencies for both client and server:

```sh
cd client
npm install
cd ../server
npm install
```

### 2. Build the frontend

```sh
cd ../client
npm run build
```

This will output static assets to `client/dist`.

### 3. Start the backend server

```sh
cd ../server
npm start
```

- The server will serve the frontend at [http://localhost:3001](http://localhost:3001).
- API endpoints are available under `/api`.

## Development

- To run the backend in development mode with auto-reload:
  ```sh
  cd server
  npm run dev
  ```
- To run the frontend in development mode (with hot reload):
  ```sh
  cd client
  npm run dev
  ```

## API Endpoints

- `GET /api/users` — Returns a list of users (placeholder).
- `POST /api/messages` — Send a message (placeholder).

## Middleware

The backend uses best-practices middleware for:
- Security headers (`helmet`)
- CORS (`cors`)
- Logging (`morgan`)
- Compression (`compression`)
- Centralized error handling

See `server/middleware/middleware.js` for details.

## Customization

- Expand the API in `server/index.js` for user management and messaging.
- Add more middleware or custom logic in `server/middleware/middleware.js`.

## Acknowledgements

This project was built with the help of:
- Cursor AI Agent
- Claude Code CLI Agent
- [V0](https://v0.dev/) for frontend UI design inspiration and components