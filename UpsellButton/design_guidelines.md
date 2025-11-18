# Design Guidelines: Página de Upsell - Produtos Bíblicos Infantis

## Design Approach
**Reference-Based**: Drawing inspiration from e-commerce upsell pages (Shopify, Gumroad) combined with child-friendly educational platforms. Focus on urgency, trust-building, and visual appeal for parents/educators purchasing Christian children's materials.

## Core Design Principles
- **Warm & Inviting**: Create a nurturing, child-friendly atmosphere that reassures parents
- **Clear Urgency**: Communicate limited-time opportunity without aggressive tactics
- **Trust-Building**: Heavy use of social proof and guarantees
- **Action-Oriented**: Multiple, clear CTAs guiding toward purchase completion

## Typography
**Primary Font**: Poppins (Google Fonts)
- Hero/Headers: 700 weight, 32-40px
- Section Titles: 600 weight, 24-28px
- Body: 400 weight, 16-18px
- Buttons: 600 weight, 18px

**Secondary Font**: Nunito for softer elements
- Testimonials and supporting text: 400 weight

## Color Palette (Infantil & Aconchegante)
- **Primary Yellow**: Warm, cheerful accent (#FFB800)
- **Sky Blue**: Trust and calm (#4FC3F7)
- **Fresh Green**: Growth and positivity (#66BB6A) - for accept buttons
- **Soft Orange**: Energy and warmth (#FF9E40)
- **Neutrals**: White backgrounds, light gray (#F5F5F5) for cards
- **Text**: Dark gray (#333333) for readability

## Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm
- Section padding: py-12 (mobile), py-16 (desktop)
- Card spacing: gap-6 on grids
- Button padding: px-8 py-4

**Container**: max-w-4xl centered for optimal reading

## Page Structure & Sections

### 1. Top Urgency Banner
- Full-width, bright yellow/orange gradient background
- Bold text: "Essa é uma oferta única e não volta mais depois dessa página"
- Icon: ⚠️ or alert icon
- Sticky/fixed to top on scroll

### 2. Header com Urgência
- Centered layout with breathing room
- Large title (⚠ Oferta Exclusiva – Apenas Agora!)
- Subtitle explaining the opportunity
- **Progress Bar**: 75% filled, vibrant green/blue gradient, rounded ends, height: 8px
- Label below: "Seu pedido está quase completo…"

### 3. Main Upsell Section (Hero Product)
- **Image**: Product mockup/preview (Super Kit de Atividades Bíblicas) - prominent, professional
- Title: Large, bold, dark text
- Description paragraph: Engaging, benefit-focused
- **Bullet Points**: 4 benefits with checkmark icons (✓)
  - Green checkmarks, spaced generously
  - Clear, scannable format
- **Pricing Display**: 
  - Strikethrough original price (R$ 39,90) in gray
  - Large promotional price (R$ 19,00) in green
  - "apenas aqui" emphasis
- **Primary CTA**: Large button with Cakto integration
  - Green background, white text
  - Rounded corners (border-radius: 12px)
  - Shopping cart icon
  - Generous padding
- Security badges below: Guarantee + Immediate download icons

### 4. Cross-Sell Grid
- Section title: "Aproveite também essas ofertas especiais"
- **3-column grid** (desktop), stacks to 1 column (mobile)
- Each card:
  - Product image at top
  - Product name + price
  - Brief description (2-3 lines)
  - Small "Adicionar ao pedido" button (outline style, secondary)
  - Subtle hover lift effect

### 5. Social Proof Section
- Warm background color (light yellow/cream)
- Title: "Quem já comprou está amando ❤️"
- 2-3 testimonial cards in grid
- Each testimonial:
  - 5-star rating (⭐ visual)
  - Quote in italics
  - Name/role if available
  - Rounded card with shadow

### 6. Final CTA Section
- Centered, attention-grabbing
- Title: "Última chance antes de finalizar o seu pedido"
- **Large Accept Button**: Cakto integrated, same green style as main CTA
- **Reject Link**: Small, gray, underlined text below ("Não, obrigado...")
- Subtle, not competing with accept button

## Component Details

### Buttons (Cakto Integration)
**Accept Button (cakto-upsell-accept)**:
- Background: #0f7865 (teal green from HTML)
- Text: White
- Large size: full width on mobile, auto on desktop
- Rounded: 12px
- Shadow on hover
- Text: "SIM! Quero adicionar ao meu pedido agora"

**Reject Button (cakto-upsell-reject)**:
- Text link style, small font
- Gray color
- No background
- Underline on hover

### Cards
- White background
- Subtle shadow: 0 2px 8px rgba(0,0,0,0.1)
- Rounded corners: 16px
- Padding: p-6

### Icons
- Use Heroicons for UI elements (checkmarks, cart, stars)
- Simple, line-style icons
- Christian/biblical themed illustrations where appropriate

## Images
- **Main Product Image**: Professional mockup of Super Kit (PDF preview, activity pages fanned out)
- **Cross-sell Products**: Cover images for UNO Bíblico and Devocionais book
- **Decorative**: Subtle biblical illustrations (dove, cross, stars) as accents
- All images: Rounded corners, professional quality

## Accessibility
- High contrast ratios for text
- Descriptive alt text for all images
- Clear focus states on interactive elements
- Semantic HTML structure

## Animations
- Minimal, purposeful only
- Subtle fade-in for sections on scroll
- Gentle hover lift for cards (2-4px)
- No distracting effects

## Responsive Behavior
- Mobile-first approach
- Grids collapse to single column below 768px
- Buttons full-width on mobile
- Maintain generous padding/spacing on all devices