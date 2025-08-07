# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Desktop view of the testimonials grid section](./assets/preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/testimonials-grid-responsive-design-challenge-7-w-nGtu0xOR)
- Live Site URL: [GitHub Pages](https://hbabb.github.io/frontend-mentor-projects/07-testimonials-grid/)
- Repository URL: [GitHub Repository](https://github.com/hbabb/frontend-mentor-projects/tree/main/07-testimonials-grid)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla CSS (no frameworks or preprocessors)
- Local font files (GDPR-compliant alternative to Google Fonts API)

### What I learned

This project was a fantastic back-to-basics challenge for me. After working extensively with React and Tailwind CSS for the past year, and recently exploring Vue with Nuxt, returning to plain HTML and CSS was both humbling and educational.

**Key learnings:**

1. **Modular CSS Architecture**: I'm particularly proud of how I organized my CSS files:

```
css/
├── global/
│   ├── fonts.css
│   ├── reset.css
│   └── variables.css
└── style.css
```

This modular approach, inspired by Sass practices, shows how modern CSS has evolved to support better organization.

2. **CSS Grid Mastery**: While I'm comfortable with Flexbox, this project pushed me to really understand CSS Grid. The most challenging aspect was positioning the testimonial cards correctly across different layouts - mobile (flexbox), tablet (2-column grid), and desktop (4-column grid).

3. **Absolute Positioning Breakthrough**: The quotation mark SVG initially stumped me. I had a misconception about how absolute and relative positioning worked together. Once I realized the positioning was applied to the SVG element rather than its container, maintaining responsiveness became much clearer.

```css
@media (min-width: 768px) {
  .card-1 {
    position: relative;
  }

  .quotation {
    display: block;
    position: absolute;
    left: 23.5rem;
    top: 0;
    z-index: -1;
  }
}
```

4. **Local Font Implementation**: I discovered and implemented local font files using the Google Web Fonts Helper, which provides a GDPR-compliant alternative to the Google Fonts API.

### Continued development

Moving forward, I want to focus on:

- **CSS Grid Proficiency**: I'm excited to use Grid more frequently, potentially favoring it over Flexbox in upcoming projects to build fluency
- **Semantic HTML Mastery**: Developing intuitive understanding of proper HTML structure and accessibility
- **Vanilla CSS Fluency**: Reaching a comfort level with HTML and CSS comparable to my native language - where implementation becomes second nature rather than requiring conscious effort

### Useful resources

- [Google Web Fonts Helper](https://gwfh.mranftl.com/fonts) - Essential tool for downloading Google Fonts locally, avoiding GDPR issues with the Google Fonts API
- [Fluid Typography Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Excellent tool for generating CSS clamp() functions for responsive typography
- [Claude.ai](https://claude.ai) - Invaluable for understanding CSS Grid concepts and working through layout problem-solving approaches

## Author

- Name: Heath Babb
- Company: TechSolvd
- Website: [heath-babb.dev](https://heath-babb.dev)
- Frontend Mentor: [@hbabb](https://www.frontendmentor.io/profile/hbabb)
- Twitter: [@Heath2420](https://x.com/Heath2420)
- Codewars: [@hbabb](https://www.codewars.com/users/hbabb)
