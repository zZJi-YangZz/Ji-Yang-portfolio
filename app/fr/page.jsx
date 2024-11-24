import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/fr/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Génie Électrique</span>
            <h1 className="h1 mb-6">
              Salut je suis <br /> <span className="text-orange-400">Ji Yang Zhang</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Étudiant motivé en génie électrique avec une expérience pratique dans la mise en page de circuits imprimés, les tests et le débogage de matériel, acquise grâce à de multiples stages. Passionné par les systèmes embarqués, l'IoT et la certification des produits, avec une capacité avérée à relever des défis techniques complexes. Engagé à fournir des solutions d'ingénierie innovantes et fiables.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
              
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-orange-400 px-4 py-2 rounded-md text-lg"
                href="/assets/resume/CV_fr.pdf" // Path to your CV file in the public folder
                download="Ji Yang_CV.pdf" // The name the file will be saved as
              >
                <span className="text-orange-400">Télécharger CV</span>
                <FiDownload className="text-orange-400 text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-orange-400 rounded-full flex justify-center items-center text-orange-400 text-base hover:bg-orange-400 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
