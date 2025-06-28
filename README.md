# Shop Builder Circle's Theme Documentation

## Getting Started

Welcome to the Shop Builder Circle's Theme repository, which uses Shopify's Dawn theme, the latest theme architecture is integrated with organised Javascript, TailwindCSS, Alpine.js, and GraphQL Storefront API connection. This integration optimizes code, enhances maintainability, and improves both the user and developer experiences.

## Prerequisites

- Node.js >= 16.x
- Shopify CLI >= 3.x
- Yarn >= 1.22.x

## Features

- 🎯 **JavaScript** for more structured and maintainable development
- 🎨 **TailwindCSS** for utility-first styling
- ⚡ **Alpine.js** for lightweight interactivity
- 🔄 **GraphQL** for Shopify Storefront API integration
- 🖼️ **Lazy Loading** for images using vanilla-lazyload
- ⚡ **Vite** for fast, modern JavaScript bundling and development
- 🎭 **PostCSS** for CSS processing

## Repository Structure

Here is an overview of the repository structure:

```
.
├── LICENSE.md
├── README.md
├── assets/
├── config/
├── css/
├── js/
├── layout/
├── locales/
├── package.json
├── postcss.config.js
├── release-notes.md
├── sections/
├── shopify.theme.toml.example
├── snippets/
├── tailwind.config.js
├── templates/
├── translation.yml
├── vite.config.js
└── yarn.lock
```

## Setting Up a Local Environment

To begin working with Custom Theme locally, follow these steps:

