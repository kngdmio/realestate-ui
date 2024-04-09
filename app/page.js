"use client";
import * as React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search, CheckCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Autoplay from "embla-carousel-autoplay";
import { useEmblaCarousel } from "embla-carousel-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const benefits = [
  "Great Commission Splits",
  "Weekly Training/Coaching",
  "Marketing Support",
  "Office Assistants",
  "Casual Office Vibe",
  "Tech Driven Environment",
];

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

      {/* Join Our Team */}
      <section className="px-4 my-20 max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Meet Our Team</h1>
        <p className="text-sm text-gray-500">
          Our Team is made up of over 40 licensed realtors and administrative
          staff.
        </p>
        <Separator className="my-4" />
        {/* Scroll Area here with listings */}

        <div className="w-full">
          <div className="mx-auto flex max-w-2xl flex-col sm:gap-20 py-3 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center ">
            <img
              className="h-96 w-full flex-none rounded-lg object-cover shadow-lg lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="w-full flex-auto">
              <p className="mt-6 text-lg leading-8 text-foreground">
                Join our team and help us build the future of real estate. We're
                looking for talented individuals to help us build the future of
                real estate. If you're passionate about real estate and
                technology, we'd love to hear from you.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-muted-foreground sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none text-black"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Button
                  variant="secondary"
                  href="/careers"
                  className="text-sm font-semibold leading-6 text-blue- hover:text-Primary-foreground-lighter"
                >
                  See our job postings{" "}
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="px-4 my-20 max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Our Clients Rave About Us</h1>
        <p className="text-sm text-gray-500">Here is what they have to say.</p>
        <Separator className="my-4" />
        {/* Scroll Area here with listings */}
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            // If you want to loop the carousel, uncomment below
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 ">
            <CarouselItem className="pl-1 basis-[100%] sm:basis-[100%] ">
              <div className=" ">
                <Card className="py-10 border-none">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                      <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img
                          className="h-12 self-start"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                          alt=""
                        />
                        <figure className="mt-6 sm:mt-10 flex flex-auto flex-col justify-between">
                          <blockquote className="text-lg leading-8 text-gray-900">
                            <p>
                              “Amet amet eget scelerisque tellus sit neque
                              faucibus non eleifend. Integer eu praesent at a.
                              Ornare arcu gravida natoque erat et cursus tortor
                              consequat at. Vulputate gravida sociis enim nullam
                              ultricies habitant malesuada lorem ac. Tincidunt
                              urna dui pellentesque sagittis.”
                            </p>
                          </blockquote>
                          <figcaption className="mt-10 flex items-center gap-x-6">
                            <img
                              className="h-14 w-14 rounded-full bg-gray-50"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="text-base">
                              <div className="font-semibold text-gray-900">
                                Judith Black
                              </div>
                              <div className="mt-1 text-gray-500">
                                CEO of Tuple
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <img
                          className="h-12 self-start"
                          src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                          alt=""
                        />
                        <figure className="mt-6 sm:mt-10 flex flex-auto flex-col justify-between">
                          <blockquote className="text-lg leading-8 text-gray-900">
                            <p>
                              “Excepteur veniam labore ullamco eiusmod. Pariatur
                              consequat proident duis dolore nulla veniam
                              reprehenderit nisi officia voluptate incididunt
                              exercitation exercitation elit. Nostrud veniam
                              sint dolor nisi ullamco.”
                            </p>
                          </blockquote>
                          <figcaption className="mt-10 flex items-center gap-x-6">
                            <img
                              className="h-14 w-14 rounded-full bg-gray-50"
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="text-base">
                              <div className="font-semibold text-gray-900">
                                Joseph Rodriguez
                              </div>
                              <div className="mt-1 text-gray-500">
                                CEO of Reform
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <Separator orientation="vertical" />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-[100%] sm:basis-[100%] hidden sm:static">
              <div className=" ">
                <Card className="py-10 border-none">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                      <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img
                          className="h-12 self-start"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                          alt=""
                        />
                        <figure className="mt-6 sm:mt-10 flex flex-auto flex-col justify-between">
                          <blockquote className="text-lg leading-8 text-gray-900">
                            <p>
                              “Amet amet eget scelerisque tellus sit neque
                              faucibus non eleifend. Integer eu praesent at a.
                              Ornare arcu gravida natoque erat et cursus tortor
                              consequat at. Vulputate gravida sociis enim nullam
                              ultricies habitant malesuada lorem ac. Tincidunt
                              urna dui pellentesque sagittis.”
                            </p>
                          </blockquote>
                          <figcaption className="mt-10 flex items-center gap-x-6">
                            <img
                              className="h-14 w-14 rounded-full bg-gray-50"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="text-base">
                              <div className="font-semibold text-gray-900">
                                Judith Black
                              </div>
                              <div className="mt-1 text-gray-500">
                                CEO of Tuple
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <img
                          className="h-12 self-start"
                          src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                          alt=""
                        />
                        <figure className="mt-6 sm:mt-10 flex flex-auto flex-col justify-between">
                          <blockquote className="text-lg leading-8 text-gray-900">
                            <p>
                              “Excepteur veniam labore ullamco eiusmod. Pariatur
                              consequat proident duis dolore nulla veniam
                              reprehenderit nisi officia voluptate incididunt
                              exercitation exercitation elit. Nostrud veniam
                              sint dolor nisi ullamco.”
                            </p>
                          </blockquote>
                          <figcaption className="mt-10 flex items-center gap-x-6">
                            <img
                              className="h-14 w-14 rounded-full bg-gray-50"
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="text-base">
                              <div className="font-semibold text-gray-900">
                                Joseph Rodriguez
                              </div>
                              <div className="mt-1 text-gray-500">
                                CEO of Reform
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <Separator orientation="vertical" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
