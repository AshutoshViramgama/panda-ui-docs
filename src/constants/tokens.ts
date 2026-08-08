/** All default Panda CSS token data for documentation rendering */

export const COLOR_PALETTES = [
  'rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo',
  'blue', 'sky', 'cyan', 'teal', 'emerald', 'green',
  'lime', 'yellow', 'amber', 'orange', 'red',
  'neutral', 'stone', 'zinc', 'gray', 'slate',
] as const;

export const COLOR_SCALES = [
  '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950',
] as const;

export const FONT_SIZES = [
  { token: 'xs', value: '0.75rem' },
  { token: 'sm', value: '0.875rem' },
  { token: 'md', value: '1rem' },
  { token: 'lg', value: '1.125rem' },
  { token: 'xl', value: '1.25rem' },
  { token: '2xl', value: '1.5rem' },
  { token: '3xl', value: '1.875rem' },
  { token: '4xl', value: '2.25rem' },
  { token: '5xl', value: '3rem' },
  { token: '6xl', value: '3.75rem' },
  { token: '7xl', value: '4.5rem' },
  { token: '8xl', value: '6rem' },
  { token: '9xl', value: '8rem' },
] as const;

export const FONT_WEIGHTS = [
  { token: 'thin', value: '100' },
  { token: 'extralight', value: '200' },
  { token: 'light', value: '300' },
  { token: 'normal', value: '400' },
  { token: 'medium', value: '500' },
  { token: 'semibold', value: '600' },
  { token: 'bold', value: '700' },
  { token: 'extrabold', value: '800' },
  { token: 'black', value: '900' },
] as const;

export const LINE_HEIGHTS = [
  { token: 'none', value: '1' },
  { token: 'tight', value: '1.25' },
  { token: 'snug', value: '1.375' },
  { token: 'normal', value: '1.5' },
  { token: 'relaxed', value: '1.625' },
  { token: 'loose', value: '2' },
] as const;

export const LETTER_SPACINGS = [
  { token: 'tighter', value: '-0.05em' },
  { token: 'tight', value: '-0.025em' },
  { token: 'normal', value: '0em' },
  { token: 'wide', value: '0.025em' },
  { token: 'wider', value: '0.05em' },
  { token: 'widest', value: '0.1em' },
] as const;

export const SPACING_TOKENS = [
  { token: '0', value: '0rem' },
  { token: '1', value: '0.25rem' },
  { token: '2', value: '0.5rem' },
  { token: '3', value: '0.75rem' },
  { token: '4', value: '1rem' },
  { token: '5', value: '1.25rem' },
  { token: '6', value: '1.5rem' },
  { token: '7', value: '1.75rem' },
  { token: '8', value: '2rem' },
  { token: '9', value: '2.25rem' },
  { token: '10', value: '2.5rem' },
  { token: '11', value: '2.75rem' },
  { token: '12', value: '3rem' },
  { token: '14', value: '3.5rem' },
  { token: '16', value: '4rem' },
  { token: '20', value: '5rem' },
  { token: '24', value: '6rem' },
  { token: '28', value: '7rem' },
  { token: '32', value: '8rem' },
  { token: '36', value: '9rem' },
  { token: '40', value: '10rem' },
  { token: '44', value: '11rem' },
  { token: '48', value: '12rem' },
  { token: '52', value: '13rem' },
  { token: '56', value: '14rem' },
  { token: '60', value: '15rem' },
  { token: '64', value: '16rem' },
  { token: '72', value: '18rem' },
  { token: '80', value: '20rem' },
  { token: '96', value: '24rem' },
  { token: '0.5', value: '0.125rem' },
  { token: '1.5', value: '0.375rem' },
  { token: '2.5', value: '0.625rem' },
  { token: '3.5', value: '0.875rem' },
] as const;

export const SIZING_TOKENS = [
  { token: '0', value: '0rem' },
  { token: '1', value: '0.25rem' },
  { token: '2', value: '0.5rem' },
  { token: '3', value: '0.75rem' },
  { token: '4', value: '1rem' },
  { token: '5', value: '1.25rem' },
  { token: '6', value: '1.5rem' },
  { token: '7', value: '1.75rem' },
  { token: '8', value: '2rem' },
  { token: '9', value: '2.25rem' },
  { token: '10', value: '2.5rem' },
  { token: '12', value: '3rem' },
  { token: '14', value: '3.5rem' },
  { token: '16', value: '4rem' },
  { token: '20', value: '5rem' },
  { token: '24', value: '6rem' },
  { token: '28', value: '7rem' },
  { token: '32', value: '8rem' },
  { token: '36', value: '9rem' },
  { token: '40', value: '10rem' },
  { token: '48', value: '12rem' },
  { token: '56', value: '14rem' },
  { token: '64', value: '16rem' },
  { token: 'full', value: '100%' },
  { token: 'xs', value: '20rem' },
  { token: 'sm', value: '24rem' },
  { token: 'md', value: '28rem' },
  { token: 'lg', value: '32rem' },
  { token: 'xl', value: '36rem' },
  { token: '2xl', value: '42rem' },
  { token: '3xl', value: '48rem' },
  { token: '4xl', value: '56rem' },
  { token: '5xl', value: '64rem' },
  { token: '6xl', value: '72rem' },
  { token: '7xl', value: '80rem' },
  { token: '8xl', value: '90rem' },
] as const;

