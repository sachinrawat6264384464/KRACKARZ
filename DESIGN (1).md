# Krackerz | Sales course for designers

## Overview

**Product:** Krackerz | Sales course for designers
**URL:** https://krackerz.com/
**Surface type:** marketing
**Audience:** Business decision-makers and potential customers
**Brand character:** Conversion-focused marketing presence with a rich, diverse color palette and 5 typefaces.

### Design Principles

- Consistency over novelty — reuse existing patterns before inventing new ones.
- Token-driven — every visual decision references a token, not a magic number.
- Accessible by default — compliance is a baseline, not a feature.

## Colors

| Token | Value | Role |
|-------|-------|------|
| color-5 | `#FFFFFF` | Background |
| color-1 | `#161616` | Text Primary |
| color-2 | `#0000EE` | Text Primary |
| color-3 | `#C8FF2E` | Text Light |
| color-4 | `#F7F6F0` | Text Light |

## Typography

**Font stack:** Highway Motel Sans Regular, Geist, sans-serif, Times New Roman, Inter

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 12px | Captions, metadata |
| text-sm | 14px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 20px | Subheadings, emphasis |
| text-xl | 56px | Section headings |
| text-2xl | 72px | Section headings |
| text-3xl | 80px | Section headings |

**Weight scale:** 400 · 500 · 700
**Line heights:** 20px · 80px · 72px · 56px · 19.2px · 16.8px

## Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 12px` · `space-6: 16px` · `space-7: 20px` · `space-8: 21px` · `space-9: 24px` · `space-10: 28px` · `space-11: 32px` · `space-12: 40px` · `space-13: 64px` · `space-14: 80px` · `space-15: 100px` · `space-16: 110px` · `space-17: 160px`

## Shapes

**Border radius:** `radius-sm: 8px` · `radius-md: 12px` · `radius-lg: 16px` · `radius-xl: 24px` · `radius-full: 62px`

## Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0.07) 0px 0.301094px 0.421531px -0.583333px, rgba(0, 0, 0, 0.08) 0px 1.14427px 1.60197px -1.16667px, rgba(0, 0, 0, 0.13) 0px 5px 7px -1.75px`
- **shadow-md:** `rgba(0, 0, 0, 0.08) 0px 0.482901px 1.25554px -1px, rgba(0, 0, 0, 0.12) 0px 4px 10.4px -2px`

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`

## Components

- **Links:** 20 detected
- **Navigation:** 1 elements
- **Images:** 105 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (8px, 12px, 16px, 24px, 62px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Links:** 20 detected
- **Navigation:** 1 elements
- **Images:** 105 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
