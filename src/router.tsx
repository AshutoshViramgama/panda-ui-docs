import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { GettingStarted } from './pages/GettingStarted';
import { ColorsPage } from './pages/ColorsPage';
import { TypographyPage } from './pages/TypographyPage';
import { SpacingPage } from './pages/SpacingPage';
import { SizingPage } from './pages/SizingPage';
import { BordersPage } from './pages/BordersPage';
import { ShadowsPage } from './pages/ShadowsPage';
import { ButtonsPage } from './pages/ButtonsPage';
import { FormsPage } from './pages/FormsPage';
import { BadgesPage } from './pages/BadgesPage';
import { AlertsPage } from './pages/AlertsPage';
import { CardsPage } from './pages/CardsPage';
import { AccordionPage } from './pages/AccordionPage';
import { TabsPage } from './pages/TabsPage';
import { ModalPage } from './pages/ModalPage';
import { TooltipPage } from './pages/TooltipPage';
import { BreadcrumbPage } from './pages/BreadcrumbPage';
import { PaginationPage } from './pages/PaginationPage';
import { AvatarPage } from './pages/AvatarPage';
import { ProgressPage } from './pages/ProgressPage';
import { SpinnerPage } from './pages/SpinnerPage';
import { GridLayoutPage } from './pages/GridLayoutPage';
import { ResponsivePage } from './pages/ResponsivePage';
import { IconsPage } from './pages/IconsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <GettingStarted /> },
      { path: 'colors', element: <ColorsPage /> },
      { path: 'typography', element: <TypographyPage /> },
      { path: 'spacing', element: <SpacingPage /> },
      { path: 'sizing', element: <SizingPage /> },
      { path: 'borders', element: <BordersPage /> },
      { path: 'shadows', element: <ShadowsPage /> },
      { path: 'buttons', element: <ButtonsPage /> },
      { path: 'forms', element: <FormsPage /> },
      { path: 'badges', element: <BadgesPage /> },
      { path: 'alerts', element: <AlertsPage /> },
      { path: 'cards', element: <CardsPage /> },
      { path: 'accordion', element: <AccordionPage /> },
      { path: 'tabs', element: <TabsPage /> },
      { path: 'modal', element: <ModalPage /> },
      { path: 'tooltip', element: <TooltipPage /> },
      { path: 'breadcrumb', element: <BreadcrumbPage /> },
      { path: 'pagination', element: <PaginationPage /> },
      { path: 'avatar', element: <AvatarPage /> },
      { path: 'progress', element: <ProgressPage /> },
      { path: 'spinner', element: <SpinnerPage /> },
      { path: 'grid-layout', element: <GridLayoutPage /> },
      { path: 'icons', element: <IconsPage /> },
      { path: 'responsive', element: <ResponsivePage /> },
    ],
  },
]);
