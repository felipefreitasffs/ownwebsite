
# Felipe Freitas Portfolio

This is the personal portfolio website for Felipe Freitas, a Software Engineering Leader. It showcases his professional experience, skills, academic background, and articles. The project is built with Next.js and styled with Tailwind CSS, following a modern, minimalist, and technological aesthetic inspired by Material Design 3.0.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)
-   **Markdown Parsing**: [Gray Matter](https://github.com/jonschlinkert/gray-matter)
-   **AI (Future Potential)**: [Genkit](https://firebase.google.com/docs/genkit) (for AI-powered features)
-   **Deployment**: Firebase App Hosting (configured via `apphosting.yaml`)

## Core Features

-   **About Page**: Displays a brief introduction, skills overview, academic background, and certifications.
-   **Experience Page**: Presents professional experiences with titles, periods, and descriptions.
-   **Articles Page**: Lists all articles with summaries and links to individual article pages.
-   **Individual Article Pages**: Dynamically loads and renders articles from Markdown files (in `src/articles/`), with structured data (JSON-LD) for SEO, rendered using `react-markdown`.
-   **Responsive Design**: Optimized for various screen sizes.
-   **Dark Theme**: Uses a dark theme by default, with a charcoal gray and petrol blue color scheme.
-   **SEO Optimized**: Comprehensive metadata, sitemap (`/sitemap.xml`), and robots directives (`/robots.txt`).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or later recommended)
-   [npm](https://www.npmjs.com/) (ensure you have a `package-lock.json`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd felipe-freitas-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server:
```bash
npm run dev
```
The application will typically be available at `http://localhost:9002`.

### Building for Production

To create a production build:
```bash
npm run build
```

To start the production server locally:
```bash
npm run start
```

## Project Structure

Here's a brief overview of the key directories and files:

-   `src/app/`: Contains the core application logic, pages, and layouts using the Next.js App Router.
    -   `globals.css`: Global styles and Tailwind CSS theme customizations.
    -   `layout.tsx`: The root layout for the application, including global metadata.
    -   `page.tsx`: The main "About" page with specific metadata.
    -   `experiencia/page.tsx`: The "Experience" page with specific metadata.
    -   `artigos/page.tsx`: The "Articles" listing page with specific metadata.
    -   `artigos/[slug]/page.tsx`: The template for individual article pages with dynamic metadata and JSON-LD.
    -   `icon.svg`: Favicon for the site.
    -   `robots.ts`: Generates `robots.txt`.
    -   `sitemap.ts`: Generates `sitemap.xml`.
-   `src/components/`: Reusable UI components.
    -   `layout/`: Components related to the overall page structure (Navbar, Footer).
    -   `ui/`: ShadCN UI components.
-   `src/lib/`: Utility functions and data sources.
    -   `articles.ts`: Contains functions for reading and processing article data from Markdown files located in `src/articles/`, using `gray-matter` for parsing frontmatter.
    -   `utils.ts`: General utility functions.
-   `src/articles/`: Contains the Markdown (`.md`) files for each article. Each file includes YAML frontmatter for metadata (title, summary) and the main article content.
-   `src/ai/`: Directory for Genkit AI flows (if/when implemented).
    -   `genkit.ts`: Genkit initialization.
-   `public/`: Static assets.
    -   `site.webmanifest`: Basic manifest file for PWA capabilities (created, can be customized).
    -   **IMPORTANT**: You should add `og-image.png` (1200x630 for social sharing) and `apple-icon.png` here.
    -   **IMPORTANT**: You may also want `profile-image-social.png` for the homepage social share.
-   `next.config.ts`: Next.js configuration.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `components.json`: ShadCN UI configuration.
-   `apphosting.yaml`: Firebase App Hosting configuration.

## SEO & Metadata

-   The site uses Next.js's Metadata API for robust SEO.
-   Global metadata is defined in `src/app/layout.tsx`.
-   Page-specific metadata is defined in each `page.tsx` file.
-   Article pages include JSON-LD structured data.
-   A `sitemap.xml` is dynamically generated via `src/app/sitemap.ts`.
-   A `robots.txt` is generated via `src/app/robots.ts`.
-   **Action Required**:
    1.  Update `siteUrl` in `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` (or set `NEXT_PUBLIC_SITE_URL` environment variable) with your actual production domain.
    2.  Create and place `og-image.png` (1200x630) in the `/public` folder for default social sharing.
    3.  Create and place `apple-icon.png` in the `/public` folder.
    4.  Review and customize the `site.webmanifest` file in the `/public` folder for PWA capabilities and richer OS integration.
    5.  Optionally, create `profile-image-social.png` for the homepage's Open Graph image.

## Content Management

### Articles

-   Article content is managed as Markdown files (`.md`) located in the `src/articles/` directory.
-   Each Markdown file should contain YAML frontmatter at the top for metadata such as `title` and `summary`. The rest of the file is the article content in Markdown format.
-   The `src/lib/articles.ts` file handles reading these files, parsing their frontmatter using `gray-matter`, and combining this with static metadata (like `slug`, `coverImage`, `publishDate`) defined within it.
-   To add a new article:
    1.  Create a new `.md` file in `src/articles/` (e.g., `src/articles/my-new-article.md`).
    2.  Add YAML frontmatter (e.g., `title: "My New Article"`, `summary: "A brief summary."`).
    3.  Write the article content in Markdown.
    4.  Add a corresponding entry to the `articlesStaticData` array in `src/lib/articles.ts` with the `slug`, `coverImage`, `coverImageHint`, and `publishDate`.

## Deployment

This project is configured for deployment on **Firebase App Hosting**. The `apphosting.yaml` file contains the basic configuration.

## Future Enhancements

-   **Dynamic Article Loading**: From a Headless CMS (Markdown file loading is now implemented).
-   **AI-Powered Features**: With Genkit.
-   **Contact Form**.
-   **Animations & Transitions**.
-   **PWA Enhancements**: Further customize `site.webmanifest` and add a service worker if desired.

---

This README provides a comprehensive guide to understanding, setting up, and developing the Felipe Freitas Portfolio project.
