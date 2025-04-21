"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-18 relative bg-cover bg-center">
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <Card className="bg-backgroud backdrop-blur-sm  px-10 py-10">
          <CardHeader className="">
            <CardTitle className="text-3xl md:text-4xl ">
              Welcome to,{" "}
              <span className="text-primary font-bold">Bliss Café</span>
            </CardTitle>
            <CardDescription className="text-base font-semibold md:text-lg text-neutral-500">
              A cozy haven for coffee lovers, blending passion and flavor
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <p className="text-lg md:text-xl mb-6 text-neutral-200">
              <span className="font-bold">BLISS CAFÉ</span>, where passion for
              coffee meets a cozy ambiance. Established with a love for the rich
              aroma and flavors of freshly brewed coffee, we take pride in
              crafting a delightful experience for coffee enthusiasts. Our
              journey began with a simple goal: to create a haven for those
              seeking a moment of respite, accompanied by the perfect cup of
              coffee.
            </p>
            <p className="text-base md:text-base text-neutral-200  mx-auto">
              At Bliss Café, we believe in creating moments of joy with every
              sip. Our carefully sourced beans, cozy ambiance, and friendly
              staff make us more than just a coffee shop—we’re a place where
              memories are made. Join us to experience the warmth and flavor
              that define Bliss Café.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
