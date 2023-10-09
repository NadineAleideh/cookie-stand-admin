# Cookie Stand Admin Lab 37

A simple cookie stand admin app with a form to enable the admin to enter Cookie Stand information.

![out](./assets/lab37out.PNG)

This project is a [Next.js](https://nextjs.org/) application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Cookie Stand Admin Lab 38

The Cookie Stand Admin App is a web application built using Next.js and styled with Tailwind CSS. It allows users to manage and view cookie stand data, including locations, hourly sales, and totals.

## Outputs

![out](./assets/lab38out1.PNG)
![out](./assets/lab38out2.PNG)
![out](./assets/lab38out3.PNG)
![out](./assets/lab38out4.PNG)
![out](./assets/lab38out5.PNG)

## Features

- **Overview Page:** View an overview of all cookie stands.
- **Create New Stand:** Add a new cookie stand with location and hourly sales data.
- **Report Table:** Display a table with hourly sales data for each cookie stand.
- **Footer:** Show the total number of locations and a copyright notice.

# Cookie Stand Admin Lab 39

Version 3 of this app introduces several new features and improvements:

- **Delete Functionality:** Added the ability to delete cookie stands.
- **API Integration:** Utilized a backend API to store and retrieve cookie stand data.
- **Updated Design:** Enhanced the app's overall look and feel for a better user experience.
- **Improved Performance:** Optimized the application for faster loading and responsiveness.
- **Bug Fixes:** Resolved various bugs and issues from previous versions.

## Usage

- The homepage displays an overview of all cookie stands fetched from the API.
- Click the "Create New Stand" button to add a new cookie stand with location and hourly sales data, which is sent to the API.
- The "Report Table" section displays a table with hourly sales data for each cookie stand, fetched from the API.
- To delete a cookie stand, click the "Delete" button in the "Actions" column of the table. The deletion operation is performed via the API.
- The "Footer" section shows the total number of locations and a copyright notice.

## Mock Login (username: admin, password: password)

Please note that this version of Cookie Stand Admin includes a mock login feature built into the frontend. Due to the absence of authentication in the API, this mock login provides a simple way to simulate user login sessions. No real user accounts or authentication mechanisms are involved; it's purely for demonstration purposes.

## Outputs

![out](./assets/lab39-1.png)
![out](./assets/lab39-2.png)
![out](./assets/lab39-3.png)
![out](./assets/lab39-4.png)
![out](./assets/lab39-5.png)
![out](./assets/lab39-6.png)

## Installation

To run the app locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd cookie-stand-admin
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000` to use the app.

## Built With

- [Next.js](https://nextjs.org/) - React framework for server-rendered React applications.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language used for the app's logic.
- API - Utilized a backend API to store and retrieve cookie stand data.