export const BORDER_RADII = [
  { token: 'none', value: '0' },
  { token: 'xs', value: '0.125rem' },
  { token: 'sm', value: '0.25rem' },
  { token: 'md', value: '0.375rem' },
  { token: 'lg', value: '0.5rem' },
  { token: 'xl', value: '0.75rem' },
  { token: '2xl', value: '1rem' },
  { token: '3xl', value: '1.5rem' },
  { token: 'full', value: '9999px' },
] as const;

export const BORDER_WIDTHS = [
  { token: '0', value: '0px' },
  { token: '1', value: '1px' },
  { token: '2', value: '2px' },
  { token: '4', value: '4px' },
  { token: '8', value: '8px' },
] as const;

export const SHADOWS = [
  { token: 'xs', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { token: 'sm', value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  { token: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { token: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { token: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { token: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { token: 'inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
] as const;

export const BREAKPOINTS = [
  { token: 'sm', value: '640px' },
  { token: 'md', value: '768px' },
  { token: 'lg', value: '1024px' },
  { token: 'xl', value: '1280px' },
  { token: '2xl', value: '1536px' },
] as const;

export const OPACITY_VALUES = [
  { token: '0', value: '0' },
  { token: '5', value: '0.05' },
  { token: '10', value: '0.1' },
  { token: '20', value: '0.2' },
  { token: '25', value: '0.25' },
  { token: '30', value: '0.3' },
  { token: '40', value: '0.4' },
  { token: '50', value: '0.5' },
  { token: '60', value: '0.6' },
  { token: '70', value: '0.7' },
  { token: '75', value: '0.75' },
  { token: '80', value: '0.8' },
  { token: '90', value: '0.9' },
  { token: '95', value: '0.95' },
  { token: '100', value: '1' },
] as const;

export const Z_INDEX_VALUES = [
  { token: 'hide', value: '-1' },
  { token: 'base', value: '0' },
  { token: 'docked', value: '10' },
  { token: 'dropdown', value: '1000' },
  { token: 'sticky', value: '1100' },
  { token: 'banner', value: '1200' },
  { token: 'overlay', value: '1300' },
  { token: 'modal', value: '1400' },
  { token: 'popover', value: '1500' },
  { token: 'toast', value: '1700' },
  { token: 'tooltip', value: '1800' },
] as const;

export const ASPECT_RATIOS = [
  { token: 'square', value: '1 / 1' },
  { token: 'landscape', value: '4 / 3' },
  { token: 'portrait', value: '3 / 4' },
  { token: 'wide', value: '16 / 9' },
  { token: 'ultrawide', value: '18 / 5' },
  { token: 'golden', value: '1.618 / 1' },
] as const;

export interface NavSection {
  title: string;
  items: { label: string; path: string }[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Getting Started', path: '/' },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { label: 'Colors', path: '/colors' },
      { label: 'Typography', path: '/typography' },
      { label: 'Spacing', path: '/spacing' },
      { label: 'Sizing', path: '/sizing' },
      { label: 'Borders', path: '/borders' },
      { label: 'Shadows', path: '/shadows' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Buttons', path: '/buttons' },
      { label: 'Forms', path: '/forms' },
      { label: 'Badges', path: '/badges' },
      { label: 'Alerts', path: '/alerts' },
      { label: 'Cards', path: '/cards' },
      { label: 'Accordion', path: '/accordion' },
      { label: 'Tabs', path: '/tabs' },
      { label: 'Modal', path: '/modal' },
      { label: 'Tooltip', path: '/tooltip' },
      { label: 'Breadcrumb', path: '/breadcrumb' },
      { label: 'Pagination', path: '/pagination' },
      { label: 'Avatar', path: '/avatar' },
      { label: 'Progress', path: '/progress' },
      { label: 'Spinner', path: '/spinner' },
      { label: 'Icons', path: '/icons' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { label: 'Grid & Flexbox', path: '/grid-layout' },
      { label: 'Responsive', path: '/responsive' },
    ],
  },
];
