
# Felipe Freitas Portfolio

This is the personal portfolio website for Felipe Freitas, a Software Engineering Leader. It showcases his professional experience, skills, academic background, and articles. The project is built with Next.js and styled with Tailwind CSS, following a modern, minimalist, and technological aesthetic inspired by Material Design 3.0.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **AI (Future Potential)**: [Genkit](https://firebase.google.com/docs/genkit) (for AI-powered features)
-   **Deployment**: Firebase App Hosting (configured via `apphosting.yaml`)

## Core Features

-   **About Page**: Displays a brief introduction, skills overview, academic background, and certifications.
-   **Experience Page**: Presents professional experiences with titles, periods, and descriptions.
-   **Articles Page**: Lists all articles with summaries and links to individual article pages.
-   **Individual Article Pages**: Dynamically loads and renders articles (currently from hardcoded data in `src/lib/articles.ts`, designed to be easily adaptable for Markdown or a CMS).
-   **Responsive Design**: Optimized for various screen sizes.
-   **Dark Theme**: Uses a dark theme by default, with a charcoal gray and petrol blue color scheme.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd felipe-freitas-portfolio
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

To start the development server:

Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

The application will typically be available at `http://localhost:9002`.

### Building for Production

To create a production build:

Using npm:
```bash
npm run build
```
Or using yarn:
```bash
yarn build
```

To start the production server locally:

Using npm:
```bash
npm run start
```
Or using yarn:
```bash
yarn start
```

## Project Structure

Here's a brief overview of the key directories and files:

-   `src/app/`: Contains the core application logic, pages, and layouts using the Next.js App Router.
    -   `globals.css`: Global styles and Tailwind CSS theme customizations (colors, fonts).
    -   `layout.tsx`: The root layout for the application.
    -   `page.tsx`: The main "About" page.
    -   `experiencia/page.tsx`: The "Experience" page.
    -   `artigos/page.tsx`: The "Articles" listing page.
    -   `artigos/[slug]/page.tsx`: The template for individual article pages.
-   `src/components/`: Reusable UI components.
    -   `layout/`: Components related to the overall page structure (Navbar, Footer).
    -   `ui/`: ShadCN UI components.
-   `src/lib/`: Utility functions and data sources.
    -   `articles.ts`: Contains the data and functions for fetching articles. (Currently hardcoded, can be replaced with a dynamic data source).
    -   `utils.ts`: General utility functions (e.g., `cn` for classnames).
-   `src/ai/`: Directory for Genkit AI flows (if/when implemented).
    -   `genkit.ts`: Genkit initialization.
-   `public/`: Static assets (images, etc.). *(Note: Profile image specified in `src/app/page.tsx` should be placed here or served from a CDN).*
-   `next.config.ts`: Next.js configuration.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `components.json`: ShadCN UI configuration.
-   `apphosting.yaml`: Firebase App Hosting configuration.

## Styling

-   The application uses **Tailwind CSS** for utility-first styling.
-   The color scheme is defined in `src/app/globals.css` using CSS custom properties (HSL values) for background, foreground, primary, accent, etc., inspired by Material Design 3.0.
-   The primary font is **Inter**.
-   **ShadCN UI** components are used for pre-built, accessible UI elements.

## Content Management

### Articles

-   Article content is currently managed in `src/lib/articles.ts`. Each article is an object containing metadata (slug, title, summary, coverImage, coverImageHint) and the main content.
-   To add or modify articles, edit the `articlesData` array in this file.
-   Cover images for articles are also defined in `articlesData` and should be replaced with actual image URLs. Placeholder images from `https://placehold.co` are used by default.

## Deployment

This project is configured for deployment on **Firebase App Hosting**. The `apphosting.yaml` file contains the basic configuration. Refer to the [Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting) for more details on deployment.

## Future Enhancements

-   **Dynamic Article Loading**: Replace the hardcoded article data in `src/lib/articles.ts` with a system that reads from Markdown files (e.g., in an `articles/` directory) or a Headless CMS.
-   **AI-Powered Features**: Implement Genkit flows for features like:
    -   AI-generated article summaries.
    -   A chatbot for portfolio-related queries.
    -   AI-assisted content creation.
-   **Contact Form**: Add a functional contact form.
-   **Animations & Transitions**: Enhance user experience with more subtle animations and page transitions.
-   **Image Optimization**: Ensure all images (profile, article covers) are properly optimized for web performance using `next/image`.
-   **SEO Improvements**: Further optimize for search engines.

---

This README provides a comprehensive guide to understanding, setting up, and developing the Felipe Freitas Portfolio project.
