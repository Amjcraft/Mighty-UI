# Mighty UI — Component API Reference

All components import from `mighty-ui`. All accept `className` for override. All use token-based Tailwind classes internally — never override with raw values.

---

## Button

```tsx
import { Button } from 'mighty-ui'
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Visual style |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Size preset |
| `asChild` | `boolean` | `false` | Render as child element via Radix Slot |

Sizes: `default` = h-9, `sm` = h-8, `lg` = h-10, `icon` = size-9 (square)

```tsx
<Button>Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button size="icon"><Trash2 /></Button>
<Button asChild><a href="/page">Link</a></Button>
```

Also exports `buttonVariants` (CVA instance) for use in custom components.

---

## Badge

```tsx
import { Badge } from 'mighty-ui'
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'default'` |
| `asChild` | `boolean` | `false` |

```tsx
<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

Also exports `badgeVariants`.

---

## Input

```tsx
import { Input } from 'mighty-ui'
```

Accepts all HTML `<input>` props. Height h-9. Full width by default.

```tsx
<Input type="email" placeholder="Email address" />
<Input type="password" aria-invalid="true" />
<Input disabled value="Read only" />
```

---

## Textarea

```tsx
import { Textarea } from 'mighty-ui'
```

Accepts all HTML `<textarea>` props.

```tsx
<Textarea placeholder="Enter description..." rows={4} />
```

---

## Label

```tsx
import { Label } from 'mighty-ui'
```

Wraps Radix Label. Accepts all HTML `<label>` props.

```tsx
<Label htmlFor="email">Email address</Label>
```

---

## Checkbox

```tsx
import { Checkbox } from 'mighty-ui'
```

Radix Checkbox. Use with `Field` for accessible forms.

```tsx
<Checkbox id="terms" />
<Checkbox id="notify" defaultChecked />
<Checkbox id="disabled" disabled />
```

---

## Switch

```tsx
import { Switch } from 'mighty-ui'
```

Radix Switch. Controlled or uncontrolled.

```tsx
<Switch />
<Switch defaultChecked />
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

---

## Toggle / ToggleGroup

```tsx
import { Toggle, ToggleGroup, ToggleGroupItem } from 'mighty-ui'
```

Toggle variants: `'default' | 'outline'`
Toggle sizes: `'default' | 'sm' | 'lg'`

```tsx
<Toggle variant="outline"><Bold /></Toggle>

<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>
```

---

## Separator

```tsx
import { Separator } from 'mighty-ui'
```

| Prop | Type | Default |
|------|------|---------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |

```tsx
<Separator />
<Separator orientation="vertical" className="h-4" />
```

---

## Skeleton

```tsx
import { Skeleton } from 'mighty-ui'
```

Loading placeholder. Accepts `className` for sizing.

```tsx
<Skeleton className="h-4 w-48" />
<Skeleton className="size-10 rounded-full" />
```

---

## Spinner

```tsx
import { Spinner } from 'mighty-ui'
```

Animated loading spinner.

```tsx
<Spinner />
<Spinner className="size-6" />
```

---

## Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from 'mighty-ui'
```

```tsx
<Avatar>
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

## Typography

```tsx
import { Typography } from 'mighty-ui'
```

| Prop | Type | Default | Renders |
|------|------|---------|---------|
| `variant` | `'default' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'lead' \| 'small' \| 'muted' \| 'link'` | `'default'` | h1–h4 render semantic tags; others render `<p>` |

```tsx
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="lead">Introductory paragraph.</Typography>
<Typography variant="muted">Helper text or caption.</Typography>
```

---

## Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from 'mighty-ui'
```

Card uses container queries (`@container`). CardHeader adapts layout when `CardAction` is present (auto grid columns).

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Optional description text.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon"><MoreVertical /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    Main content area.
  </CardContent>
  <CardFooter>
    <Button>Confirm</Button>
  </CardFooter>
</Card>
```

---

## Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from 'mighty-ui'
```

```tsx
<Alert>
  <Info className="size-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>
```

---

## Field (Form)

The Field system provides accessible, composable form fields.

```tsx
import {
  Field, FieldLabel, FieldDescription, FieldError,
  FieldGroup, FieldSet, FieldLegend, FieldContent,
  FieldTitle, FieldSeparator
} from 'mighty-ui'
```

### Field

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'vertical' \| 'horizontal' \| 'responsive'` | `'vertical'` | Layout direction |

`responsive` = vertical on mobile, horizontal at `@md` breakpoint.

```tsx
// Vertical (default)
<Field>
  <FieldLabel>Name</FieldLabel>
  <Input placeholder="Full name" />
  <FieldDescription>As it appears on your ID.</FieldDescription>
  <FieldError errors={errors.name} />
</Field>

// Horizontal
<Field orientation="horizontal">
  <FieldLabel>Notifications</FieldLabel>
  <Switch />
</Field>
```

### FieldError

| Prop | Type | Description |
|------|------|-------------|
| `errors` | `Array<{ message?: string } \| undefined>` | Array of error objects (e.g. from Zod/react-hook-form). Renders nothing if empty. Deduplicates by message. |

```tsx
// With react-hook-form
<FieldError errors={[formState.errors.email]} />

// With multiple errors
<FieldError errors={formState.errors.password?.types} />
```

### FieldGroup

Groups multiple fields. Provides responsive layout context for `Field orientation="responsive"`.

```tsx
<FieldGroup>
  <Field><FieldLabel>First name</FieldLabel><Input /></Field>
  <Field><FieldLabel>Last name</FieldLabel><Input /></Field>
