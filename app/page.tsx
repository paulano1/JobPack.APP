
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Landing/Navbar";
import { HowItWorks } from "@/components/Landing/How-it-works";
import {Hero } from "@/components/Landing/Hero";
import { HeroCards } from "@/components/Landing/Hero-cards";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AuroraBackground } from "@/components/ui/aurora-background";


// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// };

export default function AuthenticationPage() {
  return (
    <>

    <Navbar />
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    {/* <AuroraBackground  > */}
   
    <Hero />
    <HowItWorks />
    
    {/* </AuroraBackground> */}
    </div>
    </>
  );
}
