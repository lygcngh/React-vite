# Project Overview: CloudX Scope Frontend

## Project Type
- **Framework**: React + Vite
- **Language**: TypeScript
- **UI Library**: Chakra UI
- **State Management**: TanStack Query
- **Routing**: TanStack Router

## Development Environment

### Prerequisites
- Node.js (managed via nvm or fnm)
- npm

### Node Version
- Specified in `.nvmrc`
- Use `nvm install` or `fnm install` to set up the correct Node.js version

## Key Commands

### Development
- Start development server: `npm run dev`
  - Runs on http://localhost:5173/
  - Uses Vite for hot module replacement

### Build
- Production build: `npm run build`
  - Compiles TypeScript and builds production-ready assets

### Linting
- Run linter: `npm run lint`
  - Uses Biome for code formatting and linting
  - Automatically fixes issues with `--write` flag

### Testing
- End-to-End Tests: `npx playwright test`
  - Requires Docker Compose stack running
  - UI mode available with `npx playwright test --ui`

### Client Generation
- Generate API Client: `npm run generate-client`
  - Requires OpenAPI JSON from backend
  - Updates frontend client based on latest backend schema

## Project Structure
- `src/`: Main frontend code
  - `assets/`: Static assets
  - `client/`: Generated OpenAPI client
  - `components/`: React components
  - `hooks/`: Custom React hooks
  - `routes/`: Application routes and pages

## Key Configuration Files
- `vite.config.ts`: Vite build configuration
- `tsconfig.json`: TypeScript configuration
- `biome.json`: Code formatting and linting rules
- `.env`: Environment-specific configurations

## Remote API Configuration
- Set `VITE_API_URL` in `.env` to use a remote backend
- Default is localhost during development

## Docker Support
- `Dockerfile`: Containerization for production deployment
- `Dockerfile.playwright`: For end-to-end testing environment

## Notes
- Recommended workflow is local development server
- Docker image is for production-like environment testing