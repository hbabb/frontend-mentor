# Frontend Mentor Projects

A comprehensive collection of Frontend Mentor challenges built with Nuxt, focusing on mastering fundamental web development skills through practical, real-world projects while seamlessly integrating with my developer portfolio.

## 🎯 Repository Purpose

This repository serves as a dedicated workspace for Frontend Mentor challenges, emphasizing:

- **Fundamental Mastery**: Focusing on core HTML, CSS, and JavaScript skills within a modern framework
- **Portfolio Integration**: Seamless incorporation with my Nuxt-based developer portfolio
- **Progressive Learning**: Documenting growth and problem-solving approaches across projects
- **Modern Development**: Leveraging Nuxt's capabilities while maintaining focus on web fundamentals
- **Code Maintenance**: Centralized repository with superior component architecture and reusability

## 🏗️ Project Structure

The project follows a modern Nuxt architecture optimized for Frontend Mentor challenges:

```
frontend-mentor/
├── app/
│   ├── app.vue                    # Root application component
│   ├── assets/
│   │   └── scss/                  # Global SCSS architecture
│   │       ├── main.scss
│   │       └── partials/
│   │           ├── _fonts.scss
│   │           ├── _reset.scss
│   │           └── _variables.scss
│   ├── components/
│   │   └── app/                   # Reusable app components
│   │       ├── footer.vue
│   │       └── nav-bar.vue
│   ├── layouts/
│   │   └── default.vue            # Default page layout
│   ├── lib/                       # Utility functions
│   └── pages/                     # Challenge pages
│       ├── (challenge-07)/
│       │   └── testimonials-grid.vue
│       ├── (challenge-08)/
│       │   └── meet-landing.vue
│       └── index.vue              # Landing page
├── docs/                          # Learning documentation
│   ├── notes/                     # Challenge-specific notes
│   ├── resources/                 # Reference materials
│   └── technology/                # Technical documentation
├── public/                        # Static assets
│   ├── challenge-07/              # Challenge-specific assets
│   ├── challenge-08/
│   ├── fonts/                     # Local fonts (GDPR-compliant)
│   └── ...
└── nuxt.config.ts                 # Nuxt configuration
```

## 📋 Current Projects

### Completed Challenges

