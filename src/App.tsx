import React from "react";
import { Button, Card, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { Gallery } from "./components/gallery";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}