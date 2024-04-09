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

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className=" h-[50vh] sm:h-[30rem] bg-foreground/50 w-screen  mx-auto">
        <img
          className="absolute h-[50vh] sm:h-[30rem]  object-cover object-center w-full -z-10"
          src={`https://images.unsplash.com/photo-1634827022377-33f832dadcd8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width={500}
          height={500}
          alt="Picture of the author"
        />{" "}
        <div className="px-4 sm:px-10  mx-auto   max-w-screen-xl  h-full content-center text-center ">
          <h2 className="font-bold text-2xl sm:text-5xl tracking-tight leading-snug text-white text-shadow shadow-black">
            Find A Home, Make An Offer. <br />
            Close With Confidence.
          </h2>

          <p className="my-2 text-base sm:w-[36rem] m-auto text-white text-shadow shadow-black">
            A full-service brokerage serving the local area and surrounding
            areas for the last 3 decades. Buy, Sell, and Rent with confidence.
          </p>

          <div className=" sm:flex w-full">
            <form className=" w-full my-4 ">
              {/* Center Aligned Search
               */}
              <div className="relative ">
                <Search className="absolute left-[3%] sm:left-[31%] top-[14px] h-5 w-5  text-black/40" />
                <Input
                  type="search"
                  placeholder="City, Neighborhood, Address, Zip, or MLS#"
                  className="sm:w-[40%] m-auto appearance-none bg-white pl-10 shadow-none text-sm h-12"
                />
              </div>

              {/* Left Aligned Search */}
              {/* <div className="relative">
                <Search className="absolute left-2.5 top-[12px] h-5 w-5  text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="City, Neighborhood, Address, Zip, or MLS#"
                  className="sm:w-[40%] appearance-none bg-background pl-10 shadow-none text-sm h-12"
                />
              </div> */}
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
            // If you want to loop the carousel, uncomment below
            // loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-11/12 md:basis-1/4"
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
            <CarouselItem className="pl-1 basis-11/12 md:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">
                      Browse All Listings
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
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
