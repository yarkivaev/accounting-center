import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import Home from "./pages/Home";
import Accounting from "./pages/Accounting";
import Laboratory from "./pages/Laboratory";
import Legal from "./pages/Legal";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function Router() {
  return (
    <WouterRouter base="/accounting-center">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/accounting" component={Accounting} />
        <Route path="/laboratory" component={Laboratory} />
        <Route path="/legal" component={Legal} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
