import { SolutionItem, RevenueStreamItem, DeploymentScenario, GtmPhase, ThesisItem } from '@/types';

export const OPPORTUNITY_POINTS = [
  {
    number: '01',
    title: 'Underutilized Perimeter Space',
    headline: 'Converting dead perimeter fencing into high-density commercial assets',
    description:
      'Major festivals and outdoor live venues erect miles of passive temporary fencing that consume budget without yielding commercial return. TRUST CODE SYSTEM converts suitable boundary perimeters into structured, utility-connected commercial real estate.',
    metric: 'Hundreds of linear meters',
    metricContext: 'of underutilized boundary per venue',
  },
  {
    number: '02',
    title: 'Fragmented Event Services',
    headline: 'Consolidating disjointed vendor rentals into an engineered modular grid',
    description:
      'Temporary event infrastructure currently relies on disparate tent rentals, ad-hoc shipping containers, and standalone trailer rigs with redundant logistics. We unify services, branding, retail, and hospitality into a single standardized modular framework.',
    metric: 'Single unified platform',
    metricContext: 'replacing multi-vendor operational friction',
  },
  {
    number: '03',
    title: 'Untapped Commercial Potential',
    headline: 'Creating turnkey sponsorship, retail, and premium hospitality real estate',
    description:
      'Brands and high-margin retail operators routinely compete for limited central festival concourses. By expanding premium storefronts and hospitality suites along structured perimeter zones, organizers unlock incremental commercial real estate.',
    metric: 'Multiple new inventory classes',
    metricContext: 'for retail, sponsors, and food operators',
  },
];

