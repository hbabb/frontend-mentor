# Learning Journal: Testimonials Grid Section

**Date:** August 1, 2025
**Challenge:** [07 - Testimonials Grid Section](../07-testimonials-grid/)
**Difficulty:** Newbie
**Status:** ✅ Complete

## Challenge Overview

Returning to vanilla HTML and CSS after a year of working with React and Tailwind CSS. This was intentionally challenging - stripping away modern conveniences to focus on fundamental skills.

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox)
- Mobile-first responsive design

## Key Learning Outcomes

### 1. Modular CSS Architecture

Created a clean, maintainable CSS structure inspired by Sass practices:

```
css/
├── global/
│   ├── fonts.css      # Local font declarations
│   ├── reset.css      # Browser normalization
│   └── variables.css  # CSS custom properties
└── style.css          # Main stylesheet with imports
```

**Why this matters:** Modern CSS supports modular imports, allowing for better organization without preprocessors.

### 2. CSS Grid Layout Mastery

**Challenge:** Transitioning from Flexbox-comfortable to Grid-proficient

**Layout Strategy:**

- Mobile: Flexbox (single column, simple stacking)
- Tablet: 2-column CSS Grid
- Desktop: 4-column CSS Grid with specific card positioning

**Breakthrough Moment:** Understanding that Grid placement happens at the item level, not the container level. Cards can be explicitly positioned using `grid-column` and `grid-row` properties.

### 3. Absolute Positioning Revelation

**Problem:** The quotation mark SVG background positioning seemed like it would break responsiveness.

**Misconception:** I thought absolute positioning would disrupt the card's responsive behavior.

**Solution:** Realized the positioning was applied to the SVG background, not the card container. The card maintains its responsive flow while the background SVG stays correctly positioned relative to the card.

```css
.card-1 {
  position: relative;
  background-image: url("../assets/images/bg-pattern-quotation.svg");
  background-repeat: no-repeat;
  background-position: top right 2rem;
}
```

### 4. Local Font Implementation

**Discovery:** [Google Web Fonts Helper](https://gwfh.mranftl.com/fonts) for GDPR-compliant font management.

**Benefits:**

- No external API calls
- Improved performance
- Privacy compliance
- Offline functionality

## Challenges Overcome

### Technical Challenges

1. **CSS Grid Positioning** - Required rethinking layout approaches from Flexbox patterns
2. **Vanilla CSS Syntax** - Relearning property names and values after Tailwind abstraction
3. **Background SVG Positioning** - Understanding layered positioning contexts

### Mental/Process Challenges

1. **Framework Withdrawal** - Missing Tailwind's utility classes and React's component structure
2. **Setup Complexity** - Manually configuring what frameworks handle automatically
3. **Debugging Workflow** - Adjusting to browser dev tools instead of framework debugging

## Skills Applied from Other Learning

- **ESLint Configuration** - Applied advanced tooling setup from recent JavaScript projects
- **Mobile-First Design** - Methodology reinforced from previous responsive design work
- **Git Workflow** - Professional branching and commit practices from team development

## Areas for Continued Development

1. **CSS Grid Fluency** - Want to reach intuitive comfort level, considering prioritizing Grid over Flexbox short-term
2. **Semantic HTML** - Developing unconscious competence with proper markup patterns
3. **CSS Custom Properties** - Exploring more advanced usage patterns for maintainable stylesheets

## Tools & Resources Used

### Development Tools

- **VS Code** with curated extension set
- **ESLint + Stylistic** for code quality
- **Live Server** for development testing
- **Git + Husky** for workflow automation

### Learning Resources

- **Claude.ai** - Grid layout problem-solving and concept clarification
- **Google Web Fonts Helper** - Local font implementation
- **Frontend Mentor Community** - Design reference and feedback

## Reflections

### What Went Well

- **Project Organization** - Clean, professional file structure
- **Problem-Solving Process** - Systematic approach to layout challenges
- **Tool Integration** - Successfully adapted advanced tooling to basic project
- **Learning Mindset** - Embraced the discomfort of returning to fundamentals

### What Was Difficult

- **Syntax Recall** - Remembering CSS property specifics after framework abstraction
- **Layout Debugging** - Slower feedback loop compared to utility-class debugging
- **Setup Overhead** - Manual configuration of what frameworks automate

### Key Takeaways

1. **Fundamentals Matter** - Framework knowledge doesn't replace core understanding
2. **Tooling Sophistication** - Professional practices apply regardless of project complexity
3. **Learning Spiral** - Returning to basics with advanced experience provides deeper insights
4. **Documentation Value** - Recording thought processes aids future problem-solving

## Next Steps

1. **Immediate:** Apply Grid-first approach to next Frontend Mentor challenge
2. **Short-term:** Build collection of reusable CSS patterns and components
3. **Long-term:** Port successful patterns to Vue/Nuxt portfolio implementations

## Connection to Portfolio Goals

These vanilla implementations serve as the foundation for Vue component translations in my Nuxt portfolio, ensuring I understand the underlying technologies rather than just framework abstractions.

---

_This entry represents a return to fundamentals with the goal of achieving native-level fluency in core web technologies._
