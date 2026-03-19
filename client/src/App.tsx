/* ============================================================
   ORION RACING — App Router
   Routes: Inicio, Nuestro Auto, Iniciativas, Equipo, Partners
   Design: Dark Precision Engineering
   ============================================================ */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NuestroAuto from "./pages/NuestroAuto";
import Iniciativas from "./pages/Iniciativas";
import Equipo from "./pages/Equipo";
import Partners from "./pages/Partners";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nuestro-auto" component={NuestroAuto} />
        <Route path="/iniciativas" component={Iniciativas} />
        <Route path="/equipo" component={Equipo} />
        <Route path="/partners" component={Partners} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
