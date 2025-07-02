# Project Rules

These rules are designed to ensure smooth collaboration, maintainability, and reliability for the `fullstack-app-ai` project. All contributors and AI agents should follow these rules.

---

## 1. Dependency Management
- Always install dependencies for both `client` and `server` before building or running the project.
- Never remove or update dependencies without verifying their impact on both frontend and backend.
- Use the `tasks.json` file to determine the correct order of operations.

## 2. Build & Run Workflow
- The client must be built (`npm run build` in `client/`) before starting the server in production mode.
- For development, run both client and server in parallel after installing dependencies.
- The server serves static assets from `client/dist`.

## 3. Middleware & Security
- All middleware should be added to `server/middleware/middleware.js` and applied via `applyMiddleware` in `server/index.js`.
- Security, logging, CORS, and compression middleware are required for all deployments.

## 4. API & Code Organization
- All new API endpoints should be RESTful and documented.
- Place new middleware in the `server/middleware/` directory.
- Keep frontend and backend code separated by their respective folders.

## 5. Documentation
- Update the `README.md` and `PRD.md` with any major changes to project structure, workflow, or features.
- Add or update tasks in `tasks.json` if the workflow changes.

## 6. Proactive Rule Addition
- If a new situation, tool, or workflow arises that is not covered by these rules, add a new rule to this document immediately.
- All contributors and AI agents are empowered and expected to proactively update this file to keep the project running smoothly.

---

_Last updated: 2024-07-02_ 