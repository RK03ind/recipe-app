import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      window.alert(error);
    },
  }),
});

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
