# Content Creator Hub

A web application for discovering, adding, and managing content creators using React, Supabase, and other modern technologies.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 18 or higher (for running the development server and managing dependencies)
- **npm**: Version 8 or higher (comes with Node.js) or **Yarn** (optional, as an alternative package manager)
- **Supabase Account**: Set up a Supabase project for database and authentication

## Installation

1. **Clone the Repository**:

```sh
git clone https://github.com/SRshohan/CreatorVerse.git
cd CreatorVerse
```

2. Install Dependencies:
```sh
npm install
```

3. Dependencies

- React: For building user interfaces
- React Router: For routing within the application
- Supabase: For backend services (authentication and database)
- dotenv: For managing environment variables

4. Verify Environment Variables (.env in root dir)

```sh
VITE_SUPABASE_URL=<url>
VITE_SUPABASE_API_KEY=<key>
```
- Example

```sh
const URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
```

5. Run the project

```sh
npm run dev
```

6. Demo
![Home](/src/demo/Screenshot%202024-08-25%20at%2010.58.29 PM.png)
![ViewAll](/src/demo/Screenshot%202024-08-25%20at%2010.58.36 PM.png)
![ContentProfile](/src/demo/Screenshot%202024-08-25%20at%2010.58.43 PM.png)
![Edit](/src/demo/Screenshot%202024-08-25%20at%2010.58.50 PM.png)
