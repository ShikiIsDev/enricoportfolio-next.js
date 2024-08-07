"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./globals.css";

const contact = () => {
  return (
    <Card className="max-w-lg mx-auto my-4 p-8">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <p>Contact</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <Image
          src="/Enrico.jpg"
          alt="Enrico"
          width="250"
          height="250"
          className="w-32 h-32 md:w-64 md:h-64 rounded-full"
        />
        <p className="flex-1 text-center md:text-left">
          email: 21024483@myrp.edu.sg
        </p>
      </CardContent>
    </Card>
  );
};

export default contact;
