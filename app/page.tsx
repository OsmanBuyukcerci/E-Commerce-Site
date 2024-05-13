import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <SearchBar />

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
    </main>
  );
}
