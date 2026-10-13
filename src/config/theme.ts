/**
 * TRUST CODE SYSTEM - Centralized Design Tokens & Theme Configuration
 * 
 * Strict light-themed palette inspired by modern architecture,
 * premium infrastructure, and institutional investor presentations.
 */

export const theme = {
  brand: {
    name: 'TRUST CODE SYSTEM',
    shortName: 'TRUST CODE',
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
    heroImage: '/images/hero_festival_perimeter.jpg',
    modularPodSystem: '/images/modular_pod_system.jpg',
    hospitalityRetail: '/images/hospitality_retail_activation.jpg',
    essentialServices: '/images/essential_services_pod.jpg',
    visionVideoUrl: 'https://www.youtube.com/embed/XpX3g_WcJ1E?si=CywOK-8z63XMLUyA',
    visionVideoExternal: 'https://www.youtube.com/watch?v=XpX3g_WcJ1E',
  },
} as const;

export type Theme = typeof theme;
