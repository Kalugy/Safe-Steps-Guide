import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Home } from './pages/Home';
import { Before } from './pages/Before';
import { After } from './pages/After';
import { Guide } from './pages/Guide';
import { MapPage } from './pages/Map';
import { GuidesPage } from './pages/Guides';
import { PhaseNav } from './components/PhaseNav';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <div className="min-h-[100dvh] bg-background w-full font-sans">
        <div className="w-full min-h-[100dvh] flex flex-col relative overflow-x-hidden">
          <PhaseNav />
          <Switch>
            <Route path="/" component={MapPage} />
            <Route path="/map" component={MapPage} />
            <Route path="/guias" component={GuidesPage} />
            <Route path="/durante" component={Home} />
            <Route path="/antes" component={Before} />
            <Route path="/despues" component={After} />
            <Route path="/guia/:id" component={Guide} />
            <Route path="/antes/:id" component={Guide} />
            <Route path="/durante/:id" component={Guide} />
            <Route component={MapPage} />
          </Switch>
        </div>
      </div>
    </WouterRouter>
  );
}
