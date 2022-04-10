import Image from "next/image";
import Link from "next/link";

import Divider from "components/Divider";
import BarCard from "components/BarCard";

import bannerRonaldo from "assets/images/bannerRonaldo.webp";

const HomePage = ({ bars }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-8 mb-16 px-2">
      <div>
        <Image src={bannerRonaldo} alt="as" className="rounded " />
        <div className="flex flex-col justify-between text-center bg-gray-200 py-4">
          <Link href="/about">Descubre la Guia Nazario</Link>
        </div>
      </div>

      <Divider tailwindClasses="mt-4" />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 ">
        {bars.map((bar) => (
          <BarCard key={bar.id} bar={bar} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
