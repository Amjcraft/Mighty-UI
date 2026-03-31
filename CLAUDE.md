# Mighty UI — Claude Instructions

Mighty UI is a React component library built on Radix UI primitives and Tailwind CSS v4.

## Critical Rules

### Always import from mighty-ui
Never recreate components that already exist. Import from `mighty-ui`.

```tsx
// ✅
import { Button, Card, CardHeader, CardTitle, CardContent } from 'mighty-ui'

// ❌ Never recreate existing components
const MyButton = ({ children }) => <button className="...">{children}</button>
```

### Never use hardcoded design values
Use CSS token classes only. No raw hex, oklch, arbitrary Tailwind values for colors, or magic pixel numbers.

```tsx
// ✅
className="bg-primary text-primary-foreground border-border rounded-md"

// ❌
className="bg-[#1a1a1a] text-white border-gray-200"
style={{ color: '#fff', borderRadius: '6px' }}
```

### Use cn() for className merging
Always use the `cn()` utility (re-exported from `mighty-ui`) when merging classes.

```tsx
import { cn } from 'mighty-ui'
className={cn("base-classes", conditionalClass && "conditional", className)}
```

### Use CVA for new components with variants
When adding new components that need variants, use `class-variance-authority`.

```tsx
import { cva, type VariantProps } from 'class-variance-authority'
const myVariants = cva("base", { variants: { size: { sm: "h-8", lg: "h-12" } } })
```

## Token Reference

See `docs/foundations.md` for the full token map. Key semantic tokens:

| Purpose | Token class |
|---------|------------|
| Page background | `bg-background` |
| Page text | `text-foreground` |
| Primary action | `bg-primary text-primary-foreground` |
| Secondary/subtle | `bg-secondary text-secondary-foreground` |
| Muted text | `text-muted-foreground` |
| Muted fill | `bg-muted` |
| Accent/hover | `bg-accent text-accent-foreground` |
| Danger | `bg-destructive text-white` |
| Borders | `border-border` |
| Input borders | `border-input` |
| Focus rings | `ring-ring` |

## Component Patterns

### Polymorphism (asChild)
Components that accept `asChild` render as their child element using `@radix-ui/react-slot`.

```tsx
// Render Button as a Link
<Button asChild><a href="/page">Go to page</a></Button>
```

### data-slot attributes
All components stamp `data-slot="component-name"` on their root element. Use these for CSS targeting, not class selectors.

### Form fields (Field pattern)
Always compose `Field` + `FieldLabel` + input + `FieldError` for accessible forms:

```tsx
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldError errors={errors.email} />
</Field>
```

See `docs/patterns.md` for full composition examples.

## Key Files

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | All CSS custom property tokens |
| `src/index.ts` | All public exports |
| `docs/foundations.md` | Design token reference |
| `docs/components.md` | Component API reference |
| `docs/patterns.md` | Composition patterns and examples |
| `llms.txt` | Machine-readable library overview |
