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
    <section>
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl text-neutral-100 text-center mb-12">
          Visit Us
        </h2>
        <Card className="bg-neutral-900 backdrop-blur-sm py-12 transition-transform duration-300 hover:scale-[1.02]">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl text-neutral-100">
              Find Bliss Café
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-neutral-300">
              Join us for a cup of coffee in our cozy haven
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/source/map-placeholder.jpg"
                alt="Bliss Café Location"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-base md:text-lg text-neutral-200 mb-4 text-justify">
                <span className="font-bold">Bliss Café</span> is located at the
                heart of the city, ready to welcome you with warmth and flavor.
              </p>
              <p className="text-base md:text-lg text-neutral-200 mb-4 text-justify">
                <span className="font-bold">Address:</span> 123 Coffee Lane,
                Downtown, CA 90210
              </p>
              <p className="text-base md:text-lg text-neutral-200 mb-4 text-justify">
                <span className="font-bold">Hours:</span> Mon-Fri: 7 AM - 7 PM,
                Sat-Sun: 8 AM - 6 PM
              </p>
              <p className="text-base md:text-lg text-neutral-200 mb-6 text-justify">
                <span className="font-bold">Contact:</span> (555) 123-4567 |
                info@blisscafe.com
              </p>
              <Button
                className="bg-amber-800 text-neutral-100 hover:bg-amber-700 transition-colors"
                asChild
              >
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
