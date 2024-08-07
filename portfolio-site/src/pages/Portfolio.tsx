"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./globals.css";

const images = [
  { src: "/ellen.jpg", alt: "Image 1" },
  { src: "/luffy.jpg", alt: "Image 2" },
  { src: "/pawa.jpg", alt: "Image 3" },
  { src: "/app1.jpg", alt: "Image 4" },
  { src: "/WordpressSite.PNG", alt: "Image 5" },
  { src: "/ARcard.jpg", alt: "Image 6" },
];

const Portfolio = () => {
  return (
    <Card className="max-w-4xl mx-auto my-4 p-8">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <p>Portfolio</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
