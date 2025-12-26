import { Helmet } from "react-helmet-async";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Saranya | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Saranya - a passionate software developer specializing in modern web applications. Explore my skills and get in touch for collaboration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
