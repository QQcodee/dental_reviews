"use client";

import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/Logo_Dental_Reviews.png";
import {
  ArrowRight,
  Filter,
  Menu,
  MessageCircle,
  MessageCircleMore,
  UserPen,
} from "lucide-react";
import CalendlyPopupWidget from "@/components/CalendlyButton";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-10">
      <header className="w-full h-[110px] border-b border-b-[3px] border-black flex items-center justify-between pr-4">
        <Image src={Logo} alt="logo" className="w-[155px]" />
        <div className="flex items-center gap-4 ">
          <Menu size={32} />
        </div>
      </header>
      <div className=" sm:max-w-[700px]">
        <div className="flex flex-col items-center justify-start pl-8 pr-5">
          <h1 className="text-[27px] font-medium uppercase">
            {" "}
            Aumenta tus reseñas de forma automática y sin esfuerzo
          </h1>
          <h2 className="text-[18px] font-light mb-10">
            Posiciónate por encima de tu competencia en Google y multiplica tus
            ingresos.
          </h2>

          <CalendlyPopupWidget text="50 reviews aseguradas el primer mes" />
        </div>
        <div className="flex flex-col items-start justify-start pl-8 pr-5 mt-10 w-full gap-5">
          <h3 className="font-semibold text-[27px] mb-5 text-center w-full">
            ¿COMO FUNCIONA?
          </h3>

          <div className="flex items-end gap-2">
            <MessageCircleMore size={32} />
            <p className="text-[22px] font-semibold">Mensajes Automaticos</p>
          </div>
          <p className="text-[17px] font-regular text-justify">
            enviaremos solicitudes personalizadas de reseña de forma automática
            a todos tus pacientes, ahorrándote tiempo y esfuerzo. ¡Tus pacientes
            solo tienen que hacer un clic para dejar su reseña!
          </p>

          <div className="flex items-end gap-2">
            <Filter size={32} />
            <p className="text-[22px] font-semibold">Filtrado De Reseñas</p>
          </div>
          <p className="text-[17px] font-regular text-justify">
            recibe solo las mejores reseñas. Nuestro sistema filtra
            automáticamente las reseñas, garantizando que solo las de 4
            estrellas o más lleguen a tu perfil, manteniendo tu puntuación alta
            y positiva.
          </p>
          <div className="flex items-end gap-2">
            <UserPen size={32} />
            <p className="text-[22px] font-semibold">Mensajes personalizados</p>
          </div>
          <p className="text-[17px] font-regular text-justify">
            Siempre incluimos un mensaje y una imagen personalizada para cada
            paciente. Esto hace el proceso más humano, cercano y personalizado,
            lo que aumenta significativamente las probabilidades de recibir una
            reseña positiva.
          </p>
          <CalendlyPopupWidget text="    COMENZAR HOY" />
        </div>

        <div className="flex flex-col items-center justify-start pl-8 pr-5 mt-10 w-full gap-5">
          <h3 className="font-semibold text-[27px] mb-5 text-center w-full">
            RESULTADOS
          </h3>

          <p className="text-center max-w-2xl text-gray-600">
            Los resultados se muestran mediante heatmaps (mapas de calor) que
            indican las áreas con mayor visibilidad de tu negocio, y los
            rankings en Google Maps, que muestran tu posición en los resultados
            de búsqueda para dentistas en tu ciudad.
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            {" "}
            <ReactCompareSlider
              className="cursor-pointer"
              itemOne={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/b1.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/a1.png"
                  alt="Image two"
                />
              }
            />
            <sub className="mb-2">ranking de google</sub>
            <div className="flex items-center gap-2">
              <h2 className="tracking-wider">De 3 reviews</h2>
              <ArrowRight size={24} />
              <h2 className="tracking-wider">A 37 reviews</h2>
            </div>
            <h3 className="bg-green-400 text-white p-2 font-semibold">
              +1133.33%
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            {" "}
            <ReactCompareSlider
              className="cursor-pointer"
              itemOne={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/b2.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/a2.png"
                  alt="Image two"
                />
              }
            />
            <sub className="mb-2">ranking de google</sub>
            <div className="flex items-center gap-2">
              <h2 className="tracking-wider">De 1 review</h2>
              <ArrowRight size={24} />
              <h2 className="tracking-wider">A 22 reviews</h2>
            </div>
            <h3 className="bg-green-400 text-white p-2 font-semibold">
              +2100%
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            {" "}
            <ReactCompareSlider
              className="cursor-pointer"
              itemOne={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/b3.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/a3.png"
                  alt="Image two"
                />
              }
            />
            <sub className="mb-2">ranking de google</sub>
            <div className="flex items-center gap-2">
              <h2 className="tracking-wider">De 19 reviews</h2>
              <ArrowRight size={24} />
              <h2 className="tracking-wider">A 42 reviews</h2>
            </div>
            <h3 className="bg-green-400 text-white p-2 font-semibold">
              +121.05%
            </h3>
          </div>

          <CalendlyPopupWidget text="    COMENZAR HOY" />
        </div>
        <div className=" hidden flex flex-col items-start justify-start pl-8 pr-5 mt-10 w-full gap-5">
          <h3 className="font-semibold text-[27px] mb-5 text-center w-full">
            TESTIMONIOS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
