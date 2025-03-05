"use client";

import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/Logo_Dental_Reviews.png";
import {
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
          <a
            href="tel:+526143035198"
            className="bg-[#20ACCD] text-white py-2 px-4 font-bold tracking-widest border-[2px] border-black"
          >
            LLAMAR AHORA
          </a>

          <Menu size={32} className="hidden" />
        </div>
      </header>
      <div className=" sm:max-w-[700px]">
        <div className="flex flex-col items-center justify-start pl-8 pr-5">
          <h1 className="text-[27px] font-medium uppercase">
            {" "}
            Aumenta tus reseñas de forma automática y sin esfuerzo
          </h1>
          <h2 className="text-[18px] font-light">
            Mejora tu reputación online, atrae más clientes y aumenta tu
            visibilidad en Google con nuestro sistema automatizado de reseñas.
          </h2>

          <CalendlyPopupWidget text="¡Mejora tus reseñas hoy!" />
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

          <div className="">
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
          </div>
          <div className="">
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
          </div>
          <div className="">
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
          </div>

          <CalendlyPopupWidget text="¡Mejora tus reseñas hoy!" />
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
