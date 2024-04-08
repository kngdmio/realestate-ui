import * as React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-4 h-[50vh] w-screen bg-secondary mx-auto">
        <div className=" sm:max-w-screen-xl sm:mx-auto h-full content-center text-left ">
          <h2 className="font-bold text-4xl leading-snug ">Find a Home.</h2>
          <h2 className="font-bold text-4xl leading-snug ">
            Close Confidently.
          </h2>
          <p className="my-2">Let our experts lead the way. </p>

          <div className=" sm:flex w-full">
            <form className=" w-full my-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-[12px] h-5 w-5  text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="City, Neighborhood, Address, Zip, or MLS#"
                  className="sm:w-[40%] appearance-none bg-background pl-10 shadow-none text-sm h-12"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="px-4 my-20 max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Featured Listings</h1>
        <p className="text-sm text-gray-500">Featured Listings.</p>
        <Separator className="my-4" />
        {/* Scroll Area here with listings */}

        <Carousel
          className="w-full "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-3/4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Featured Listings */}
      <section className="px-4 my-20 max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Meet Our Team</h1>
        <p className="text-sm text-gray-500">
          Our Team is made up of over 40 licensed realtors.
        </p>
        <Separator className="my-4" />
        {/* Scroll Area here with listings */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          blandit ante, vitae efficitur ex. Cras aliquet pulvinar nunc, sed
          ultrices est feugiat et. In hac habitasse platea dictumst. Nunc quis
          lectus quis massa vehicula hendrerit. Suspendisse varius odio quam,
          sed gravida leo pulvinar at. Sed eleifend suscipit dolor, in pulvinar
          elit blandit vel. Sed eget facilisis odio. Ut tristique sit amet metus
          vel aliquet. Morbi ultricies ligula in lacus rutrum convallis.
          <br></br>
          Maecenas facilisis neque ut nisi convallis dapibus. Pellentesque nec
          est id justo interdum sollicitudin. Nunc interdum velit eu ligula
          gravida ultricies. In ullamcorper, orci quis sodales facilisis, nisl
          libero pellentesque nisl, et aliquet metus leo vitae erat. Nulla orci
          tellus, iaculis vel fermentum quis, pharetra aliquet arcu. Sed
          tincidunt tincidunt ex eu pulvinar. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis posuere est ligula, ut porta ante
          viverra non. Etiam mollis varius sagittis.
        </p>
      </section>

      {/* Featured Listings */}
      <section className="px-4 my-20 max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Our Clients Rave About Us</h1>
        <p className="text-sm text-gray-500">Here is what they have to say.</p>
        <Separator className="my-4" />
        {/* Scroll Area here with listings */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          blandit ante, vitae efficitur ex. Cras aliquet pulvinar nunc, sed
          ultrices est feugiat et. In hac habitasse platea dictumst. Nunc quis
          lectus quis massa vehicula hendrerit. Suspendisse varius odio quam,
          sed gravida leo pulvinar at. Sed eleifend suscipit dolor, in pulvinar
          elit blandit vel. Sed eget facilisis odio. Ut tristique sit amet metus
          vel aliquet. Morbi ultricies ligula in lacus rutrum convallis.
          <br></br>
          Maecenas facilisis neque ut nisi convallis dapibus. Pellentesque nec
          est id justo interdum sollicitudin. Nunc interdum velit eu ligula
          gravida ultricies. In ullamcorper, orci quis sodales facilisis, nisl
          libero pellentesque nisl, et aliquet metus leo vitae erat. Nulla orci
          tellus, iaculis vel fermentum quis, pharetra aliquet arcu. Sed
          tincidunt tincidunt ex eu pulvinar. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis posuere est ligula, ut porta ante
          viverra non. Etiam mollis varius sagittis.
        </p>
      </section>
    </main>
  );
}
