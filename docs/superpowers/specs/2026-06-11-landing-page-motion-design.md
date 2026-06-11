# Landing Page Motion Design

## Goal

Add restrained product-style animation to the landing page without changing the current portfolio content, layout, or visual direction.

## Scope

- Keep the existing React + Vite page structure in `client/src/pages/Home.tsx`.
- Use CSS-first animation in `client/src/index.css`.
- Reuse the existing `useScrollReveal` hook for viewport-based reveal behavior.
- Preserve the current dark product portfolio design, navigation, sections, cards, and copy.
- Do not introduce a new runtime animation library.

## Motion Direction

The motion should feel quiet, useful, and product-focused:

- Hero content enters in a short staggered sequence.
- Background grid lines drift slowly enough to read as ambient depth.
- Hero showcase floats subtly and should not distract from the headline or CTAs.
- Section headers, cards, feature rows, project cards, tech groups, and contact content reveal on scroll.
- Repeated items use slight stagger timing so the page feels composed instead of all elements moving at once.
- Hover states use small translations, border changes, shine, icon movement, or dot scale, avoiding large or flashy effects.
- Skill bars fill only when their section becomes visible.

## Accessibility

- Keep `prefers-reduced-motion: reduce` support.
- Reduced motion must disable continuous animation, long transitions, and reveal transforms.
- Content must remain visible even if `IntersectionObserver` is unavailable.

## Responsive Behavior

- Desktop and mobile layouts must keep the same content order and responsive breakpoints.
- Animation must not create horizontal overflow.
- Buttons, labels, headings, and card text must not overlap while entering or hovering.

## Verification

- Run the unit tests, including the motion coverage test.
- Run the TypeScript check.
- Start the Vite dev server and inspect the page in a browser at desktop and mobile widths.
- Confirm scroll reveal, hover states, skill fill, and reduced-motion CSS are present.
