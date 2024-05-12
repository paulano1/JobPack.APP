import { Button, buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./Hero-cards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              JobPack(Alpha)
            </span>{" "}
          </h1>{" "}
 
          <h2 className="inline">
            {/* <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "} */}
        Always Free, No Ads but only jobs in USA 
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
    It is common knowledge that job applications have become a numbers game, and searching through hundreds of job boards is personally exhausting. Additionally, I've seen a trend where companies close job postings within a week or two. This motivated me to create a tool that notifies me as soon as a job is posted. This project is starting as a personal weekend project, but if others find it useful, I plan to dedicate more time to it and make it open-source.
</p>
<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
    We aggregate jobs from the internet for you
</p>
<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
    This is the alpha version of the app, so expect some bugs and incomplete features. We're currently limiting access to <strong>50</strong> users. I put this together in 24 hours, so your patience is appreciated. Upcoming features, prioritized as follows, include:
</p>
<ul className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 list-disc list-inside">
    <li><strong>Application Tracking and Statistics:</strong> Soon, you’ll be able to view resume-based conversion rates and other relevant statistics.</li>
    <li><strong>Accuracy of Job Listings:</strong> Currently, we rely on JobSpy for job scraping, which isn't ideal. I'm developing a new scraper from scratch, aiming for significantly improved search results within two weeks.</li>
</ul>



        <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/signin">
                <Button className="w-full md:w-1/3">Get Started</Button>
            </Link>
        </div>
      </div>
      
            <HeroCards />
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};