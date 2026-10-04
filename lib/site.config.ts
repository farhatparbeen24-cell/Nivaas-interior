export interface ProjectItem {
  id: string;
  title: string;
  category: 'Living' | 'Kitchen' | 'Bedroom' | 'Full Home' | 'Office';
  location: string;
  area: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  roomTag: string;
  timeline: string;
  scope: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  unit: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
  propertyType: string;
  duration: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const siteConfig = {
  brand: {
    name: 'nivaas',
    fullName: 'Nivaas Interiors',
    city: 'Bhubaneswar',
    state: 'Odisha',
    tagline: 'Your home, your story.',
    description:
      'A design-led interior studio that turns homes into stories, with a clear process, fixed timelines and zero surprise costs.',
  },
  contact: {
    phone: '+91 94370 12345',
    phoneRaw: '+919437012345',
    whatsapp: '919437012345',
    email: 'hello@nivaasinteriors.com',
    address: 'Plot 412, Infocity Road, Patia, Bhubaneswar, Odisha 751024',
    hours: 'Mon – Sat: 10:00 AM – 7:30 PM (Sun by appointment)',
    mapUrl: 'https://maps.google.com/?q=Patia+Bhubaneswar',
  },
  socials: {
    instagram: 'https://instagram.com/nivaasinteriors',
    youtube: 'https://youtube.com/@nivaasinteriors',
    pinterest: 'https://pinterest.com/nivaasinteriors',
  },
  trustStats: [
    { value: 480, suffix: '+', label: 'Homes delivered', note: 'Across Odisha' },
    { value: 12, suffix: '', label: 'Years of experience', note: 'Master craftsmen' },
    { value: 98, suffix: '%', label: 'On-time handover', note: 'Guaranteed penalty clause' },
    { value: 10, suffix: ' yrs', label: 'Woodwork warranty', note: 'Termite & moisture proof' },
  ],
  partners: [
    { name: 'Aurum Estates', label: 'AURUM ESTATES' },
    { name: 'Hexa Tiles', label: 'HEXA TILES' },
    { name: 'Kora Woods', label: 'KORA WOODS' },
    { name: 'Lumina Lights', label: 'LUMINA LIGHTS' },
    { name: 'Stonecraft', label: 'STONECRAFT' },
    { name: 'Veda Paints', label: 'VEDA PAINTS' },
  ],
  services: [
    {
      id: 'living',
      number: '01',
      title: 'Living Rooms',
      description: 'Statement TV units, fluted acoustic panels, layered ambient lighting and custom storage made for gathering.',
      highlights: ['Floating TV consoles', 'Fluted wall paneling', 'Smart architectural lighting'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'kitchen',
      number: '02',
      title: 'Modular Kitchens',
      description: 'Ergonomic work triangles, soft-close Blum & Hafele hardware, quartz worktops and anti-scratch acrylic finishes.',
      highlights: ['Calacatta quartz tops', 'Tandem pantry pullouts', 'Under-cabinet task LEDs'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'bedroom',
      number: '03',
      title: 'Bedrooms',
      description: 'Quiet palettes made for deep rest, floor-to-ceiling wardrobes with bronze-tinted glass and bespoke headboards.',
      highlights: ['Floor-to-ceiling lofts', 'Acoustic padded headboards', 'Concealed dresser storage'],
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'fullhome',
      number: '04',
      title: 'Full Home Interiors',
      description: 'Complete turnkey design and execution from bare shell to final handover. One team, zero vendor chaos.',
      highlights: ['Turnkey project manager', '3D walkthrough before build', '10-year master warranty'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'commercial',
      number: '05',
      title: 'Office and Retail',
      description: 'Ergonomic workspaces, retail boutiques and client reception lounges that reflect your brand identity.',
      highlights: ['Acoustic partition glass', 'Custom reception desks', 'Durable high-traffic finishes'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'renovation',
      number: '06',
      title: 'Renovation',
      description: 'Modernise existing spaces without the headache. Structural redesign, plumbing, tiling, and fresh woodwork.',
      highlights: ['Phased work schedules', 'Debris & dust control', 'Modern space re-planning'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    },
  ] as ServiceItem[],
  projects: [
    {
      id: 'brass-residence',
      title: 'The Brass Residence',
      category: 'Living',
      location: 'Patia, Bhubaneswar',
      area: '1,450 sq ft',
      year: '2026',
      shortDesc: 'A minimalist 3 BHK featuring fluted wall panels, brushed brass accents, and honed marble.',
      fullDesc: 'Custom-crafted for a young doctor couple in Patia. The brief was calm warmth with zero clutter. We paired warm veneer finishes with matte black metal frames, custom fluted oak TV wall, and ambient cove lighting.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      roomTag: '3 BHK Living & Foyer',
      timeline: '58 Days',
      scope: ['TV Wall Console', 'False Ceiling', 'Concealed Wiring', 'Foyer Shoe Bench'],
    },
    {
      id: 'monsoon-villa',
      title: 'Monsoon Villa',
      category: 'Full Home',
      location: 'Khandagiri, Bhubaneswar',
      area: '2,800 sq ft',
      year: '2026',
      shortDesc: '4 BHK Duplex villa featuring double-height living, teak woodwork, and indoor courtyard.',
      fullDesc: 'A generational duplex home designed around natural cross-ventilation and warm Odia artisanal accents. Features a skylit central pebble courtyard, open-concept island kitchen, and handcrafted cane-weave wardrobe panels.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      roomTag: '4 BHK Duplex Villa',
      timeline: '82 Days',
      scope: ['Full Turnkey', 'Custom Island Kitchen', 'Double-Height Paneling', 'Smart Automation'],
    },
    {
      id: 'studio-slate',
      title: 'Studio Slate',
      category: 'Living',
      location: 'Chandrasekharpur, Bhubaneswar',
      area: '640 sq ft',
      year: '2025',
      shortDesc: 'Compact 1 BHK bachelor pad engineered with multi-functional concealed storage and graphite tones.',
      fullDesc: 'Smart small-space design maximised with a foldaway dining desk, floor-to-ceiling charcoal wardrobes, and a linear floating acoustic media console.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      roomTag: '1 BHK Living & Dining',
      timeline: '34 Days',
      scope: ['Space-saving Joinery', 'Bar Counter', 'Track Lighting', 'Wall Beds'],
    },
    {
      id: 'oak-ivory-kitchen',
      title: 'Oak and Ivory Kitchen',
      category: 'Kitchen',
      location: 'Saheed Nagar, Bhubaneswar',
      area: '240 sq ft',
      year: '2025',
      shortDesc: 'Parallel modular kitchen with Calacatta quartz countertops, soft-close Blum lift-ups, and spice pullouts.',
      fullDesc: 'Engineered for high-heat Indian cooking with heavy-duty ducted 1400m³/hr chimney, water-resistant BWP marine ply, anti-scratch matte ivory acrylic, and warm natural oak open shelving.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      roomTag: 'Modular Kitchen',
      timeline: '26 Days',
      scope: ['BWP Marine Ply', 'Blum Soft-Close', 'Quartz Countertop', 'Built-in Microwave'],
    },
    {
      id: 'the-quiet-room',
      title: 'The Quiet Room',
      category: 'Bedroom',
      location: 'Jaydev Vihar, Bhubaneswar',
      area: '320 sq ft',
      year: '2026',
      shortDesc: 'Master bedroom suite with acoustic wall panels, bronze glass wardrobes, and concealed vanity table.',
      fullDesc: 'A sanctuary designed for serene sleep. Features textured acoustic fabric behind the floating oak king bed, soft warm 3000K recessed lighting, and silent touch-to-open wardrobe drawers.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      roomTag: 'Master Suite',
      timeline: '28 Days',
      scope: ['Bespoke Headboard', 'Walk-in Wardrobe', 'Dresser Mirror with Backlight'],
    },
    {
      id: 'aurum-office',
      title: 'Aurum Office',
      category: 'Office',
      location: 'Infocity, Bhubaneswar',
      area: '1,200 sq ft',
      year: '2025',
      shortDesc: '12-seat modern tech consultancy workspace with frosted soundproof cabins and breakout lounge.',
      fullDesc: 'Industrial modern aesthetic combining black powder-coated aluminium glass partitions, solid oak conference table, cable-concealed ergonomic desks, and lush indoor planters.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      roomTag: 'Commercial Workspace',
      timeline: '42 Days',
      scope: ['Soundproof Partitions', '12 Workstations', 'Conference Room', 'Pantry'],
    },
    {
      id: 'terracotta-home',
      title: 'Terracotta Home',
      category: 'Full Home',
      location: 'Cuttack',
      area: '1,600 sq ft',
      year: '2025',
      shortDesc: '3 BHK contemporary apartment celebrating exposed brick, terracotta tiles, and cane craftsmanship.',
      fullDesc: 'Blending contemporary lines with traditional Odishan warmth. Custom-made cane storage shutters, natural clay-toned lime plaster feature walls, and brass hardware.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      roomTag: '3 BHK Turnkey',
      timeline: '65 Days',
      scope: ['Handcrafted Cane Work', 'Lime Wash Walls', 'Custom Modular Kitchen', 'Dining Bench'],
    },
    {
      id: 'marble-and-moss',
      title: 'Marble and Moss',
      category: 'Living',
      location: 'Nayapalli, Bhubaneswar',
      area: '480 sq ft',
      year: '2026',
      shortDesc: 'Formal living room with Italian statuario marble accents, deep sage lounge chairs, and cove illumination.',
      fullDesc: 'Curated for an art collector client. Generous wall planes with picture rails, low profile linen seating, brass floor lamps, and seamlessly concealed HVAC grilles.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      roomTag: 'Formal Living Room',
      timeline: '30 Days',
      scope: ['Bookmatched Marble Wall', 'Curved Sofa Styling', 'Architectural Downlights'],
    },
    {
      id: 'lumen-flat',
      title: 'Lumen Flat',
      category: 'Full Home',
      location: 'Rasulgarh, Bhubaneswar',
      area: '1,100 sq ft',
      year: '2025',
      shortDesc: '2 BHK complete renovation modernising a 15-year-old apartment with open-plan kitchen and bright finishes.',
      fullDesc: 'Complete structural rejuvenation. We removed two non-load bearing partition walls to double incoming natural light, replaced old vitrified tiles with continuous ivory terrazzo, and built custom Scandinavian birch-ply joinery.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      roomTag: '2 BHK Complete Renovation',
      timeline: '55 Days',
      scope: ['Wall Demolition', 'Terrazzo Flooring', 'Complete Rewiring', 'Full Carpentry'],
    },
  ] as ProjectItem[],
  beforeAfter: [
    {
      id: 'living',
      title: 'Living Room Transformation',
      room: 'Living Room',
      location: 'Patia, Bhubaneswar',
      days: '62 days',
      beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      details: 'From unfinished concrete shell and hanging wires to a warm, fluted oak haven with layered lighting and bespoke seating.',
    },
    {
      id: 'kitchen',
      title: 'Modular Kitchen Upgrade',
      room: 'Kitchen',
      location: 'Saheed Nagar, Bhubaneswar',
      days: '26 days',
      beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      details: 'Old granite slab and manual cabinets replaced with seamless Calacatta quartz island, tandem soft-close drawers, and concealed chimney.',
    },
    {
      id: 'bedroom',
      title: 'Master Suite Redesign',
      room: 'Bedroom',
      location: 'Jaydev Vihar, Bhubaneswar',
      days: '30 days',
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      details: 'Unfurnished bare bedroom turned into a 5-star hotel grade retreat with fluted acoustic paneling and bronze glass wardrobe.',
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'Consult',
      timing: 'Day 1',
      description: 'Free on-site consultation at your apartment or plot. We listen to your routine, take laser measurements, and establish a realistic budget.',
      deliverable: 'Site study & preliminary scope',
    },
    {
      step: '02',
      title: 'Design',
      timing: 'Week 1–2',
      description: 'Space planning, optimized floor plans, custom mood boards, and physical material samples brought to your doorstep.',
      deliverable: '2D layouts & material palette',
    },
    {
      step: '03',
      title: '3D Render',
      timing: 'Week 2–3',
      description: 'Photorealistic 3D views of every angle with accurate lighting, finishes, and hardware before a single nail is hammered.',
      deliverable: 'Full 3D render album & itemised BOQ',
    },
    {
      step: '04',
      title: 'Execute',
      timing: 'Week 3–10',
      description: 'Dedicated site engineer oversees carpentry, false ceiling, electricals, and painting. You receive weekly photo & video logs on WhatsApp.',
      deliverable: 'Weekly WhatsApp progress log',
    },
    {
      step: '05',
      title: 'Handover',
      timing: 'Final Week',
      description: 'Professional deep cleaning, decor styling, 50-point quality audit, handover of physical keys and stamped 10-year warranty certificate.',
      deliverable: '10-year warranty & keys',
    },
  ],
  packagesFullHome: [
    {
      id: 'essential',
      name: 'Essential',
      price: '₹1,150',
      unit: '/ sq ft',
      popular: false,
      tagline: 'Clean, smart interiors built with branded essentials and solid craftsmanship.',
      features: [
        'Commercial BWR/BWP grade plywood',
        'Branded laminate finishes (0.8mm - 1mm)',
        'Modular kitchen with SS wire baskets',
        'Standard false ceiling with LED downlights',
        'Asian Paints Royale luxury emulsion',
        '5-Year hardware & woodwork warranty',
        'Dedicated site supervisor',
      ],
      ctaText: 'Get Essential Quote',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹1,650',
      unit: '/ sq ft',
      popular: true,
      tagline: 'Our signature package. High-grade acrylics, designer fluted panels, and cove lighting.',
      features: [
        '100% Calibrated BWP Marine Plywood',
        'Anti-scratch Acrylic & Natural Wood Veneers',
        'Blum / Hafele soft-close tandem drawers',
        'Designer Gyproc false ceiling with warm cove LED',
        'Photorealistic 3D renders before build',
        '10-Year comprehensive warranty card',
        'Weekly video & photo progress updates',
      ],
      ctaText: 'Get Premium Quote',
    },
    {
      id: 'luxury',
      name: 'Luxury',
      price: '₹2,400',
      unit: '/ sq ft',
      popular: false,
      tagline: 'Uncompromising bespoke design with imported finishes, marble, and smart automation.',
      features: [
        'Italian PU lacquer & smoked veneer finishes',
        'Quartz / Italian marble counter surfaces',
        'Smart home automation (lights, curtains, scenes)',
        'Full acoustic bedroom and home-theatre treatments',
        'Curated loose furniture styling & artwork',
        'Dedicated senior architect & project manager',
        '10-Year master warranty + free annual checkups',
      ],
      ctaText: 'Get Luxury Quote',
    },
  ] as PackageItem[],
  packagesSingleRoom: [
    {
      id: 'modular-kitchen',
      name: 'Modular Kitchen',
      price: '₹1.85 Lakh',
      unit: 'starting base',
      popular: true,
      tagline: 'Ergonomic kitchen design built for intense Indian cooking with lifetime hardware warranty.',
      features: [
        'BWP 710 marine plywood carcasses',
        'Hafele/Blum soft-close tandem boxes',
        'Calacatta quartz stone countertop',
        'Ducted chimney ducting & appliance housing',
        'Under-cabinet sensor LED strips',
        '10-Year woodwork warranty',
      ],
      ctaText: 'Get Kitchen Quote',
    },
    {
      id: 'master-bedroom',
      name: 'Master Bedroom',
      price: '₹1.45 Lakh',
      unit: 'starting base',
      popular: false,
      tagline: 'Full floor-to-ceiling wardrobe with loft, upholstered headboard, and bedside lighting.',
      features: [
        'Full height wardrobe with loft extension',
        'Hydraulic storage king-size bed frame',
        'Acoustic padded designer headboard',
        'Floating vanity table with backlit LED mirror',
        'Concealed nightstand wire docks',
        '10-Year woodwork warranty',
      ],
      ctaText: 'Get Bedroom Quote',
    },
    {
      id: 'living-makeover',
      name: 'Living Room Makeover',
      price: '₹1.60 Lakh',
      unit: 'starting base',
      popular: false,
      tagline: 'Statement TV wall console, fluted panelling, false ceiling, and accent lighting.',
      features: [
        'Floating TV console with concealed cabling',
        'Full-height fluted charcoal/oak wall panelling',
        'Cove-lit designer false ceiling',
        'Foyer partition screen or shoe bench',
        'Accent paint / textured lime plaster wall',
        '10-Year woodwork warranty',
      ],
      ctaText: 'Get Living Quote',
    },
  ] as PackageItem[],
  whyUsPromises: [
    {
      icon: 'FileText',
      title: 'Itemised quotes down to the screw',
      description: 'Zero hidden surprises. Every square foot of plywood, laminate, and hinge is priced transparently in a clear Bill of Quantities before work starts.',
    },
    {
      icon: 'Clock',
      title: 'Fixed timeline with penalty clause',
      description: 'We commit to a handover date in writing. If we delay without valid force majeure, we pay you ₹1,000 per day of delay.',
    },
    {
      icon: 'ShieldCheck',
      title: '100% Quality-checked materials',
      description: 'Only genuine ISI and BWP 710 marine-grade plywood, Greenlam/Century laminates, and genuine Hafele/Blum hardware delivered to your site.',
    },
    {
      icon: 'Smartphone',
      title: 'Weekly WhatsApp photo logs',
      description: 'You never have to guess what is happening on site. Every Friday, your project manager sends a photo and video walkthrough of milestones achieved.',
    },
  ],
  testimonials: [
    {
      id: 'priya',
      quote:
        'They delivered in 64 days, exactly as the 3D render. No hidden costs or sudden price hikes midway through. The finishing on the fluted TV unit in Patia is simply world-class.',
      author: 'Priya Mohanty',
      role: 'Homeowner',
      location: 'Patia, Bhubaneswar',
      propertyType: '3 BHK Apartment',
      duration: 'Delivered in 64 days',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'rohit-sneha',
      quote:
        'The modular kitchen is without a doubt the best part of our home. Every drawer and spice pullout feels deeply considered. Their site manager attended every call promptly.',
      author: 'Rohit & Sneha Das',
      role: 'Architect & Banker Couple',
      location: 'Cuttack',
      propertyType: '4 BHK Duplex',
      duration: 'Delivered in 72 days',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'amit',
      quote:
        'As an NRI living in Singapore, managing an interior fit-out in Bhubaneswar felt impossible. Nivaas changed that. Weekly WhatsApp videos and strict timelines meant zero anxiety.',
      author: 'Amit Patnaik',
      role: 'Tech Executive (Singapore / Bhubaneswar)',
      location: 'Chandrasekharpur',
      propertyType: '3 BHK Flat',
      duration: 'Delivered in 60 days',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'ananya',
      quote:
        'Our new consultancy office finally looks and feels like our brand. From soundproof acoustic meeting rooms to custom oak desks, Nivaas nailed the exact vibe we envisioned.',
      author: 'Ananya Rath',
      role: 'Founder & CEO',
      location: 'Infocity, Bhubaneswar',
      propertyType: '12-seat Commercial Office',
      duration: 'Delivered in 38 days',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ] as TestimonialItem[],
  faqs: [
    {
      question: 'How long does a 3 BHK full-home interior take?',
      answer:
        'A standard 3 BHK turnkey interior project takes between 60 to 75 working days from the day you approve the final 3D design and BOQ. We back this with a written timeline agreement and a delay penalty clause.',
    },
    {
      question: 'Do you charge for the first consultation and site visit?',
      answer:
        'No, the first site visit and conceptual discussion in Bhubaneswar are 100% free of charge. Our design consultant will visit your site, take initial measurements, understand your lifestyle and budget, and share a ballpark estimate.',
    },
    {
      question: 'Can I change the design or materials after approving?',
      answer:
        'Yes! Minor changes in finishes or layouts are completely free before on-site factory cutting and execution begin. For any structural additions, we provide an updated itemised quote before making any modifications.',
    },
    {
      question: 'Which materials and hardware brands do you use?',
      answer:
        'We never use low-grade particle board or commercial MDF for wet areas. We exclusively use IS:710 boiling waterproof (BWP) marine plywood, Greenlam/Century laminates, and German hardware from Blum and Hafele with soft-closing mechanisms.',
    },
    {
      question: 'What does the 10-year warranty cover?',
      answer:
        'Our warranty covers manufacturing defects in core woodwork, delamination, termite infestation, and structural warping for 10 full years. Premium hardware like drawer runners and hinges come with manufacturer warranties of up to 10 years or lifetime.',
    },
    {
      question: 'Do you take projects outside Bhubaneswar?',
      answer:
        'Yes! We actively take turnkey projects across Cuttack, Puri, Rourkela, and Berhampur. For projects outside the twin cities, our design team travels for site surveys and quality inspections on schedule.',
    },
  ] as FaqItem[],
};
