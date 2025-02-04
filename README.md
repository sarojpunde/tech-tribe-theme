# Shopify Tech Tribe's Theme Documentation

## Getting Started

Welcome to the Shopify Tech Tribe's Theme repository, which uses Shopify's Dawn theme, the latest theme architecture is integrated with organised Javascript, TailwindCSS, Alpine.js, and GraphQL Storefront API connection. This integration optimizes code, enhances maintainability, and improves both the user and developer experiences.

## Prerequisites

- Node.js >= 16.x
- Shopify CLI >= 3.x
- Yarn >= 1.22.x

## Features

- 🎯 **Javascript** for more structured and maintainable development
- 🎨 **TailwindCSS** for utility-first styling
- ⚡ **Alpine.js** for lightweight interactivity
- 🔄 **GraphQL** for Shopify Storefront API integration
- 🖼️ **Lazy Loading** for images using vanilla-lazyload
- 📦 **Webpack** for modern JavaScript bundling
- 🎭 **PostCSS** for CSS processing

## Repository Structure

Here is an overview of the repository structure:

```
.
├── LICENSE.md
├── README.md
├── assets/
├── babel.config.js
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
├── webpack.config.js
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

- `yarn watch:js` - Watch and compile Javascript files
- `yarn build:js` - Build Javascript for production
- `yarn watch:css` - Watch and compile CSS files
- `yarn build:css` - Build CSS for production
- `yarn watch:theme` - Start Shopify theme development server
- `yarn push:theme` - Push theme files to Shopify
- `yarn dev` - Run all development processes at once
- `yarn test` - Run unit tests
- `yarn test:coverage` - Generate test coverage report

### Testing

The project uses Jest for testing. To run tests:
- Unit tests: `yarn test`
- Coverage report: `yarn test:coverage`
- Watch mode: `yarn test:watch`

### Performance Optimization

- Images are automatically lazy loaded using `vanilla-lazyload`
- JavaScript is split into chunks for optimal loading
- CSS is purged of unused styles in production using PurgeCSS
- Assets are minified in production builds
- Modern JavaScript features are transpiled for browser compatibility

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

As mentioned earlier, Custom Theme utilizes various packages and libraries like Webpack, Alpine.js, PostCSS, Tailwind, etc. Therefore, you need to run specific commands to compile JS and CSS while working on the codebase.

To preview your development changes in the development theme, run the following commands and monitor the changes:

- `yarn run watch:js` - Watch Javascript files
- `yarn run watch:css` - Watch CSS files
- `yarn run watch:theme` - Watch theme files
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

3. **GraphQL errors?**
   - Verify your store access token
   - Check API version compatibility
   - Ensure queries are properly formatted

4. **CSS changes not appearing?**
   - Clear browser cache
   - Verify TailwindCSS classes are within purge paths
   - Check PostCSS build output

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

## Resources

1. [Shopify CLI commands](https://shopify.dev/docs/themes/tools/cli/commands)
2. [Theme Kit reference](https://shopify.dev/docs/themes/tools/theme-kit/command-reference)
3. [GitHub integration](https://shopify.dev/docs/themes/tools/github/getting-started)
4. [Shopify APIs](https://github.com/Shopify/theme-scripts#readme)
5. [Liquid cheatsheet](https://www.shopify.com/partners/shopify-cheat-sheet)
6. [TypeScript Documentation](https://www.typescriptlang.org/docs/)
7. [TailwindCSS Documentation](https://tailwindcss.com/docs)
8. [Alpine.js Documentation](https://alpinejs.dev/docs)
9. [Shopify Blogs](https://shopify.engineering/)
10. [GraphQL Storefront API](https://shopify.dev/docs/api/storefront)