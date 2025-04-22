"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      quote:
        "Bliss Café is my go-to spot for a cozy coffee break. The latte art is amazing, and the staff always make me feel at home!",
    },
    {
      name: "James T.",
      quote:
        "The seasonal cold brew is a game-changer. Love the vibe and how they source their beans ethically.",
    },
    {
      name: "Emily R.",
      quote:
        "Perfect place to unwind or catch up with friends. The croissants are to die for!",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-cover bg-center">
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl text-neutral-100 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="relative overflow-hidden">
          {/* Left gradient */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent z-20" />
          {/* Right gradient */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent z-20" />
          <div className="flex animate-infinite-scroll gap-6 p-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-neutral-900 backdrop-blur-sm py-12 flex-shrink-0 w-[300px] transition-transform duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-neutral-100">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-neutral-300">
                    Customer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg text-neutral-200 text-justify">
                  &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
