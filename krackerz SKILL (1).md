---
name: design-system-krackerz-sales-course-for-designers
description: >
  Apply the Krackerz | Sales course for designers design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# Krackerz | Sales course for designers — Design System Skill

## When to Use

- Building new UI components for Krackerz | Sales course for designers.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Krackerz | Sales course for designers — https://krackerz.com/
- **Surface:** marketing
- **Audience:** Business decision-makers and potential customers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and 4 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-1 | `#161616` | Text Primary |
| color-3 | `#0000EE` | Text Primary |
| color-5 | `#646464` | Text Primary |
| color-6 | `#CF2B09` | Accent |
| color-7 | `#F8330B` | Accent |
| color-2 | `#7C1A06` | Background Dark |
| color-4 | `#A52207` | Background Dark |
| color-8 | `#C8FF2E` | Text Light |
| color-9 | `#F7F6F0` | Text Light |
| color-10 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Highway Motel Sans Regular, Geist, sans-serif, Times New Roman

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 12px | Captions, metadata |
| text-sm | 14px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 18px | Subheadings, emphasis |
| text-xl | 20px | Section headings |
| text-2xl | 24px | Section headings |
| text-3xl | 48px | Section headings |
| text-4xl | 56px | Section headings |
| text-9 | 72px | General use |

**Weight scale:** 400 · 500 · 700
**Line heights:** 20px · 72px · 18px · 56px · 48px · 24px · 57.6px · 19.2px · 16.8px

### Spacing

**Base unit:** 4px

`space-1: 1px` · `space-2: 4px` · `space-3: 6px` · `space-4: 8px` · `space-5: 10px` · `space-6: 12px` · `space-7: 14px` · `space-8: 16px` · `space-9: 20px` · `space-10: 21px` · `space-11: 24px` · `space-12: 28px` · `space-13: 40px` · `space-14: 48px` · `space-15: 160px`

### Shapes

**Border radius:** `radius-sm: 4px` · `radius-md: 8px` · `radius-lg: 12px` · `radius-xl: 16px` · `radius-full: 40px` · `radius-6: 62px`

### Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0.07) 0px 0.301094px 0.421531px -0.583333px, rgba(0, 0, 0, 0.08) 0px 1.14427px 1.60197px -1.16667px, rgba(0, 0, 0, 0.13) 0px 5px 7px -1.75px`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`

## Component Inventory

- **Links:** 20 detected
- **Navigation:** 1 elements
- **Images:** 106 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (4px, 8px, 12px, 16px, 40px, 62px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
