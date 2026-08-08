import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');
const constantsDir = path.join(__dirname, '../src/constants');
const outputFile = path.join(constantsDir, 'searchIndex.json');

// We also need to map the file names to the top-level route and title.
// We can manually define this map based on tokens.ts NAV_SECTIONS or just infer it.
const pageTitleMap = {
  'AccordionPage.tsx': { title: 'Accordion', category: 'Components', path: '/accordion' },
  'AlertsPage.tsx': { title: 'Alerts', category: 'Components', path: '/alerts' },
  'AvatarPage.tsx': { title: 'Avatar', category: 'Components', path: '/avatar' },
  'BadgesPage.tsx': { title: 'Badges', category: 'Components', path: '/badges' },
  'BordersPage.tsx': { title: 'Borders', category: 'Design Tokens', path: '/borders' },
  'BreadcrumbPage.tsx': { title: 'Breadcrumb', category: 'Components', path: '/breadcrumb' },
  'ButtonsPage.tsx': { title: 'Buttons', category: 'Components', path: '/buttons' },
  'CardsPage.tsx': { title: 'Cards', category: 'Components', path: '/cards' },
  'ColorsPage.tsx': { title: 'Colors', category: 'Design Tokens', path: '/colors' },
  'FormsPage.tsx': { title: 'Forms', category: 'Components', path: '/forms' },
  'GridLayoutPage.tsx': { title: 'Grid & Flexbox', category: 'Layout', path: '/grid-layout' },
  'IconsPage.tsx': { title: 'Icons', category: 'Components', path: '/icons' },
  'ModalPage.tsx': { title: 'Modal', category: 'Components', path: '/modal' },
  'PaginationPage.tsx': { title: 'Pagination', category: 'Components', path: '/pagination' },
  'ProgressPage.tsx': { title: 'Progress', category: 'Components', path: '/progress' },
  'ResponsivePage.tsx': { title: 'Responsive', category: 'Layout', path: '/responsive' },
  'ShadowsPage.tsx': { title: 'Shadows', category: 'Design Tokens', path: '/shadows' },
  'SizingPage.tsx': { title: 'Sizing', category: 'Design Tokens', path: '/sizing' },
  'SpacingPage.tsx': { title: 'Spacing', category: 'Design Tokens', path: '/spacing' },
  'SpinnerPage.tsx': { title: 'Spinner', category: 'Components', path: '/spinner' },
  'TabsPage.tsx': { title: 'Tabs', category: 'Components', path: '/tabs' },
  'TooltipPage.tsx': { title: 'Tooltip', category: 'Components', path: '/tooltip' },
  'TypographyPage.tsx': { title: 'Typography', category: 'Design Tokens', path: '/typography' },
  'GettingStarted.tsx': { title: 'Getting Started', category: 'Overview', path: '/' },
};

function extractDocSections(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /<DocSection[^>]*title=["']([^"']+)["'][^>]*>/g;
  const sections = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const id = title.toLowerCase().replace(/\s+/g, '-');
    sections.push({ title, id });
  }
  
  return sections;
}

function generateIndex() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
  const searchIndex = [];

  for (const file of files) {
    const meta = pageTitleMap[file];
    if (!meta) continue;

    const sections = extractDocSections(path.join(pagesDir, file));
    
    searchIndex.push({
      id: meta.path,
      title: meta.title,
      category: meta.category,
      path: meta.path,
      sections: sections
    });
  }

  // Ensure constants dir exists
  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(searchIndex, null, 2));
  console.log(`Generated search index at ${outputFile} with ${searchIndex.length} pages.`);
}

generateIndex();