1. Install [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install) or [Shopify Theme Kit](https://shopify.dev/docs/themes/tools/theme-kit/getting-started).
2. Install Node.js and Yarn as this project uses Yarn as a package manager for Node.js libraries.
3. Clone this repository to your local system and run `yarn install` inside the cloned repository.
4. Copy `.env.example` to `.env` and configure the following required variables:
   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_API_KEY=your_storefront_api_key
   ```
5. If you're using Shopify CLI, create a `shopify.theme.toml` file in the root folder and configure it. For reference, you can check the `shopify.theme.toml.example` file or refer to Shopify's [documentation](https://shopify.dev/docs/themes/tools/cli/environments).
6. Ensure you set up development, staging, and production environments in these configuration files.
7. To ignore watching specific files, add them to the `shopify.theme.toml` in the `ignore` array.

**Note:** For Custom Theme, these environments have already been set up with placeholder values, so you just need to replace them with your own Shopify store credentials.

## Development Workflow

### Available Scripts

- `yarn watch:js` - Watch and compile JavaScript files using Vite
- `yarn build:js` - Build JavaScript for production using Vite
- `yarn watch:css` - Watch and compile CSS files using PostCSS
- `yarn build:css` - Build CSS for production using PostCSS
- `yarn watch:theme` - Start Shopify theme development server
- `yarn push:theme` - Push theme files to Shopify development environment
- `yarn push:theme-staging` - Push theme files to Shopify staging environment
- `yarn dev` - Run all development processes at once (CSS watch, JS watch, and theme watch)
- `yarn build` - Build both CSS and JavaScript for production
- `yarn test` - Run unit tests using Jest

### Testing

The project uses Jest for testing. To run tests:
- Unit tests: `yarn test`

### Performance Optimization

- Images are automatically lazy loaded using `vanilla-lazyload`
- JavaScript is built and optimized using Vite for fast development and optimal production bundles
- CSS is processed with PostCSS and optimized with cssnano in production
- Modern JavaScript features are supported through Vite's built-in transpilation
- Assets are minified in production builds
- Fast development server with Hot Module Replacement (HMR) via Vite

### GIT & GITHUB WORKFLOW

This repository has two main branches: `master` and `development`, each connected to separate themes on the Custom Theme Store. When you push changes to either of these branches, they immediately reflect on the associated themes.

1. When working on a task, always pull changes from the `master` branch, which is connected to the live theme, and merge them into the `development` branch.
2. Create and checkout a personal `feature-branch` for developing a new task.
3. Complete your development work and commit the changes.

Example commands:
```shell
git checkout master
git pull origin master
git checkout -b feature-branch
```

**Note:** We use the `master` branch for **Production**, `development` for **Staging**, and any other `feature-branch` for the **Development** environment.

### LOCAL DEVELOPMENT WORKFLOW

As mentioned earlier, Custom Theme utilizes various packages and libraries like Vite, Alpine.js, PostCSS, Tailwind, etc. Therefore, you need to run specific commands to compile JS and CSS while working on the codebase.

To preview your development changes in the development theme, run the following commands and monitor the changes:

- `yarn watch:js` - Watch JavaScript files with Vite development server
- `yarn watch:css` - Watch CSS files with PostCSS
- `yarn watch:theme` - Watch theme files with Shopify CLI
- `yarn dev` - Run all development commands at once

### Troubleshooting

Common issues and solutions:

1. **Theme not updating?**
   - Clear theme cache: `shopify theme cache clear`
   - Ensure all watch processes are running
   - Check for build errors in the console

2. **Build failing?**
   - Verify Node.js version matches prerequisites
   - Clear yarn cache: `yarn cache clean`
   - Delete `node_modules` and run `yarn install`
   - Check Vite configuration in `vite.config.js`

3. **GraphQL errors?**
   - Verify your store access token
   - Check API version compatibility
   - Ensure queries are properly formatted

4. **CSS changes not appearing?**
   - Clear browser cache
   - Verify TailwindCSS classes are within content paths in `tailwind.config.js`
   - Check PostCSS build output

5. **JavaScript changes not appearing?**
   - Ensure Vite development server is running
   - Check browser console for JavaScript errors
   - Verify file paths in Vite configuration

### DEPLOYMENT WORKFLOW

To push changes from your `feature-branch`:

1. Checkout the `master` branch.
2. Pull changes from the `master` branch.
3. Checkout your `feature-branch`.

Example commands:
```shell
git checkout master
git pull origin master
git checkout feature-branch
```

**Staging:**

To push your changes to the **Staging** environment, merge your `feature-branch` with the `master` branch by running `git merge master`. Resolve any conflicts and push to the remote (GitHub). Create a pull request (PR) with the **base branch** set to **development** and the **compare** branch set to your **feature** branch. Merge the PR.

**Production:**

To push your changes to the **Production** environment, create a PR with the **base branch** set to **master** and the **compare** branch set to **development**. Merge the PR.

**Note:** This branch uses Shopify's native github integration hence any changes pushed to **develop** and **master** branch will automatically reflect on Custom Theme's Live and Staging themes.

## Theme Customization Workflow

Developers work on the Development and Staging environments, while the content team can make content changes directly in the live theme.

1. Development theme: Used for development purposes, such as building new functionalities/modules, running various tests, and fixing encountered bugs.
2. Staging theme: After testing, developers push changes to the Staging theme to showcase their work.
3. Production theme: Once the QA team approves the Staging theme changes, they are pushed to the Production theme.

**Note for Content Team:**
1. For new sections/modules, the content team can make content changes directly in the Staging theme, and developers will push those changes to the Production theme.
2. The content team doesn't need to perform any tasks on GitHub to push changes to the live theme.

## Technical Notes

- Use best practices for all JavaScript development
- Follow TailwindCSS utility-first approach
- Use Alpine.js for simple interactivity
- GraphQL queries are in `js/graphql/queries`
- Add `lazy` class to images for lazy loading
- Main JavaScript entry point is `js/index.js` which builds to `assets/theme.min.js`
- Vite configuration is in `vite.config.js` for customizing the build process
- PostCSS configuration is in `postcss.config.js` for CSS processing

## Build Process

### JavaScript (Vite)
- Entry: `js/index.js`
- Output: `assets/theme.min.js`
- Features: ES2015+ support, HMR in development, optimized production builds
- Configuration: `vite.config.js`

### CSS (PostCSS + TailwindCSS)
- Entry: `css/theme.css`
- Output: `assets/theme.min.css.liquid`
- Features: TailwindCSS utilities, autoprefixer, cssnano optimization
- Configuration: `postcss.config.js` and `tailwind.config.js`

## Resources

1. [Shopify CLI commands](https://shopify.dev/docs/themes/tools/cli/commands)
2. [Theme Kit reference](https://shopify.dev/docs/themes/tools/theme-kit/command-reference)
3. [GitHub integration](https://shopify.dev/docs/themes/tools/github/getting-started)
4. [Shopify APIs](https://github.com/Shopify/theme-scripts#readme)
5. [Vite documentation](https://vitejs.dev/)
6. [TailwindCSS documentation](https://tailwindcss.com/)
7. [Alpine.js documentation](https://alpinejs.dev/)