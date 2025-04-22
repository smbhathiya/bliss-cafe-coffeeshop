"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VisitUsSection() {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <Card className="bg-background/95 backdrop-blur-md py-12 px-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
          <CardHeader className="text-left">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Visit Us
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-neutral-400 ">
              Join us for a cup of coffee in our cozy haven
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-10 mt-6">
            <div className="md:w-1/2 flex justify-center items-center ">
              <Image
                src="/source/coffeeshop.png"
                alt="Coffee cup"
                width={1365}
                height={1024}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-5">
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                <span className="font-semibold text-primary">Bliss Café</span>{" "}
                is nestled in the heart of the city, ready to welcome you with
                warmth and flavor.
              </p>
              <div className="space-y-3">
                <p className="text-base md:text-lg text-neutral-200 flex items-center gap-2">
                  <span className="font-semibold text-primary">Address:</span>
                  123 Coffee Lane, Downtown, CA 90210
                </p>
                <p className="text-base md:text-lg text-neutral-200 flex items-center gap-2">
                  <span className="font-semibold text-primary">Hours:</span>
                  Mon-Fri: 7 AM - 7 PM, Sat-Sun: 8 AM - 6 PM
                </p>
                <p className="text-base md:text-lg text-neutral-200 flex items-center gap-2">
                  <span className="font-semibold text-primary">Contact:</span>
                  (555) 123-4567 | info@blisscafe.com
                </p>
              </div>
              <Button
                className="  font-semibold py-3 px-6 rounded-lg mt-4 w-fit"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
