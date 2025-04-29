"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const product_one = [
  {
    title: `Polypod${String.fromCharCode(8482)}`,
    description: "Ultra high density AI optimized data center pod",
  },
  {
    title: `Polypod${String.fromCharCode(8482)} Hive`,
    description: "Scalable, prefabricated, modular Edge AI solution",
  },
  {
    title: `Polypod${String.fromCharCode(8482)} Go`,
    description: "Privately hosted prefabricated plug-and-go Edge AI solution",
  },
];

const product_two = [
  {
    title: `Polyrack${String.fromCharCode(8482)}`,
    description: "Liquid cool server rack to power AI inference workloads",
  },
];

const product_three = [
  {
    title: `Polycloud${String.fromCharCode(8482)}`,
    description:
      '"AI factory" cloud infrastructure to turn GPU compute into tokens',
  },
];

export default function ProductsOverview() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto text-center py-10 md:py-20">
        <Badge className="font-normal mb-4 text-themeBlue bg-themeBlue/5 hover:bg-themeBlue/10">
          Products Overview
        </Badge>
        <h2 className="mb-4">Products Overview</h2>

        <div className="relative w-fit max-w-6xl mx-auto">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center gap-12 mb-12">
            {[product_one, product_two, product_three].map(
              (products, index) => (
                <div key={index} className="relative group w-fit">
                  <Image
                    src={`/overview-prod-${index + 1}.png`}
                    className="border rounded-full mx-auto border-white/10 transition-transform duration-300 group-hover:scale-105 w-[150px] h-[150px]"
                    alt={`Product ${index + 1}`}
                    width={150}
                    height={150}
                  />
                  <Card className="mt-4 w-[300px] rounded-none p-0 pt-4">
                    <CardContent className="p-0">
                      <div className="space-y-3">
                        {products.map((product) => (
                          <div
                            key={product.title}
                            className="text-left space-y-1 border-b pb-4 px-4"
                          >
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription>
                              {product.description}
                            </CardDescription>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            )}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex relative w-fit mx-auto items-center justify-center mb-36 pt-5">
              <div
                className="relative group w-fit"
                onMouseEnter={() => setHoveredProduct(0)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Image
                  src="/overview-prod-1.png"
                  className="border rounded-full mx-auto border-white/10 transition-transform duration-300 group-hover:scale-105"
                  alt="Product 1"
                  width={218}
                  height={218}
                />
                <Card className="absolute top-0 left-full ml-8 w-[420px] rounded-none p-0 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {product_one.map((product) => (
                        <div
                          key={product.title}
                          className="text-left space-y-1 border-b pb-4 px-4"
                        >
                          <CardTitle>{product.title}</CardTitle>
                          <CardDescription>
                            {product.description}
                          </CardDescription>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex relative w-fit mx-auto items-center justify-center gap-40">
              <div
                className="relative group w-fit"
                onMouseEnter={() => setHoveredProduct(1)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Image
                  src="/overview-prod-2.png"
                  className="border rounded-full mx-auto border-white/10 transition-transform duration-300 group-hover:scale-105"
                  alt="Product 2"
                  width={218}
                  height={218}
                />
                <Card className="absolute right-full top-10 mr-8 w-[420px] rounded-none p-0 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {product_two.map((product) => (
                        <div
                          key={product.title}
                          className="text-left space-y-1 border-b pb-4 px-4"
                        >
                          <CardTitle>{product.title}</CardTitle>
                          <CardDescription>
                            {product.description}
                          </CardDescription>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                className="relative group w-fit"
                onMouseEnter={() => setHoveredProduct(2)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Image
                  src="/overview-prod-3.png"
                  className="border rounded-full mx-auto border-white/10 transition-transform duration-300 group-hover:scale-105"
                  alt="Product 3"
                  width={218}
                  height={218}
                />
                <Card className="absolute left-full top-10 ml-8 w-[420px] rounded-none p-0 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CardContent className="p-0">
                    <div className="space-y-3">
                      {product_three.map((product) => (
                        <div
                          key={product.title}
                          className="text-left space-y-1 border-b pb-4 px-4"
                        >
                          <CardTitle>{product.title}</CardTitle>
                          <CardDescription>
                            {product.description}
                          </CardDescription>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <ConnectLine
              className="absolute w-56 right-[70px] bottom-[48%] rotate-[55deg]"
              startDotGlowing={hoveredProduct === 0}
              endDotGlowing={hoveredProduct === 2}
            />
            <ConnectLine
              className="absolute w-56 left-[70px] bottom-[48%] -rotate-[55deg]"
              startDotGlowing={hoveredProduct === 0}
              endDotGlowing={hoveredProduct === 1}
            />
            <ConnectLine
              className="absolute w-48 bottom-20 left-1/2 -translate-x-1/2"
              startDotGlowing={hoveredProduct === 1}
              endDotGlowing={hoveredProduct === 2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectLine({
  className,
  startDotGlowing = false,
  endDotGlowing = false,
}: {
  className?: string;
  startDotGlowing?: boolean;
  endDotGlowing?: boolean;
}) {
  return (
    <div
      className={cn("flex items-center transition-all duration-300", className)}
    >
      <div
        className={cn(
          "w-[25px] h-[25px] border rounded-full bg-background transition-all duration-300",
          startDotGlowing
            ? "border-themeBlue shadow-glow pulse-glow bg-themeBlue/10"
            : "border-white/10"
        )}
      ></div>
      <div
        className={cn(
          "w-[80%] border-b transition-all duration-300",
          startDotGlowing || endDotGlowing
            ? "border-themeBlue/30"
            : "border-white/10"
        )}
      ></div>
      <div
        className={cn(
          "w-[25px] h-[25px] border rounded-full bg-background transition-all duration-300",
          endDotGlowing
            ? "border-themeBlue shadow-glow pulse-glow bg-themeBlue/10"
            : "border-white/10"
        )}
      ></div>
    </div>
  );
}
