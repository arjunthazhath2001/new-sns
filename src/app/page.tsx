import ContactSocial from "@/components/ContactSocial";
import DesignThinking from "@/components/DesignThinking";
import HeroSection from "@/components/HeroSection";
import TrackRecord from "@/components/TrackRecord";
import Gallery from "@/components/Gallery";
import RecInstitutes from "@/components/RecInstitutes";
// import SuccessStories from "@/components/SuccessStories";
import Institutions from "@/components/Institutions";


export default function Home() {
  return (
      <div className="bg-transparent dark:text-white flex flex-col items-center justify-center">
        <HeroSection/>
        <Gallery/>
        <TrackRecord/>
        <DesignThinking/>
        <Institutions/>
        {/* <SuccessStories/> */}
        <RecInstitutes/>
        <ContactSocial/>
      </div>
  );
}
