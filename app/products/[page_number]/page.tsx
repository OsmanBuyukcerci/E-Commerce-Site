"use client";

import PageLinks from "@/app/components/PageLinks";
import Card from "../../components/Card";

export default function Home({ params }: any) {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center relative">
      {/* Tags */}
      <div className="w-screen flex justify-center gap-6 my-4 *:bg-secondary text-white *:p-2 *:rounded-lg *:transition *:ease-in-out *:delay-75">
        <a href="#" className="hover:bg-primary">
          Sedan
        </a>
        <a href="#" className="hover:bg-primary">
          Hatchback
        </a>
        <a href="#" className="hover:bg-primary">
          Coupe
        </a>
        <a href="#" className="hover:bg-primary">
          Convertible
        </a>
        <a href="#" className="hover:bg-primary">
          SUV
        </a>
        <a href="#" className="hover:bg-primary">
          Truck
        </a>
        <a href="#" className="hover:bg-primary">
          Van
        </a>
        <a href="#" className="hover:bg-primary">
          Sport
        </a>
        <a href="#" className="hover:bg-primary">
          Electric
        </a>
        <a href="#" className="hover:bg-primary">
          Hybrid
        </a>
        <a href="#" className="hover:bg-primary">
          Off-road
        </a>
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-8 mb-8 p-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <PageLinks page_number={parseInt(params.page_number)} />
    </main>
  );
}