export const SYSTEM_COMPONENTS = [
  {
    id: 'pods',
    title: 'Modular Deployable Pods',
    tag: 'Structural Base',
    description:
      'Precision-engineered, containerized architectural pods fabricated with rapid-deploy hydraulic leveling and integrated structural hookups. Configurable as dual-aspect retail storefronts, food & beverage stations, VIP lounges, or operational command centers.',
    specs: [
      'Standardized 20ft & 40ft footprint cassettes',
      'Integrated electrical sub-distribution and water inlets',
      'Heavy-duty weatherproof aluminum & steel construction',
      'Turnkey interior fittings for rapid vendor handoff',
    ],
  },
  {
    id: 'panels',
    title: 'Connected Perimeter Panels',
    tag: 'Boundary Network',
    description:
      'Interlocking architectural panel systems that form a secure, aesthetically cohesive perimeter while accommodating audience movement channels, integrated back-of-house utility conduit passages, and regulated acoustic dampening.',
    specs: [
      'Convenience to the customer, easy access to high-speed satellite internet ',
      'Acoustic-rated modular infill and architectural claddings',
      'Wind-load certified ballast foundation options',
      'Quick-couple mechanical locking joints',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial & Media Integration',
    tag: 'Revenue Layer',
    description:
      'Pre-fitted surface channels for ultra-bright LED digital media screens, tension-fabric sponsor graphics, and secure POS merchant telemetry. Enables rapid sponsor changeover and dynamic digital inventory monetized per hour or session.',
    specs: [
      'Digital signage raceways with high-resolution LED mounts',
      'Universal sponsor cladding bracket systems',
      'Secure high-speed fiber & cellular network gateways',
      'Integrated architectural ambient perimeter lighting',
    ],
  },
  {
    id: 'deployment',
    title: 'Rapid Flexible Deployment',
    tag: 'Operational Fleet',
    description:
      'Engineered for rapid mobilization and demobilization. Units deploy via standard flatbed freight and crane/telehandler rigging, drastically reducing site footprint, setup labor, and venue teardown penalties.',
    specs: [
      'Rapid deployment timeline per cluster',
      'Minimized ground-impact footprint for turf preservation',
      'Compliant with international temporary structure codes',
      'Standardized transport envelope for sea & road freight',
    ],
  },
];

export const SOLUTIONS_ECOSYSTEM: SolutionItem[] = [
  {
    id: 'sponsorship',
    title: 'Branding & Sponsorship',
    headline: 'High-Impact Brand Activations & Showcase Pavilions',
    description:
      'Transform event perimeters into prominent brand showcases, product tasting hubs, and interactive partner pavilions that offer marquee exposure along primary audience arteries.',
    commercialOpportunity:
      'Premium brand activation rights, title sponsor naming packages, and multi-day experiential lease contracts.',
    image: '/images/stage4pods.jpg',
    capabilities: [
      'Custom exterior architectural wraps',
      'High-traffic sampling and product demo counters',
      'Integrated experiential media displays',
      'Turnkey sponsor power and telemetry',
    ],
    operationalRequirements:
      'Requires sponsor asset approval, engineering wind load validation, and municipal permit clearance.',
  },
  {
    id: 'fnb',
    title: 'Food & Beverage',
    headline: 'Turnkey Concession Pods & Craft Beverage Bars',
    description:
      'Sanitary, code-compliant commercial food service pods engineered with grease-trapping conduits, high-capacity cold storage, and dual-window POS queuing.',
    commercialOpportunity:
      'Concessionaire rental fees, percentage-of-gross revenue sharing, and beverage vendor exclusivity contracts.',
    image: '/images/container.jpg',
    capabilities: [
      'Health department approved stainless surfaces',
      'High-capacity potable water and graywater connections',
      'Dual-lane order & pickup counter geometry',
      'Built-in ventilation hoods and beverage refrigeration',
    ],
    operationalRequirements:
      'Subject to local public health inspections, graywater disposal logistics, and heavy electrical hookups.',
  },
  {
    id: 'retail',
    title: 'Retail & Merchandise',
    headline: 'Pop-Up Boutiques & Official Festival Retail Stores',
    description:
      'Secure, climate-controlled retail storefronts with built-in fitting rooms, lockable stockrooms, display shelving, and POS connectivity.',
    commercialOpportunity:
      'Direct retail store rentals, official merchandise concession share, and high-margin partner pop-ups.',
    image: '/images/modular_pod_system.jpg',
    capabilities: [
      'Reinforced roll-up security shutters',
      'Modular slatwall and track lighting',
      'Lockable back-of-house inventory storage',
      'High-speed merchant transaction connectivity',
    ],
    operationalRequirements:
      'Requires daily inventory logistics scheduling and security perimeter verification.',
  },
  {
    id: 'hospitality',
    title: 'Premium Hospitality',
    headline: 'Elevated VIP Lounges, Viewing Decks & Sponsor Suites',
    description:
      'Multi-level architectural pods featuring second-story observation decks, private cocktail lounges, and VIP guest amenities situated at optimal vantage points.',
    commercialOpportunity:
      'High-tier VIP ticket surcharges, corporate entertaining packages, and premium hospitality operator leases.',
    image: '/images/hospitality_retail_activation.jpg',
    capabilities: [
      'Upper-deck balustrades with crowd vantage sightlines',
      'Air-conditioned VIP lounge interiors',
      'Private bar dispensing stations',
      'Restricted access control and RFID check-in',
    ],
    operationalRequirements:
      'Structural ballast certification, accessibility ramps, and crowd-load engineering compliance.',
  },
  {
    id: 'essential-services',
    title: 'Washrooms & Essential Services',
    headline: 'High-Density Sanitation & Operational Command Pods',
    description:
      'Purpose-built luxury vacuum-flush washroom pods, medical triage stations, security hubs, and lost-and-found guest relations depots along the perimeter boundary.',
    commercialOpportunity:
      'Infrastructure service service-level fees, venue operational contracts, and sponsored comfort station integrations.',
    image: '/images/essential_services_pod.jpg',
    capabilities: [
      'Water-saving vacuum flush infrastructure',
      'Continuous HVAC and touchless hygiene fixtures',
      'Integrated medical triage and security radio consoles',
      'ADA-compliant accessible entry modules',
    ],
    operationalRequirements:
      'Reliable municipal sewer/holding tank connections, continuous fresh water pressure, and sanitization staff.',
  },
  {
    id: 'media',
    title: 'Media & Digital Experiences',
    headline: 'Out-of-Home Digital Panels & Information Corridors',
    description:
      'Connected digital perimeter panels providing schedule updates, festival wayfinding, emergency safety alerts, and monetizable dynamic digital advertising.',
    commercialOpportunity:
      'Programmatic digital ad rotations, sponsor screen takeovers, and media network revenue-sharing.',
    image: '/images/stage.jpg',
    capabilities: [
      'High-brightness daylight-viewable LED screens',
      'Dynamic programmatic ad scheduler',
      'Instant venue-wide emergency alert override',
      'Interactive interactive venue mapping points',
    ],
    operationalRequirements:
      'Dedicated backup power UPS, network failover, and local outdoor advertising regulation compliance.',
  },
];

export const BUSINESS_MODEL_STEPS = [
  {
    step: '01',
    title: 'Design the Opportunity',
    lead: 'Site Assessment & Commercial Cadastre',
    description:
      'We partner with festival organizers and venue directors to analyze perimeter geography, audience circulation arteries, ingress/egress points, and zoning regulations to identify untapped commercial space.',
    deliverable: 'Custom Perimeter Commercial Master Plan',
  },
  {
    step: '02',
    title: 'Deploy the System',
    lead: 'Precision Mobilization & Assembly',
    description:
      'Standardized modular pods and perimeter panels are dispatched from regional hubs, positioned via crane/forklift, linked to utility grids, and tested prior to gates opening.',
    deliverable: 'Rapid 48-72h Certified Infrastructure Turnkey',
  },
  {
    step: '03',
    title: 'Activate Commercial Partners',
    lead: 'Tenant & Sponsor Handover',
    description:
      'Approved tenants, high-end brands, food concessionaires, and merchandise operators take occupancy with turnkey utility connections and integrated POS systems.',
    deliverable: 'Operational Merchants Generating Concession Revenue',
  },
  {
    step: '04',
    title: 'Monetize the Ecosystem',
    lead: 'Multi-Stream Settlement & Scaled Returns',
    description:
      'Revenue is realized across deployment fees, space rentals, sponsorship activations, media loops, and concession revenue-shares, distributing agreed proceeds with venue partners.',
    deliverable: 'Audited Multi-Stream Revenue Reconciliation',
  },
];

export const REVENUE_STREAMS: RevenueStreamItem[] = [
  {
    id: 'deployment-fees',
    number: '01',
    title: 'Infrastructure Deployment Fees',
    whoPays: 'Event Organizers & Venue Owners',
    whatTheyReceive:
      'Turnkey site engineering, perimeter space planning, transport logistics, setup/teardown labor, utility interconnection, and certified perimeter security fencing.',
    revenueModel:
      'Base mobilization and demobilization fee per event based on linear perimeter meterage and deployed unit quantity.',
    operationalConsiderations:
      'Requires heavy vehicle access, ground ballast engineering, and union/local labor coordination.',
    riskFactor: 'Weather delays, site terrain variation, and transport freight volatility.',
  },
  {
    id: 'pod-rentals',
    number: '02',
    title: 'Pod & Panel Rentals',
    whoPays: 'Event Organizers, Promoters, or Tenant Operators',
    whatTheyReceive:
      'Temporary use of standardized, weather-sealed architectural pods and connected panels for the duration of the event.',
    revenueModel:
      'Day-rate or multi-day event lease fees per modular pod cassette and linear panel section.',
    operationalConsiderations:
      'Asset wear and tear, refurbishing intervals between events, and pre-season storage depots.',
    riskFactor: 'Seasonal utilization peaks; requires geographic cluster scheduling.',
  },
  {
    id: 'space-leasing',
    number: '03',
    title: 'Commercial Space Leasing',
    whoPays: 'Retail Merchants, Concessionaires & F&B Operators',
    whatTheyReceive:
      'Guaranteed high-footfall perimeter storefront, turnkey electrical/water service, sanitary clearances, and customer queue lanes.',
    revenueModel:
      'Fixed booth lease fee plus optional percentage-of-gross concession sales over agreed revenue baseline.',
    operationalConsiderations:
      'Tenant vetting, POS telemetry integration, and health & safety compliance supervision.',
    riskFactor: 'Tenant sales performance, festival attendance volatility, and payment default.',
  },
  {
    id: 'sponsorship',
    number: '04',
    title: 'Sponsorship & Brand Activations',
    whoPays: 'Consumer Brands, Tech Companies & Corporate Sponsors',
    whatTheyReceive:
      'Custom-branded activation pods, exclusive product sampling hubs, branded upper-deck lounges, and prime visual dominance along perimeter paths.',
    revenueModel:
      'High-value sponsorship package fees, custom fabrication markups, and activation management contracts.',
    operationalConsiderations:
      'Brand design sign-offs, custom vinyl/fabrication lead times, and sensory guidelines.',
    riskFactor: 'Long corporate sales cycles and brand category exclusivity restrictions.',
  },
  {
    id: 'media-advertising',
    number: '05',
    title: 'Media & Digital Advertising',
    whoPays: 'National & Regional Advertisers, Event Media Buyers',
    whatTheyReceive:
      'High-brightness programmatic digital screen time, synchronous perimeter takeovers, and static perimeter tension-panel graphics.',
    revenueModel:
      'Digital OOH (Out-of-Home) rate card fees per screen loop/impression, plus emergency broadcast service contracts.',
    operationalConsiderations:
      'Network uptime monitoring, screen daylight calibration, and municipal digital sign ordinances.',
    riskFactor: 'Screen hardware exposure to outdoor elements and brightness power demands.',
  },
  {
    id: 'partnerships',
    number: '06',
    title: 'Event Service Partnerships',
    whoPays: 'Specialized Service Providers (Sanitation, Telecom, Logistics)',
    whatTheyReceive:
      'Standardized operational base, secure perimeter staging, utility hookups, and direct access to high-volume event patronage.',
    revenueModel:
      'Revenue share or negotiated concession margin from specialty service delivery across perimeter nodes.',
    operationalConsiderations:
      'Rigorous service-level agreement (SLA) audits and hygiene maintenance workflows.',
    riskFactor: 'Third-party vendor service quality and operational non-performance.',
  },
  {
    id: 'multi-event',
    number: '07',
    title: 'Multi-Event Contracts',
    whoPays: 'Global Festival Promoters & Stadium Operators',
    whatTheyReceive:
      'Guaranteed seasonal fleet availability, pre-engineered rapid site plans, volume pricing discounts, and dedicated logistics coordinators.',
    revenueModel:
      'Multi-year framework agreements, annual retainers, and priority fleet reservation fees.',
    operationalConsiderations:
      'Inter-event route optimization, regional warehouse placement, and preventive maintenance fleet schedules.',
    riskFactor: 'Promoter event cancellations or festival tour rescheduling.',
  },
];

export const DEPLOYMENT_SCENARIOS: DeploymentScenario[] = [
  {
    id: 'scenario-a',
    code: 'Scenario A',
    title: 'Regional Festival / Single-Stage Event',
    subtitle: 'Focused Essential & Commercial Pod Configuration',
    conceptLayout:
      'Linear perimeter alignment along primary entrance and food lawn; 18–25 pods comprising official merchandise, 8 craft food vendors, 2 sponsor activations, and 4 modular sanitation modules.',
    unitRange: '18 – 25 Modular Units',
    tenantTypes: ['Local Craft F&B Vendors', 'Merchandise Concessions', 'Regional Brand Sponsors', 'Event Information & First Aid'],
    indicativeConsiderations: [
      'Single transport convoy (4 flatbed trailers)',
      '18-hour site assembly with local telehandler',
      'Operates on standard portable generator feeds',
      'Ideal for 15,000–30,000 daily attendance venues',
    ],
    potentialRevenueSources: [
      'Vendor space leases',
      'Merchandise concession percentage',
      'Deployment & site setup fee',
      'Sponsor pod branding packages',
    ],
    operationalComplexity: 'Moderate',
    illustrativePotential: '$850K – $1.6M Gross Project Potential',
  },
  {
    id: 'scenario-b',
    code: 'Scenario B',
    title: 'Major Multi-Day Festival',
    subtitle: 'Integrated Commercial, VIP Hospitality & Media Corridor',
    conceptLayout:
      'Dual-perimeter ring wrapping main stage concourse and VIP grounds; 45–60 pods featuring double-decker viewing pavilions, 18 high-throughput food kitchens, premium brand lounges, and continuous digital screen panels.',
    unitRange: '45 – 60 Modular Units',
    tenantTypes: [
      'National Beverage & Fashion Brands',
      'Gourmet Culinary Operators',
      'VIP Experience Hospitality Hosts',
      'Official Festival Flagship Retail',
    ],
    indicativeConsiderations: [
      'Coordinated logistics fleet with phased arrival',
      'Dedicated electrical sub-panel connections',
      'Integrated water and graywater manifold network',
      'Built for 50,000–90,000 daily attendance footprint',
    ],
    potentialRevenueSources: [
      'High-tier brand activation fees',
      'VIP lounge pass revenue shares',
      'F&B concession percentages',
      'Programmatic digital perimeter screen inventory',
      'Multi-day infrastructure deployment fee',
    ],
    operationalComplexity: 'High',
    illustrativePotential: '$2.8M – $5.2M Gross Project Potential',
  },
  {
    id: 'scenario-c',
    code: 'Scenario C',
    title: 'Large-Scale Event Ecosystem',
    subtitle: 'Full 360-Degree Modular Perimeter Infrastructure',
    conceptLayout:
      'Complete perimeter conversion across multiple festival zones (Main Stages, Camping Grounds, Village Squares, Ingress Gates); 90–140 connected units forming continuous commercial promenades, luxury suites, and operations command centers.',
    unitRange: '90 – 140+ Modular Units',
    tenantTypes: [
      'Global Title Sponsors',
      'Curated Culinary & Bar Operators',
      'Experiential Technology Exhibitors',
      'Comprehensive Sanitation & Medical Fleets',
      '24/7 Camping Village Convenience Stores',
    ],
    indicativeConsiderations: [
      'Enterprise site management with BIM pre-planning',
      'Multi-stage utility distribution and backup generation',
      'Dedicated logistics staging compound',
      'Deployed for 100,000+ multi-day attendee events',
    ],
    potentialRevenueSources: [
      'Enterprise multi-event promoter master contracts',
      'Extensive digital out-of-home advertising network',
      'Multi-tiered vendor concourse leasing',
      'Premium corporate hospitality deck leases',
      'Full-service turnkey event infrastructure service fees',
    ],
    operationalComplexity: 'Advanced Complex',
    illustrativePotential: '$6.5M – $12M+ Gross Project Potential',
  },
];

export const INVESTOR_THESIS_POINTS: ThesisItem[] = [
  {
    number: '01',
    title: 'Multiple Monetization Channels',
    summary:
      'Blended revenue generation combining infrastructure service fees, monthly/event asset leases, commercial square-foot tenant rents, brand sponsorship packages, and digital media advertising.',
    commercialRationale:
      'Mitigates reliance on any single revenue source by addressing both operational infrastructure demand and commercial merchant demand simultaneously.',
  },
  {
    number: '02',
    title: 'Repeatable Modular Deployment Model',
    summary:
      'Standardized, road-freight-optimized physical assets engineered for hundreds of assembly cycles with minimal degradation, generating attractive return on invested capital.',
    commercialRationale:
      'Unlike custom temporary builds that are discarded post-event, modular units are amortized over years of multi-festival service.',
  },
  {
    number: '03',
    title: 'Aligned Commercial Partnerships',
    summary:
      'Symbiotic value creation with event promoters who gain superior perimeter aesthetics, turnkey compliance, and new profit-sharing opportunities without capital expenditure.',
    commercialRationale:
      'Aligns business incentives: promoters unlock incremental net revenue from dead space while reducing vendor coordination headaches.',
  },
  {
    number: '04',
    title: 'Flexible Cross-Industry Applications',
    summary:
      'Core architecture applies seamlessly across music festivals, major sports tournaments, trade expos, motor racing circuits, and municipal cultural gatherings.',
    commercialRationale:
      'Buffers seasonal event cycles by redeploying assets across sporting, exhibition, and seasonal urban events year-round.',
  },
  {
    number: '05',
    title: 'Operational Scalability',
    summary:
      'Regional inventory hubs, algorithmic site-mapping software, and standardized logistics SOPs enable expansion into new metropolitan markets.',
    commercialRationale:
      'Unit economics improve with fleet density, lowering transport radius costs and maximizing annual utilization days.',
  },
  {
    number: '06',
    title: 'Multi-Event Recurring Contracts',
    summary:
      'Opportunity to negotiate enterprise framework agreements across multi-city festival tours and promoter portfolios.',
    commercialRationale:
      'Long-term agreements generate predictable forward order books, stabilizing fleet utilization and cash-flow visibility.',
  },
];

export const GTM_PHASES: GtmPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Market Validation & Design Engineering',
    objective:
      'Interview marquee festival promoters, venue directors, and brand activation agencies to solidify engineering specs, permit standards, and commercial pricing models.',
    milestones: [
      'In-depth interviews with 25+ festival directors & stadium managers',
      'Preliminary tenant & brand sponsor willingness-to-pay validation',
      'Completion of modular structural engineering and wind-load calculations',
      'Finalization of pilot CAD layouts and bill of materials (BOM)',
    ],
    keyDeliverable: 'Validated Commercial Blueprint & Engineering Sign-Off',
  },
  {
    phase: 'Phase 02',
    title: 'Prototype Fabrication & Pilot Deployment',
    objective:
      'Fabricate first production cluster of modular pods and connected panels. Deploy at a selected 20,000+ attendee regional festival to test real-world assembly, operations, and economics.',
    milestones: [
      'Manufacture pilot fleet of 15 modular units and connected panels',
      'Secure venue permits, fire marshal clearances, and transport routes',
      'Execute full live-event deployment with real commercial concessionaires',
      'Measure exact installation timing, labor costs, and vendor sales performance',
    ],
    keyDeliverable: 'Live Pilot Performance Audit & Operational Validation',
  },
  {
    phase: 'Phase 03',
    title: 'Process Optimization & Fleet Expansion',
    objective:
      'Refine modular mechanical connectors, improve interior vendor fit-outs, implement proprietary site-cadastre planning software, and expand unit manufacturing.',
    milestones: [
      'Iterate connector geometry to achieve sub-12 hour cluster assembly',
      'Launch digital site-planning tool for promoter self-service design',
      'Establish certified regional contract manufacturing agreements',
      'Convert pilot successes into multi-year commercial commitments',
    ],
    keyDeliverable: 'Standardized Operating Procedure & Commercial Scalability Engine',
  },
  {
    phase: 'Phase 04',
    title: 'Scale & Multi-Region Fleet Deployment',
    objective:
      'Establish strategic storage and deployment depots across key festival hubs. Scale fleet to service concurrent major festivals across North America and Europe.',
    milestones: [
      'Scale active inventory across multi-regional distribution hubs',
      'Sign enterprise framework agreements with global festival promoters',
      'Launch programmatic digital out-of-home advertising network on perimeter panels',
      'Achieve target fleet utilization rates and strong cash-flow compounding',
    ],
    keyDeliverable: 'Market-Leading Modular Event Perimeter Infrastructure Network',
  },
];

