import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const properties = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    description: "2 beds • 2 baths • 1200 sqft",
    imageUrl: "/assets/placeholders/property1.jpg",
  },
  {
    id: 2,
    title: "Cozy Cottage in the Countryside",
    description: "3 beds • 2 baths • 1500 sqft",
    imageUrl: "/assets/placeholders/property2.jpg",
  },
  {
    id: 3,
    title: "Luxury Villa with Ocean View",
    description: "5 beds • 4 baths • 3000 sqft",
    imageUrl: "/assets/placeholders/property3.jpg",
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Explore Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              description={property.description}
              imageUrl={property.imageUrl}
              onClick={() => alert(`Viewing details for ${property.title}`)}
            >
              <div className="mt-4 flex gap-4">
                <Button
                  label="Book Now"
                  onClick={() => alert(`Booking ${property.title}`)}
                />
                <Button
                  label="Details"
                  onClick={() => alert(`Viewing details for ${property.title}`)}
                  style={{ backgroundColor: "#6c757d" }}
                />
              </div>
            </Card>
          ))}
        </div>
      </main>
      <footer className="row-start-3 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ALX Listing App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}