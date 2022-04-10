import Image from "next/image";

import { NAZARIO_SYSTEM_ITEMS } from "constants/general";

import Divider from "components/Divider";
import NazarioSystemCard from "components/NazarioSystemCard";

import bannerRonaldo from "assets/images/bannerRonaldo.webp";
import ronaldoBalonDeOro from "assets/images/ronaldoBalonDeOro.webp";
import ronaldoComunista from "assets/images/ronaldoComunista.webp";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <Image
        src={bannerRonaldo}
        alt="Ronaldo con el Barsa"
        className="rounded"
      />
      <h1 className="font-sans text-2xl mt-2 font-bold">
        Guia Gastronomica Ronaldo Nazario
      </h1>
      <Divider />

      <p className="font-sans">
        ¿Te aprietan los bolsillos a final de mes y no sabes dónde invertir tus
        cuatro cochinos euros para tomarte unas cervezas? O, ¿quizás andás
        cansado de ir al mismo lugar de siempre, dándote la sensación de que ya
        te confundes con el mobilario del propio bar? Nosotros, Diego Fernández
        y Miguel de Mora, amantes de la cerveza barata y de las tapas ricas,
        también compartimos estas inquietudes. Por ello, hemos elaborado un
        riguroso sistema con el que calificar los bares de este nuestro querido
        Aranjuez. Esto es una lista abierta, de la misma manera que el
        conocimiento no ocupa lugar, tampoco cesan de abrir nuevos bares sujetos
        a que sean reseñables.
      </p>

      <Link href="/list">Ir a la Lista</Link>

      <h2 className="font-sans text-lg font-bold mt-12">
        ¿Por qué Ronaldo Nazario?
      </h2>

      <Divider />

      <p className="font-sans">
        No hay una razón de peso (je je), fue lo primero que se nos ocurrió,
        podía haberse llamado guía El bicho siuuuu, ankara messi o las mañanas
        de jiménez losantos. Dicho esto, mira qué feliz sale siempre Ronaldo en
        las fotos, con ese optimismo afrontamos la vida.
      </p>

      <div className="flex justify-center mt-8">
        <Image src={ronaldoBalonDeOro} alt="Ronaldo con el balon de oro" />
      </div>

      <h2 className="font-sans text-lg font-bold mt-12">
        ¿Cómo funciona el sistema Nazario?
      </h2>

      <Divider />

      <p className="font-sans">
        Lo hemos basado en los siguientes puntos claves para valorar nuestros
        bares:
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        {NAZARIO_SYSTEM_ITEMS.map((item) => (
          <NazarioSystemCard
            key={item.position}
            position={item.position}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-12">
        <Image src={ronaldoComunista} alt="Ronaldo visitando la urss" />
      </div>
    </div>
  );
};

export default AboutPage;
