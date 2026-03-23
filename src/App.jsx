import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./theme/ThemeProvider";
import { Landing } from "./pages/Landing";
import { Archive } from "./pages/Archive";
import { ProductDetailPage } from "./pages/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";

const routeConfig = [
  { index: true, element: <Landing /> },
  { path: "archive", element: <Archive /> },
  { path: "product/:slug", element: <ProductDetailPage /> },
  { path: "*", element: <NotFound /> },
];

function AnimatedRoutes() {
  const location = useLocation();
  const element = useRoutes(routeConfig);

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>{element}</PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
