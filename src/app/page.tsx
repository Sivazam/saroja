"use client";

import { Suspense } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteHeader } from "@/components/site-header";
import { FloatingCTA } from "@/components/floating-cta";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Impact } from "@/components/sections/impact";
import { Foundation } from "@/components/sections/foundation";
import { Voices } from "@/components/sections/voices";
import { Events } from "@/components/sections/events";
import { Gallery } from "@/components/sections/gallery";
import { Connect } from "@/components/sections/connect";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SiteHeader />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Journey />
        <Impact />
        <Foundation />
        <Voices />
        <Events />
        <Gallery />
        <Connect />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
