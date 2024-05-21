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
        <Card
          car_id={1}
          car_name="TESLA MODEL S P100D"
          car_color="Grey"
          car_desc="2nd hand, 14.920km"
          car_img_src="https://i0.shbdn.com/photos/08/57/75/x5_1132085775832.jpg"
          car_type="Sedan"
          car_value={130.432}
          car_year={2017}
        />
        <Card
          car_id={2}
          car_name="VOLKSWAGEN POLO"
          car_color="White"
          car_desc="2nd hand, clean, 90.000km"
          car_img_src="https://i0.shbdn.com/photos/61/62/72/x5_1115616272v3r.jpg"
          car_type="Sport"
          car_value={19.099}
          car_year={2016}
        />
        <Card
          car_id={3}
          car_name="RANGE ROVER EVOQUE"
          car_color="White"
          car_desc="From doctor, not even smoke in the car, 109.619km"
          car_img_src="https://i0.shbdn.com/photos/60/22/02/x5_1131602202omt.jpg"
          car_type="SUV"
          car_value={66.769}
          car_year={2015}
        />
        <Card
          car_id={4}
          car_name="AUDI SEDAN S5"
          car_color="White"
          car_desc="2nd hand, 72.000km"
          car_img_src="https://i0.shbdn.com/photos/43/64/18/x5_11694364180ew.jpg"
          car_type="Sport"
          car_value={82.297}
          car_year={2013}
        />
        <Card
          car_id={5}
          car_name="FORD RANGER F-150"
          car_color="Grey"
          car_desc="1st hand"
          car_img_src="https://i0.shbdn.com/photos/59/16/00/x5_11695916000h1.jpg"
          car_type="SUV"
          car_value={64.284}
          car_year={2021}
        />
        <Card
          car_id={6}
          car_name="PEUGEOT 3008 GT LINE"
          car_color="Grey"
          car_desc="131.000km, 5 doors, 4x2"
          car_img_src="https://i0.shbdn.com/photos/65/29/57/x5_1117652957jm1.jpg"
          car_type="SUV"
          car_value={38.909}
          car_year={2016}
        />
        <Card
          car_id={7}
          car_name="AUDI A5"
          car_color="Blue"
          car_desc="Automatic gear, 82.794km"
          car_img_src="https://i0.shbdn.com/photos/39/32/45/x5_1128393245kh2.jpg"
          car_type="Sport"
          car_value={76.396}
          car_year={2018}
        />
        <Card
          car_id={8}
          car_name="VOLKSWAGEN VW CC"
          car_color="White"
          car_desc="168.000km, Automatic gear, as good as new"
          car_img_src="https://i0.shbdn.com/photos/34/93/25/x5_1111349325vm6.jpg"
          car_type="Executive"
          car_value={30744}
          car_year={2014}
        />
      </div>

      <PageLinks page_number={parseInt(params.page_number)} />
    </main>
  );
}
