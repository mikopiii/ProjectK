import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProductPage from "@/pages/product";
import About from "@/pages/about";
import Profile from "@/pages/profile";
import Policies from "@/pages/policies";
import Settings from "@/pages/settings";
import Cart from "@/pages/cart";
import { Layout } from "@/components/layout";
import { CartProvider } from "@/lib/cartContext";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/policies" component={Policies} />
        <Route path="/settings" component={Settings} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
