<!-- Make a documentation related to this project -->

# Documentation

**Shortified** - A URL shortening service built with Next.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

----------

## Introduction

Shortified is a simple and efficient URL shortening service. It allows users to create shortened URLs for any given long URL and provides analytics on the number of clicks and referrers for each shortened link.

----------

## Features

- URL shortening
- Customizable short URLs
- Analytics: click count and referrers
- Responsive design
- User authentication (optional)

----------

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/shortified.git
```

2. Install dependencies:

```shell
cd shortified
npm install
```

3. Create a .env.local file in the root directory and add your MongoDB connection string:
```shell
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shortified?retryWrites=true&w=majority
```

4. Start the development server:
```shell
npm run dev
```

----------

### Tech Stack

- **Next.js:** a React framework for building server-side rendered applications
- **MongoDB:** a NoSQL database for storing and retrieving data
- **Tailwind CSS:** a utility-first CSS framework for rapidly building custom designs

----------

### Project Structure

```shell
shortified/
├── components/
│   ├── Layout.js
│   └── ...
├── pages/
│   ├── api/
│   │   ├── [url].js
│   │   └── ...
│   ├── _app.js
│   ├── about.js
│   ├── contact.js
│   ├── generate.js
│   └── index.js
├── public/
│   ├── favicon.ico
│   ├── frontpage.jpg
│   └── ...
├── styles/
│   ├── globals.css
│   └── ...
├── utils/
│   ├── db.js
│   └── ...
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

----------

### API Endpoints
- `GET /api/generate`: Generate a shortened URL for a given long URL.
- `GET /api/[url]`: Redirect to the original long URL associated with the shortened URL.

----------

To start the development server, run:
```shell
npm run dev
```
----------

### Deployment
I used Vercel to deploy my application. Follow their respective documentation for deploying a Next.js application with MongoDB.

This project is also live at
[](https://)

----------

### License
This project is licensed under the MIT License.


Remember to replace placeholders like `your-username` with your actual GitHub username.
````
