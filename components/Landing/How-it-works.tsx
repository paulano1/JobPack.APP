import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter , Satellite, GiftIcon } from "lucide-react"

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  
  {
    icon: <Filter />,
    title: "Filter",
    description:
      "Enter specific job keywords, location, and (coming soon) experience level. We’ll notify you via email once we've completed the search for you.",
  },
  {
    icon: <Search />,
    title: "Aggregate",
    description:
    "Our scraper searches LinkedIn, ZipRecruiter, Glassdoor, and Indeed. We aim to integrate Fortune 500 companies' career pages to notify you as soon as new jobs are released. Our scraper runs daily at 8 AM, filtering for new jobs and ofcourse without duplicates."  },
  {
    icon: <Satellite />,
    title: "Tracking(Under Development)",
    description:
      "Soon, you’ll be able to track your job applications and view statistics such as resume-based conversion rates.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Here's a non-exhaustive list of features we offer right now, expect more to come soon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};