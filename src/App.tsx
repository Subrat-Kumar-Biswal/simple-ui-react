
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/history" element={<div className="p-8 text-center">History Page - Coming Soon</div>} />
          <Route path="/calendar" element={<div className="p-8 text-center">Calendar Page - Coming Soon</div>} />
          <Route path="/appointments" element={<div className="p-8 text-center">Appointments Page - Coming Soon</div>} />
          <Route path="/statistics" element={<div className="p-8 text-center">Statistics Page - Coming Soon</div>} />
          <Route path="/chat" element={<div className="p-8 text-center">Chat Page - Coming Soon</div>} />
          <Route path="/support" element={<div className="p-8 text-center">Support Page - Coming Soon</div>} />
          <Route path="/settings" element={<div className="p-8 text-center">Settings Page - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
