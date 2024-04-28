import scaleImg from '/public/scale.jpg';
import Hero from "@/components/Hero";

export default function ScalePage() {
  return (
      <Hero 
        imgSrc={scaleImg} 
        imgAlt="steel factory" 
        title="Super high reliability hosting"/>
  );
}
