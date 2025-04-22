"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export default function MenuHighlightsSection() {
  const menuItems = [
    {
      title: "Signature Latte",
      description:
        "Our creamy latte, crafted with house-roasted espresso and velvety steamed milk, topped with delicate foam art.",
      image: "/source/SignatureLatte.jpg",
    },
    {
      title: "Artisan Croissant",
      description:
        "Flaky, buttery croissants baked fresh daily, perfect with a cup of our signature coffee.",
      image: "/source/ArtisanCroissant.jpg",
    },
    {
      title: "Seasonal Cold Brew",
      description:
        "Smooth, refreshing cold brew infused with seasonal flavors, served over ice for a perfect pick-me-up.",
      image: "/source/SeasonalColdBrew.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-cover bg-center">
      <div className="absolute inset-0 " />
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12">
          Menu Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur-sm transition-transform duration-300 hover:scale-110 "
            >
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-2xl text-primary mt-4">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-neutral-400 ">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