</FieldGroup>
```

### FieldSet / FieldLegend

For grouping related fields with a heading.

```tsx
<FieldSet>
  <FieldLegend>Contact Information</FieldLegend>
  <Field>...</Field>
  <Field>...</Field>
</FieldSet>
```

---

## Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from 'mighty-ui'
```

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm action</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## AlertDialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from 'mighty-ui'
```

For destructive confirmations. `AlertDialogAction` and `AlertDialogCancel` are semantic variants of Button.

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

## Sheet

Slide-in panel from any edge.

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from 'mighty-ui'
```

| Prop on SheetContent | Type | Default |
|---------------------|------|---------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |

```tsx
<Sheet>
  <SheetTrigger asChild><Button>Open</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
    </SheetHeader>
    {/* content */}
  </SheetContent>
</Sheet>
```

---

## Drawer

Mobile-optimized bottom sheet (vaul).

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from 'mighty-ui'
```

Same composition pattern as Dialog/Sheet.

---

## Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from 'mighty-ui'
```

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## Combobox

Searchable select. Built on `Command` internally.

```tsx
import { Combobox } from 'mighty-ui'
```

| Prop | Type | Description |
|------|------|-------------|
| `options` | `Array<{ label: string; value: string }>` | Options list |
| `value` | `string` | Controlled value |
| `onValueChange` | `(value: string) => void` | Change handler |
| `placeholder` | `string` | Trigger placeholder |
| `searchPlaceholder` | `string` | Search input placeholder |
| `emptyText` | `string` | Text when no results |

---

## DropdownMenu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuShortcut, DropdownMenuGroup } from 'mighty-ui'
```

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Options</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from 'mighty-ui'
```

Wrap your app (or the relevant subtree) in `TooltipProvider`.

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button size="icon"><Info /></Button></TooltipTrigger>
    <TooltipContent>More information</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from 'mighty-ui'
```

```tsx
<Popover>
  <PopoverTrigger asChild><Button>Open popover</Button></PopoverTrigger>
  <PopoverContent className="w-80">
    <p>Popover content here.</p>
  </PopoverContent>
</Popover>
```

---

## Command

Full-featured command palette.

```tsx
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from 'mighty-ui'
```

```tsx
// Inline
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>New file <CommandShortcut>⌘N</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// Dialog (Cmd+K palette)
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>...</CommandList>
</CommandDialog>
```

---

## Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'mighty-ui'
```

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings.</TabsContent>
  <TabsContent value="password">Password settings.</TabsContent>
</Tabs>
```

---

## Table

```tsx
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from 'mighty-ui'
```

```tsx
<Table>
  <TableCaption>List of users</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Jane Doe</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from 'mighty-ui'
```

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Pagination

```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from 'mighty-ui'
```

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

---

## Empty State

```tsx
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from 'mighty-ui'
```

EmptyMedia variants: `'default'` (raw content) | `'icon'` (styled icon container)

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><FolderOpen /></EmptyMedia>
    <EmptyTitle>No files found</EmptyTitle>
    <EmptyDescription>Upload a file to get started.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Upload file</Button>
  </EmptyContent>
</Empty>
```

---

## Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'mighty-ui'
```

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle <ChevronDown /></Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden content.</CollapsibleContent>
</Collapsible>
```

---

## Scroll Area

```tsx
import { ScrollArea, ScrollBar } from 'mighty-ui'
```

```tsx
<ScrollArea className="h-72 w-48">
  {longContent}
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

---

## Resizable

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'mighty-ui'
```

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Right</ResizablePanel>
</ResizablePanelGroup>
```

---

## InputGroup / ButtonGroup

```tsx
import { InputGroup, InputGroupItem } from 'mighty-ui'
import { ButtonGroup } from 'mighty-ui'
```

```tsx
// Input with prefix/suffix
<InputGroup>
  <InputGroupItem>https://</InputGroupItem>
  <Input placeholder="domain.com" />
  <InputGroupItem>.com</InputGroupItem>
</InputGroup>

// Grouped buttons
<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>
```

---

## Sidebar

Full sidebar layout system. See `docs/patterns.md` for layout composition.

```tsx
import {
  SidebarProvider, Sidebar, SidebarTrigger, SidebarInset, SidebarRail,
  SidebarHeader, SidebarContent, SidebarFooter, SidebarSeparator,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarGroupAction,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction,
  SidebarMenuBadge, SidebarMenuSkeleton,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton
} from 'mighty-ui'
```

---

## Sonner (Toast)

```tsx
import { Sonner } from 'mighty-ui'
import { toast } from 'sonner'

// In layout
<Sonner />

// Trigger toasts anywhere
toast('Event created')
toast.success('Saved successfully')
toast.error('Something went wrong')
toast.promise(myPromise, { loading: 'Saving...', success: 'Done', error: 'Failed' })
```

---

## Hooks

### useMobile

```tsx
import { useMobile } from 'mighty-ui'
const isMobile = useMobile() // true when viewport ≤ 768px
```

### useStaticWidth

```tsx
import { useStaticWidth } from 'mighty-ui'
const { ref, width } = useStaticWidth()
// Attach ref to a DOM element; width updates on resize
```

---

## Utilities

### cn

```tsx
import { cn } from 'mighty-ui'
cn('base', condition && 'conditional', className)
// = clsx + tailwind-merge
```

### withStaticWidth

```tsx
import { withStaticWidth } from 'mighty-ui'
const StaticCard = withStaticWidth(Card)
// HOC that measures and fixes the component's width
```
