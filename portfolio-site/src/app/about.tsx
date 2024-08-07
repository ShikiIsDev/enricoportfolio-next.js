"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./globals.css";

const About = () => {
  return (
    <Card className="max-w-lg mx-auto my-4 p-8">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <p>Skills:</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 text-center md:text-right">
            <h2>Design</h2>
            <ul>
                <li>Drawing</li>
                <li>Web Design</li>
            </ul>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2>Programming</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Svelte.js</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