export const CAPITAL_DEPLOYMENT_AREAS = [
  {
    title: 'Modular Prototyping & Advanced Engineering',
    description:
      'Tooling, structural FEA analysis, wind-load testing, fire-safety certifications, and patent filings for proprietary quick-couple perimeter joints.',
  },
  {
    title: 'Contract Manufacturing & Supply Chain Scaling',
    description:
      'Partnering with certified ISO container fabricators to secure volume pricing, high-spec architectural finishes, and durable electrical cassettes.',
  },
  {
    title: 'Core Fleet Inventory Build-Out',
    description:
      'Capital allocation for manufacturing initial batches of multi-configuration pods, connected panels, hydraulic transport bases, and LED media fixtures.',
  },
  {
    title: 'Logistics, Transport Fleet & Storage Depots',
    description:
      'Leasing regional staging depots near major festival corridors, specialized rigging hardware, and establishing freight carrier logistics networks.',
  },
  {
    title: 'Proprietary Site-Mapping & Management Software',
    description:
      'Developing 3D digital cadastre software allowing promoters to simulate perimeter layouts, calculate crowd-safety egress, and manage tenant leases.',
  },
  {
    title: 'Business Development & Enterprise Partnerships',
    description:
      'Assembling experienced enterprise sales talent to secure promoter framework agreements, retail tenant networks, and national sponsor accounts.',
  },
];
