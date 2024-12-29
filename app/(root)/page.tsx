import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">
          Ideas to Impact! <br /> Showcase Your Projects or Launch Your Startups
        </h1>
        <p className="sub-heading">
          Get noticed by your projects or get your startup noticed by the world
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
