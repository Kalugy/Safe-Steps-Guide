import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Home } from './pages/Home';
import { Guide } from './pages/Guide';
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
      {/* Background color of the body context (desktop view outer container) */}
      <div className="min-h-[100dvh] bg-[#EBE7DF] w-full flex justify-center font-sans">
        {/* Mobile-first constraints: fixed max-width, shadows for desktop edges */}
        <div className="w-full max-w-[480px] bg-background min-h-[100dvh] flex flex-col relative shadow-2xl shadow-black/5 overflow-x-hidden">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/guia/:id" component={Guide} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </WouterRouter>
  );
}
