# Frontend Mentor Challenge Solutions Template

## General Information

### Solution Title

Include some of the tools and techniques you used to complete the Challenge

```markdown
Meet Landing Page - HTML5, SCSS, CSS Grid, Flexbox, Mobile-First Design
```

### Repository URL

Read our [complete guide to submitting solutions](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for hel creating a repository

```markdown
https://github.com/hbabb/frontend-mentor/tree/main/app/pages/(challenge-08)
```

### Live site URL

Read more about our [recommended free hosting options](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe) for help deploying a repository

```markdown
https://frontend-mentor-pied-six.vercel.app/meet-landing
```

### Which tools, libraries, frameworks, or methodologies did you use for this project?

Add up to 5 tags for your project's tools and approaches, excluding HTML, CSS, and JavaScript. Missing a tag? Request it at <u>[_hi@frontendmentor.io_](mailto:hi@frontendmentor.io)</u>

```markdown
SCSS, CSS Grid, Flexbox, Mobile-First, BEM
```

## Solution Retrospective

The solution retrospective helps you think about your project and share it with the community. Answer the three questions below to talk about your project, what you learned, and where you need support. Clear details help others understand and give useful feedback.

### What are you most proud of, and what would you do differently next time?

```markdown
I'm most proud of implementing a responsive design that transforms dramatically between mobile and desktop layouts. The hero section switches from a stacked mobile layout to a three-column desktop grid where the text content sits between two hero images that extend beyond the viewport edges. I successfully used CSS Grid with `display: contents` to restructure the layout without changing the HTML structure.

I'm also proud of creating a scalable typography system using fluid type with clamp() functions, and implementing a nested BEM methodology that mirrors the HTML structure for better maintainability. I used a neat little tool recommended by `Coder Coder Builds` called ["The Clamp Calculator"](https://royalfig.github.io/fluid-typography-calculator/)

Next time, I would spend more time upfront analyzing the Figma design specifications to better understand spacing and positioning requirements before jumping into code. I would also document my BEM naming conventions more clearly from the start.
```

### What challenges did you encounter, and how did you overcome them?

```markdown
The biggest challenge was implementing the desktop hero layout where images needed to extend beyond the viewport while keeping the design fully responsive. Initially, I struggled with how to position the images without using fixed widths or transforms that would break responsiveness.

I solved this by using CSS Grid with `display: contents` to break the image container and position images in separate grid columns, then using negative margins based on the exact Figma spacing values to pull the images beyond their grid areas.

Another challenge was creating fluid typography that scales smoothly between breakpoints. I learned how to properly use clamp() with calculated viewport-based values rather than static rem units for the preferred value.

I also had to work through nested BEM naming conventions, ultimately deciding to use a structure like `content__info__tagline` that mirrors the HTML nesting rather than the traditional flat BEM approach.
```

### What specific areas of your project would you like help with?

```markdown
I'd appreciate feedback on my BEM naming convention approach. I used nested structures like `content__info__title__tagline` that mirror the HTML hierarchy rather than the traditional flat `block__element` pattern. While this feels more intuitive and maintainable, I'd like to know if this deviates too much from BEM best practices.

I'd also like input on my fluid typography implementation - specifically whether my clamp() calculations are optimal for smooth scaling between breakpoints, and if there are better approaches for creating responsive type scales.

Finally, I'm curious about alternative solutions for the desktop hero layout. While my CSS Grid + negative margins approach works, I wonder if there are more elegant or performant ways to achieve images that extend beyond viewport edges while maintaining full responsiveness.
```
