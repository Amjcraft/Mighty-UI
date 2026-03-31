# Build UI with Mighty UI

You are working with the **Mighty UI** component library. Before writing any UI code, apply these rules:

## Step 1 — Read first
Check `docs/components.md` for component APIs and `docs/patterns.md` for composition patterns. Do not invent components that already exist.

## Step 2 — Import correctly
```tsx
import { ComponentName } from 'mighty-ui'
// Styles (once, in root layout or app entry):
import 'mighty-ui/globals.css'
```

## Step 3 — Token-only styling
Never use hardcoded hex, oklch, pixel values, or arbitrary Tailwind for design tokens.

**Always use:**
- `bg-primary`, `text-foreground`, `border-border`, `bg-muted`, `text-muted-foreground`, `bg-accent`, `bg-destructive`, `bg-card`, `bg-secondary`
- `rounded-sm/md/lg/xl` (never raw radius values)
- `ring-ring`, `border-input`

## Step 4 — Key patterns
- **Forms**: `Field` + `FieldLabel` + input + `FieldError`
- **Polymorphism**: `asChild` prop + Radix Slot for rendering as another element
- **Class merging**: Always `cn()` from `mighty-ui`
- **Variants**: CVA via component variant props, never class overrides
- **Destructive confirm**: `AlertDialog` not `Dialog`
- **Icons in buttons**: `size="icon"` + `aria-label`
- **Dark mode**: class-based `.dark`, use `next-themes`

## Step 5 — Foundations reference
See `docs/foundations.md` for the full token map, radius scale, typography variants, and dark mode behavior.
