import performanceImg from '/public/performance.jpg';
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
      <Hero 
        imgSrc={performanceImg} 
        imgAlt="welding" 
        title="We serve high performance applications"/>
  );
}
