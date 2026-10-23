/**
 * TRUST CODE SYSTEM - Centralized Design Tokens & Theme Configuration
 * 
 * Strict light-themed palette inspired by modern architecture,
 * premium infrastructure, and institutional investor presentations.
 */

export const theme = {
  brand: {
    name: 'Modular Event Perimeter System',
    shortName: 'TCSweREAL',
    productName: 'Modular Event Perimeter System',
    tagline: 'Every Inch Matters.',
    positioning: 'Transforming Event Perimeters Into Revenue-Generating Infrastructure.',
    subMessage: 'More Capacity. More Places to Shop. More Experiences. More Ways to Generate Revenue.',
    compactProposition: 'Modular Infrastructure. Multiple Revenue Streams. Scalable Opportunities.',
    headlineOpportunity: '$200M–$500M Potential Gross Revenue Opportunity',
  },
  colors: {
    // Primary background: White
    bgPrimary: '#FFFFFF',
    // Secondary background: Warm off-white
    bgSecondary: '#F7F8FA',
    // Card background: Pure white
    bgCard: '#FFFFFF',
    // Subtle alternate surface
    bgElevated: '#F2F5F9',
    
    // Primary text: Deep navy
    textPrimary: '#14243A',
    // Secondary text: Slate gray
    textSecondary: '#657184',
    // Muted text
    textMuted: '#8E99A8',
    
    // Primary accent: Refined cobalt blue
    accentPrimary: '#2457A7',
    accentPrimaryHover: '#1B4589',
    accentPrimaryLight: '#EDF3FC',
    
    // Highlight accent: Warm champagne gold
    accentGold: '#D9A65A',
    accentGoldHover: '#C49145',
    accentGoldLight: '#FAF4EB',
    
    // Architectural borders: Light gray
    borderLight: '#E4E8EF',
    borderMuted: '#D0D7E2',
    
    // Status colors (accessible)
    success: '#1B7A43',
    successBg: '#EAF5EE',
    warning: '#B87216',
    warningBg: '#FDF6E9',
  },
  typography: {
    fontSans: 'var(--font-sans, system-ui, -apple-system, sans-serif)',
    fontMono: 'var(--font-mono, monospace)',
  },
  media: {
    logo: '/images/tcs-logo.svg',
    stageImage: '/images/stage_super_coachella.jpg',
    containerCafeImage: '/images/container_custom_cafe.jpg',
    container: '/images/container.jpg',
    tcsmap: '/images/tcs-map.jpg',
    tcsnewmap: '/images/newmap.jpg',
    tcsthumb: '/images/tcs-thumb.jpg',
    tcsentertainmnt: '/images/tcs-entertainment.jpg',
    tcsentertainmnt1: '/images/tcs-entertainment1.jpg',
    modelRepresentativeImage: '/images/model_representative.jpg',
    eventMapImage: '/images/tcs_event_site_map.jpg',
    heroImage: '/images/stage_super_coachella.jpg',
    modularPodSystem: '/images/container_custom_cafe.jpg',
    hospitalityRetail: '/images/hospitality_retail_activation.jpg',
    essentialServices: '/images/essential_services_pod.jpg',
    visionVideoUrl: 'https://www.youtube.com/embed/adUqSPrldK8?si=bJ5cPKG1TvK3a3ki',
    visionVideoExternal: 'https://www.youtube.com/watch?v=adUqSPrldK8',
  },
} as const;

export type Theme = typeof theme;
