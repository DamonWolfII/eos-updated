import About from "@/components/About";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Map from "@/components/Map";
import Services from "@/components/Services/Services";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Intro/>
      <About/>
      <Services/>
      <Team/>
      <Map/>
      <Footer/>
    </main>
  );
}
