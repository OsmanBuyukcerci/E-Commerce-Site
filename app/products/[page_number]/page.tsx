import PageLinks from "@/app/components/PageLinks";
import Card from "../../components/Card";

export default function Home({ params }: any) {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center relative">
      {/* Products */}
      <div className="grid grid-cols-4 gap-8 m-4">
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
