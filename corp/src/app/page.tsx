import Image from "next/image";
import homeImg from '/public/home.jpg';
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero imgSrc={homeImg} imgAlt="Car Factory" title="Professional Cloud Hosting"/>
      <div>
        <div>Home Page</div>
      </div>
    </>
  );
}
