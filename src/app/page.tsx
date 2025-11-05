// import Hero from "@/components/Hero";
// import Professional from "@/components/Professional";
// import Hobbies from "@/components/Hobbies";
import WeddingCountdown from "@/components/WeddingCountdown";
// import WeddingPlanner from "@/components/WeddingPlanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Other sections commented out - focusing on wedding countdown */}
      {/* <Hero /> */}
      {/* <Professional /> */}
      {/* <Hobbies /> */}
      <WeddingCountdown />
      {/* <WeddingPlanner /> */}
    </div>
  );
}
