# Mighty UI — Design Foundations

Design tokens are CSS custom properties defined in `src/styles/globals.css`. Tailwind CSS v4 maps them to utility classes via `@theme inline`.

**Rule: Never use raw color values, pixel spacing, or hardcoded radius values. Always use token-based Tailwind classes.**

---

## Color Tokens

All colors use the `oklch` color space. Two themes are defined: `:root` (light) and `.dark`.

### Semantic Colors

| Token | Light | Dark | Tailwind Class |
|-------|-------|------|---------------|
| `--background` | oklch(1 0 0) | oklch(0.145 0 0) | `bg-background` |
| `--foreground` | oklch(0.145 0 0) | oklch(0.985 0 0) | `text-foreground` |
| `--card` | oklch(1 0 0) | oklch(0.145 0 0) | `bg-card` |
| `--card-foreground` | oklch(0.145 0 0) | oklch(0.985 0 0) | `text-card-foreground` |
| `--popover` | oklch(1 0 0) | oklch(0.145 0 0) | `bg-popover` |
| `--popover-foreground` | oklch(0.145 0 0) | oklch(0.985 0 0) | `text-popover-foreground` |
| `--primary` | oklch(0.205 0 0) | oklch(0.985 0 0) | `bg-primary` |
| `--primary-foreground` | oklch(0.985 0 0) | oklch(0.205 0 0) | `text-primary-foreground` |
| `--secondary` | oklch(0.97 0 0) | oklch(0.269 0 0) | `bg-secondary` |
| `--secondary-foreground` | oklch(0.205 0 0) | oklch(0.985 0 0) | `text-secondary-foreground` |
| `--muted` | oklch(0.97 0 0) | oklch(0.269 0 0) | `bg-muted` |
| `--muted-foreground` | oklch(0.556 0 0) | oklch(0.708 0 0) | `text-muted-foreground` |
| `--accent` | oklch(0.97 0 0) | oklch(0.269 0 0) | `bg-accent` |
| `--accent-foreground` | oklch(0.205 0 0) | oklch(0.985 0 0) | `text-accent-foreground` |
| `--destructive` | oklch(0.577 0.245 27.325) | oklch(0.396 0.141 25.723) | `bg-destructive` |
| `--border` | oklch(0.922 0 0) | oklch(0.269 0 0) | `border-border` |
| `--input` | oklch(0.922 0 0) | oklch(0.269 0 0) | `border-input` |
| `--ring` | oklch(0.708 0 0) | oklch(0.556 0 0) | `ring-ring` |

### Chart Colors

Used for data visualizations only. Import `mighty-ui/chart.css` separately.

| Token | Tailwind Class |
|-------|---------------|
| `--chart-1` | `bg-chart-1` / `text-chart-1` |
| `--chart-2` | `bg-chart-2` / `text-chart-2` |
| `--chart-3` | `bg-chart-3` / `text-chart-3` |
| `--chart-4` | `bg-chart-4` / `text-chart-4` |
| `--chart-5` | `bg-chart-5` / `text-chart-5` |

### Sidebar Colors

Dedicated tokens for sidebar components. Only use these within `Sidebar*` components.

| Token | Tailwind Class |
|-------|---------------|
| `--sidebar` | `bg-sidebar` |
| `--sidebar-foreground` | `text-sidebar-foreground` |
| `--sidebar-primary` | `bg-sidebar-primary` |
| `--sidebar-primary-foreground` | `text-sidebar-primary-foreground` |
| `--sidebar-accent` | `bg-sidebar-accent` |
| `--sidebar-accent-foreground` | `text-sidebar-accent-foreground` |
| `--sidebar-border` | `border-sidebar-border` |
| `--sidebar-ring` | `ring-sidebar-ring` |

---

## Border Radius

Base radius: `--radius: 0.625rem` (10px)

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| `--radius-sm` | `calc(var(--radius) - 4px)` = 0.375rem | `rounded-sm` |
| `--radius-md` | `calc(var(--radius) - 2px)` = 0.5rem | `rounded-md` |
| `--radius-lg` | `var(--radius)` = 0.625rem | `rounded-lg` |
| `--radius-xl` | `calc(var(--radius) + 4px)` = 0.875rem | `rounded-xl` |

Common usage:
- Buttons, inputs, badges: `rounded-md`
- Cards: `rounded-xl`
- Full circle (avatars, icon chips): `rounded-full`

---

## Typography

No custom font tokens. Uses system font stack via Tailwind defaults.

### Scale (from Typography component variants)

| Variant | Classes |
|---------|---------|
| `h1` | `text-4xl font-extrabold tracking-tight text-balance` |
| `h2` | `text-3xl font-semibold tracking-tight border-b pb-2` |
| `h3` | `text-2xl font-semibold tracking-tight` |
| `h4` | `text-xl font-semibold tracking-tight` |
| `lead` | `text-xl text-muted-foreground` |
| `small` | `text-sm leading-6` |
| `muted` | `text-sm text-muted-foreground` |
| `link` | `text-primary underline-offset-4 hover:underline` |

---

## Spacing

Uses Tailwind's default 4px base grid. No custom spacing tokens. Prefer Tailwind spacing utilities (`gap-2`, `p-4`, `px-6`, etc.) over arbitrary values.

Common patterns observed in library:
- Card padding: `py-6 px-6` (24px)
- Button height: `h-9` (36px) default, `h-8` sm, `h-10` lg
- Input height: `h-9` (36px)
- Icon size: `size-4` (16px) in buttons, `size-9` (36px) icon button

---

## Dark Mode

Dark mode is class-based. Add `.dark` to a parent element (typically `<html>`). All tokens automatically adapt. Use `next-themes` for runtime toggling.

```tsx
// Usage with next-themes
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class">
  {children}
</ThemeProvider>
```

---

## Focus & Validation States

Standardized across all interactive components:

- **Focus visible**: `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- **Invalid**: `aria-invalid:ring-destructive/20 aria-invalid:border-destructive`
- **Disabled**: `disabled:pointer-events-none disabled:opacity-50`

Mark form fields invalid with `aria-invalid="true"` on the input element.

---

## Tailwind v4 Integration

Tokens are exposed to Tailwind via the `@theme inline` block in `globals.css`. This means:
- All `--color-*` variables become Tailwind color utilities
- All `--radius-*` variables become Tailwind border-radius utilities
- No `tailwind.config.js` needed — configuration lives in CSS

**Source scanning** is configured in `globals.css`:
```css
@source "../../../apps/**/*.{ts,tsx}";
@source "../../../components/**/*.{ts,tsx}";
@source "../**/*.{ts,tsx}";
```

Consuming apps in a monorepo must ensure their paths are covered by these globs, or add additional `@source` directives.