| Project                                                 | Difficulty | Technologies                 | Live Demo                                                        | Status         |
| ------------------------------------------------------- | ---------- | ---------------------------- | ---------------------------------------------------------------- | -------------- |
| [07 - Testimonials Grid](<./app/pages/(challenge-07)/>) | Newbie     | Nuxt, Vue, CSS Grid, Flexbox | [Demo](https://frontend-mentor.heath-babb.dev/testimonials-grid) | ✅ Complete    |
| [08 - Meet Landing Page](<./app/pages/(challenge-08)/>) | Newbie     | Nuxt, Vue, Responsive Design | [Demo](https://frontend-mentor.heath-babb.dev/meet-landing)      | 🚧 In Progress |

### Planned Projects

- Additional Frontend Mentor challenges focusing on progressively complex layouts
- Integration of advanced CSS techniques (animations, complex grids, custom properties)
- JavaScript-heavy challenges to complement the CSS-focused approach

## 🛠️ Development Approach

### Technology Stack

- **Framework**: Nuxt 3 (Vue.js ecosystem)
- **Languages**: HTML5, CSS3 (SCSS), JavaScript (ES6+), TypeScript
- **Methodologies**: Mobile-first design, Progressive enhancement, Component-driven development
- **Package Manager**: pnpm (fast, efficient package management)
- **IDE**: Visual Studio Code

### Why Nuxt for Frontend Mentor?

The transition to Nuxt provides several key advantages while maintaining the core learning objectives:

- **Portfolio Integration**: Seamless deployment alongside my main developer portfolio
- **Component Reusability**: Shared components, layouts, and styles across challenges
- **Modern Development Experience**: Hot reloading, TypeScript support, and excellent DX
- **SEO & Performance**: Built-in optimizations for production deployment
- **Scalability**: Better architecture for growing challenge collection
- **Learning Enhancement**: Exposure to modern Vue.js patterns while focusing on CSS fundamentals

### Development Tooling & Code Quality

#### Linting & Formatting

- **ESLint**: [@antfu/eslint-config](https://github.com/antfu/eslint-config) - Modern, opinionated ESLint configuration
- **ESLint Stylistic**: Integrated formatting solution (Prettier alternative)
- **Multi-language Support**: ESLint validation for Vue, TypeScript, HTML, CSS, and more
- **Nuxt Integration**: Optimized for Vue Single File Components and Nuxt patterns

**Nuxt-Specific ESLint Benefits:**

- **Vue SFC Support**: Proper linting for `<template>`, `<script>`, and `<style>` blocks
- **Composition API**: Modern Vue 3 patterns with proper TypeScript integration
- **Auto-imports**: ESLint understanding of Nuxt's auto-imported composables and components
- **SSR Awareness**: Linting rules that understand universal/client-side code differences

<details>
<summary>View ESLint Configuration</summary>

```javascript
// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
  nuxt: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
    objectCurlySpacing: "always",
    arrowParens: "always",
    linebreaks: "unix",
  },
  ignores: [
    ".pnpm-store/**",
    "node_modules/**",
    ".nuxt/**",
    ".output/**"
  ],
}, {
  rules: {
    "vue/max-attributes-per-line": ["error", {
      singleline: { max: 2 },
      multiline: { max: 1 },
    }],
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      cases: { camelCase: true, kebabCase: true },
      ignore: ["README.md"],
    }],
  },
});
```

</details>

#### Git Workflow & Automation

- **Husky**: Git hooks for automated quality checks
- **lint-staged**: Pre-commit linting on staged files only
- **Automated Scripts**:
  ```bash
  pnpm dev         # Start Nuxt development server
  pnpm build       # Build for production
  pnpm preview     # Preview production build
  pnpm lint        # Run ESLint on entire project
  pnpm lint:fix    # Auto-fix ESLint issues where possible
  ```

### Architecture Philosophy

#### Component-Driven Development

- **Reusable Components**: Shared navigation, footer, and utility components
- **Challenge-Specific Pages**: Each challenge as a dedicated Vue page component
- **Layout System**: Consistent structure across all challenges
- **Asset Management**: Organized static assets per challenge

#### CSS Architecture

- **SCSS Modules**: Modular stylesheet architecture with partials
- **CSS Custom Properties**: Modern variable system for theming
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Component Scoping**: Vue's scoped CSS for component-specific styles

#### Learning Documentation

- **Challenge Notes**: Markdown documentation for each project's learning outcomes
- **Technical Decisions**: Documented rationale for architectural choices
- **Progress Tracking**: Evolution of skills and problem-solving approaches

## 🚀 Deployment Strategy

- **Automatic Deployment**: Integrated with portfolio deployment pipeline
- **Subdomain Hosting**: `frontend-mentor.heath-babb.dev` for dedicated access
- **Portfolio Integration**: Selected challenges featured in main portfolio
- **Performance Optimization**: Nuxt's built-in optimizations for production

## 📚 Learning Documentation

### Current Focus Areas

- **Vue 3 Composition API**: Modern Vue patterns within Frontend Mentor contexts
- **CSS-in-Vue**: Mastering scoped styles, CSS modules, and Vue-specific CSS patterns
- **Component Architecture**: Building reusable, maintainable component systems
- **Responsive Design**: Advanced responsive patterns using modern CSS
- **TypeScript Integration**: Type-safe development while maintaining design focus

### Documentation Structure

```
docs/
├── notes/                    # Challenge-specific learning notes
│   ├── 20250801-testimonial-grid.md
│   └── template.md
├── resources/                # Reference materials and inspiration
└── technology/               # Technical documentation and decisions
```

## 🔗 Links & Resources

### Project Links

- **Live Site**: [frontend-mentor.heath-babb.dev](https://frontend-mentor.heath-babb.dev)
- **Repository**: [GitHub](https://github.com/hbabb/frontend-mentor-projects)
- **Portfolio Integration**: [heath-babb.dev](https://heath-babb.dev)

### External Profiles

- **Frontend Mentor**: [@hbabb](https://www.frontendmentor.io/profile/hbabb)
- **Twitter**: [@Heath2420](https://x.com/Heath2420)
- **Codewars**: [@hbabb](https://www.codewars.com/users/hbabb)

## 🎨 Design Philosophy

This repository represents an evolution in my learning approach—combining fundamental web development mastery with modern framework proficiency. The transition to Nuxt allows for:

**Enhanced Learning Through Modern Tools:**

- Component-driven thinking while maintaining CSS fundamentals focus
- TypeScript integration for better code quality and learning
- Modern build tools and development experience
- Seamless integration with professional portfolio work

**Maintained Core Principles:**

- Clean, semantic markup (now enhanced with Vue's template system)
- Maintainable, modular CSS architecture (SCSS + Vue scoped styles)
- Progressive enhancement principles
- Accessibility-first approach
- Performance optimization (enhanced by Nuxt's built-in optimizations)

Each project emphasizes the intersection of fundamental skills and modern development practices.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for Nuxt development)
- pnpm (package manager)
- Modern web browser for testing

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/hbabb/frontend-mentor-projects.git
   cd frontend-mentor-projects
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. **VS Code Setup** (recommended):
   - Open the project in VS Code
   - Install recommended extensions (Vetur/Volar, ESLint, etc.)
   - Extensions optimized for Vue/Nuxt development experience

4. Start development server:

   ```bash
   pnpm dev
   ```

   Navigate to `http://localhost:3000` to view the project.

5. Run code quality checks:

   ```bash
   pnpm lint        # Check for linting issues
   pnpm lint:fix    # Auto-fix issues where possible
   ```

6. Development workflow:
   - Create new challenge pages in `app/pages/`
   - Add challenge assets to `public/challenge-XX/`
   - Document learning in `docs/notes/`
   - Commit changes trigger automated quality checks

### Adding New Challenges

1. Create a new page component: `app/pages/(challenge-XX)/challenge-name.vue`
2. Add challenge assets: `public/challenge-XX/`
3. Update the challenges table in this README
4. Document the learning process in `docs/notes/`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**About the Developer**: Heath Babb | TechSolvd | Building mastery through modern tools and timeless fundamentals
