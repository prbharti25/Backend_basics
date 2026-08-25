# Backend Basics

A structured collection of backend development lessons, exercises, and projects created while learning Node.js, Express, databases, authentication, real-time communication, and AI-powered services.

## About This Repository

This repository follows a practical backend learning path, starting with Node.js fundamentals and progressing through Express, API development, MongoDB, Mongoose, authentication, Redis, real-time applications, and modern AI integrations.

## Learning Path

- **Day01-Day05:** Node.js fundamentals, modules, servers, and continued server development
- **Day06-Day11:** Express, Postman, middleware, error handling, and API review
- **Day12-Day18:** Databases, MongoDB internals, indexing, Mongoose, schema validation, and password storage
- **Day19-Day22:** API validation, digital signatures, JWT, cookies, refresh tokens, middleware, and environment variables
- **Day23-Day26:** Logout flows, Redis, and rate limiting strategies
- **Day28-Day31:** LLM applications, MCP servers, AI agents, and debugging AI agent workflows
- **Additional Projects:** Web servers, WebSockets, and WebRTC experiments

## Topics Covered

- Node.js and the event-driven runtime
- Modules and import/export
- HTTP servers and Express
- Middleware and error handling
- API development and testing with Postman
- MongoDB and database internals
- B+ tree indexing
- Mongoose models and schema validation
- Secure password storage
- JWT authentication and cookies
- Refresh tokens and authentication middleware
- Environment variables and configuration
- Redis and session or cache workflows
- Fixed-window and sliding-window rate limiting
- WebSockets and WebRTC
- LLM applications, MCP servers, and AI agents

## Project Structure

- `Day01`-`Day31`: Progressive backend lessons and projects
- `15Web`: Additional web backend practice
- `16WebSocket`: WebSocket examples
- `17WebRTC` and `18WebRTC`: WebRTC experiments

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/prbharti25/Backend_basics.git
   ```

2. Open the project in VS Code.
3. Install the root dependencies:

   ```bash
   npm install
   ```

4. Enter the relevant lesson folder and install its dependencies when it contains a `package.json` file:

   ```bash
   npm install
   ```

5. Run the script defined by that lesson's `package.json` file, or start a JavaScript file with Node.js:

   ```bash
   node filename.js
   ```

## Environment Variables

Some lessons may require local services or environment variables for databases, authentication, Redis, or external APIs. Keep secrets in a local `.env` file and never commit credentials to GitHub.

## Skills Practiced

- Building and testing backend APIs
- Structuring Express applications
- Connecting applications to databases
- Validating data and handling errors
- Implementing authentication securely
- Working with caching, rate limiting, and real-time communication
- Exploring AI-enabled backend services

## Author

**Pushp Raj Bharti**

- GitHub: [@prbharti25](https://github.com/prbharti25)
