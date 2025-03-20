
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout noFooter={true}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 animate-fade-in">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Oops! Page not found
        </p>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
