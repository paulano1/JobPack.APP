import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Lightbulb, Linkedin } from "lucide-react";
import { LampCeiling, LightbulbIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { PinContainer } from "../ui/3d-pin";





export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      {/* <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe React</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This landing page is awesome!</CardContent>
      </Card> */}

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHDIX4lt_Pg0g/profile-displayphoto-shrink_400_400/0/1684454656080?e=1720656000&v=beta&t=HCOJtAn9chwvBCLmmT2_glHoJ4zJbNRgdBpCXQhul20"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Anomitro Paul</CardTitle>
          <CardDescription className="font-normal text-primary">
            Comp Sci @ Drexel University
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Engineer at heart
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/paulano1"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/anomitropaul"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      {/* */}

      {/* Service */}
      {/* <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
          <Lightbulb />
          </div>
          <div>
            <CardTitle>Story behind this</CardTitle>
            <CardDescription className="text-md mt-2">
            </CardDescription>
          </div>
        </CardHeader>
      </Card> */}
    </div>
  );
};