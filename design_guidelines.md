# Design Guidelines: Dr. [Name] Siddha Clinic

## Design Approach

**Reference-Based Approach** drawing inspiration from wellness and holistic healthcare leaders like Headspace, Calm, and premium healthcare provider websites. The design should evoke natural healing, trust, and ancient wisdom while maintaining modern usability.

## Typography System

**Font Families:**
- Primary: Poppins (headings, navigation, buttons)
- Secondary: Lora (body text, testimonials, articles) for warmth and readability

**Hierarchy:**
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold
- H2 (Section Headers): text-3xl md:text-4xl lg:text-5xl, font-semibold
- H3 (Subsections): text-2xl md:text-3xl, font-semibold
- H4 (Card Titles): text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- Small Text: text-sm md:text-base

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8

## Component Library

### Navigation
- Sticky header with transparent-to-solid scroll effect
- Logo left, navigation center, "Book Appointment" CTA button right
- Mobile: Hamburger menu with smooth slide-in drawer
- Quick access icons: Phone, WhatsApp in header

### Hero Section (Home)
- Full-width layout with large background image (doctor in clinic with natural elements)
- Asymmetric layout: Image takes 55% width on desktop, content 45%
- Doctor's photo in circular frame with subtle shadow
- Healing quote in italic, larger text below title
- Prominent "Book Appointment" CTA with blur backdrop when over image
- Trust indicators: Years of experience, patient count, certifications (icon + number format)

### Treatment Cards
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Herbal/leaf icon at top, treatment name, 2-3 line description, "Learn More" link
- Soft shadow on hover with gentle lift (translate-y-2)
- Icon size: 48px with circular background

### Testimonials Carousel
- Full-width section with subtle pattern overlay
- Card design: Patient photo (circular, 64px), name, condition treated, testimonial text
- 3 visible on desktop, 1 on mobile
- Manual navigation dots + auto-advance every 6 seconds
- Quote marks as design element

### Appointment Form
- Two-column layout on desktop (form 60%, info sidebar 40%)
- Form fields: Full name, phone, email, preferred date/time pickers, health concern (textarea)
- Sidebar: Consultation hours, clinic photo, WhatsApp quick book button
- Success message with confirmation details

### Blog/Articles Grid
- Masonry-style grid for variety (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Featured article: Full width hero card with large image
- Article cards: Image top (16:9 ratio), category tag, title, excerpt, read time, author
- Filter tabs: All, Remedies, Wellness, Seasonal Tips

### About Section
- Timeline layout for doctor's journey (vertical on mobile, horizontal on desktop)
- Certification badges in grid (grid-cols-2 md:grid-cols-4)
- Clinic photo gallery (grid-cols-2 md:grid-cols-3, lightbox on click)
- Philosophy statement in highlighted box with herbal border pattern

### Contact Section
- Split layout: Google Maps embed (50%), contact details (50%)
- Contact info with icons: Address, phone, email, hours
- Prominent WhatsApp and Call buttons (full width on mobile, side-by-side on desktop)
- Operating hours in table format

### Floating Elements
- Sticky "Book Appointment" button: bottom-right corner, appears after hero scroll
- Size: Larger on desktop (px-8 py-4), compact on mobile (px-6 py-3)
- Pulse animation to draw attention

### Footer
- Four-column grid on desktop (About, Quick Links, Services, Contact)
- Social media icons in horizontal row
- Newsletter signup: Email input + submit button
- Copyright and location at bottom

## Image Strategy

**Hero Images:**
- Home: Large hero image showing doctor in clinic with natural/herbal elements, warm lighting
- About: Doctor portrait in professional setting with traditional Siddha elements
- Treatments: Service-specific imagery (herbs, therapy sessions)

**Supporting Images:**
- Treatment icons: Custom illustrations of leaves, herbs, mortar & pestle
- Blog thumbnails: Herb closeups, wellness scenes, traditional medicine imagery
- Testimonial photos: Patient headshots (circular crops)
- Clinic photos: Interior shots showing clean, natural healing environment
- Herb showcase: High-quality herb photographs with scientific and Tamil names

## Layout Patterns

**Home Page Structure:**
1. Hero with image, doctor intro, CTA
2. Philosophy section (icon + text blocks in 3-column grid)
3. Featured treatments (6 cards in 3-column grid)
4. Testimonials carousel
5. Statistics banner (patients treated, years experience, success rate)
6. Blog preview (3 latest articles)
7. CTA section with appointment form preview

**Treatments Page:**
- Intro banner with herbal imagery
- Service cards in filterable grid
- Each card expands to reveal detailed modal with benefits, duration, pricing
- Related services suggestions at bottom

**Blog Page:**
- Featured article hero
- Category filter tabs
- Article grid with search functionality
- Sidebar: Popular posts, categories, newsletter signup

## Accessibility & Usability

- All interactive elements: min-height 44px for touch targets
- Form labels above inputs with clear hierarchy
- High contrast text-to-background ratios throughout
- Focus states: visible ring offset on all interactive elements
- Alt text for all images describing healing context
- ARIA labels for icon-only buttons (WhatsApp, phone)
- Keyboard navigation support for carousel and modals

## Animations (Minimal & Purposeful)

- Scroll-triggered fade-in for sections (once per session)
- Smooth page transitions between routes
- Card hover: Subtle lift and shadow increase
- Button hover: Slight scale (scale-105)
- Modal/drawer: Slide and fade-in entrance
- Carousel: Smooth slide transitions (duration-500)

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-4 column grids, asymmetric layouts)

This design creates a trustworthy, calming digital presence that honors traditional Siddha medicine while providing modern, accessible healthcare communication.