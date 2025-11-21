# Rudra Enterprises - Design Guidelines

## Design Approach
**Selected Approach**: Professional Corporate Design with Modern Web Standards
- Inspiration: LinkedIn (professional trust), Stripe (clean minimalism), corporate consulting firms
- Focus: Credibility, clarity, and conversion
- Principle: Premium simplicity - sophisticated without being flashy

## Typography System

**Font Family**: 
- Primary: 'Inter' or 'Poppins' for headings (Google Fonts)
- Body: 'Inter' for all text content

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Service Cards: text-xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text: text-sm, font-normal

**Line Heights**: Use generous leading (leading-relaxed for body, leading-tight for headlines)

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Common padding: p-4, p-8, p-12, p-16
- Section spacing: py-16 md:py-24 lg:py-32
- Component gaps: gap-6, gap-8, gap-12

**Container Widths**:
- Full sections: w-full with inner max-w-7xl mx-auto px-6
- Content areas: max-w-6xl
- Text content: max-w-3xl

**Grid Systems**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Case Studies: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Contact: grid-cols-1 lg:grid-cols-2 (form + info split)

## Component Library

### Navigation
- Fixed/sticky top navigation with backdrop blur (backdrop-blur-md)
- Logo left, navigation links right (hidden on mobile, hamburger menu)
- Smooth scroll navigation to sections
- Height: h-16 md:h-20
- Shadow on scroll: shadow-sm

### Hero Section
- Full viewport height: min-h-screen with flex items-center
- Large hero background image with subtle overlay for text readability
- Centered content with company name, tagline, and primary CTA
- Two-column optional: Left content, right supporting visual/stats
- CTA button with blurred background (backdrop-blur-md bg-white/20)

### About Section
- Two-column layout: Text content left (60%), image right (40%)
- Stats/highlights in small cards: "Registered 2022", "10+ Years Experience"
- Include the office image from existing site
- Generous padding between text blocks

### Services Section
- Section header: centered, "Services We Provide"
- 3-column grid on desktop, stack on mobile
- Service cards with: Icon placeholder at top, title, description, "Learn More" link
- Cards with subtle borders (border border-gray-200) and padding p-6
- Hover effect: slight shadow and border color change

### Case Studies Section
- Section header: "Our Recent Works"
- 3-column grid showcasing project images
- Each card: Full-width image, overlay with title and category on hover
- Image aspect ratio: aspect-video
- Overlay: gradient from transparent to dark at bottom

### Contact Section
- Two-column: Left (contact form), Right (contact information)
- Form fields: Name, Email, Subject, Message (textarea)
- Input styling: border border-gray-300, rounded-lg, p-4, focus states
- Contact info: Address (with map icon), Phone, Email with icons
- Submit button: full-width on mobile, auto on desktop

### Footer
- Simple centered layout with copyright, social links (if applicable)
- Company address, phone, email repeated
- Links to privacy policy, terms (placeholders)
- Background: slightly darker than body

## Images

**Image Strategy**:
1. **Hero Section**: Large, professional office/business image (team meeting, modern office space, or professional handshake)
   - Full-width background image with overlay
   - High-quality, inspiring business imagery

2. **About Section**: Office building or team photo
   - Image from existing site: professional office setting
   - Positioned right side of two-column layout

3. **Services Section**: No images, use icon placeholders with comments
   - Icons for each service (briefcase, audit, phone, database, electric, chat)

4. **Case Studies**: Three project showcase images
   - Professional business scenarios (team collaboration, security, marketing campaigns)
   - Aspect ratio: 16:9
   - High contrast for overlay text readability

**Image Treatment**: 
- Subtle overlays on hero/case studies for text contrast
- Rounded corners on about section image: rounded-lg
- Object-fit: cover for all images

## Design Specifications

**Buttons on Images**: 
- Background: backdrop-blur-md with bg-white/20 or bg-black/30
- Border: border border-white/40
- Text: Always white for dark overlays, dark for light overlays
- Padding: px-8 py-3
- No custom hover states beyond standard button component

**Card Design**:
- Background: white (bg-white)
- Border: border border-gray-200
- Rounded: rounded-lg
- Shadow on hover: hover:shadow-lg transition-shadow
- Padding: p-6 md:p-8

**Form Design**:
- Input borders: border border-gray-300
- Focus state: focus:border-blue-500 focus:ring-2 focus:ring-blue-200
- Rounded inputs: rounded-lg
- Consistent padding: p-4
- Labels: text-sm font-medium mb-2

**Accessibility**:
- All form inputs with proper labels
- Focus states clearly visible
- Sufficient color contrast (AA minimum)
- Keyboard navigation support

## Vertical Rhythm
- Hero: Full viewport with centered content
- Sections: py-16 md:py-24 (About, Services, Case Studies, Contact)
- Section headers: mb-12 md:mb-16
- Subsections: mb-8 md:mb-12
- No forced viewport heights except hero

## Key Design Principles
1. **Professional Trust**: Clean, corporate aesthetic without being boring
2. **Clear Hierarchy**: Guide eye from headlines to content to CTAs
3. **Generous Spacing**: Don't crowd - use whitespace for premium feel
4. **Strategic CTAs**: Primary button in hero, secondary in About, form in Contact
5. **Mobile-First**: Stack columns gracefully, ensure touch targets are 44px minimum