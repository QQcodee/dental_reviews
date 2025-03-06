"use client";

import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Page = () => {
  // ✅ Uppercase function name
  const [rating, setRating] = useState(0);
  const [isPositive, setIsPositive] = useState(null);
  const [badReview, setBadReview] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [thankYou, setThankYou] = useState(false);

  const router = useRouter();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleFeedback = (isPositiveFeedback: boolean) => {
    //@ts-expect-error
    setIsPositive(isPositiveFeedback);
  };

  const handleContinue = () => {
    setIsOpen(false);

    router.push(
      "https://search.google.com/local/writereview?placeid=ChIJpWodSvND6oYRsV8xqQDhmQU"
    );
  };

  const handleBadReview = () => {
    toast.success("Gracias por tu comentario");
    setThankYou(true);
  };

  return (
    <div className="poppins w-full h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center px-2 py-5">
        <Avatar className="w-40 h-40 shadow-xl">
          <AvatarImage src="https://ivltiudjxnrytalzxfwr.supabase.co/storage/v1/object/public/imagenes-rifas/Dentistas/Screenshot%202025-03-05%20124651.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="font-bold poppins">Dra. Cristina Chao</h2>

        {thankYou === false ? (
          <>
            <h1 className="font-bold poppins text-center text-2xl sm:text-3xl">
              ¿Qué tal fue tu experiencia con nosotros?
            </h1>

            {isPositive === null ? (
              <div className="flex gap-20 justify-center items-center mt-10">
                <div className="flex flex-col gap-2 items-center">
                  <ThumbsUp
                    size={50}
                    onClick={() => handleFeedback(true)}
                    className={
                      isPositive === true
                        ? "text-green-500 fill-current"
                        : "text-gray-300 hover:text-green-500"
                    }
                  />
                  <p className="text-lg text-gray-500">Buena</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <ThumbsDown
                    size={50}
                    onClick={() => handleFeedback(false)}
                    className={
                      isPositive === false
                        ? "text-red-500 fill-current"
                        : "text-gray-300 hover:text-red-500"
                    }
                  />
                  <p className="text-lg text-gray-500">Mala</p>
                </div>
              </div>
            ) : null}

            {isPositive !== null ? (
              <div className="flex gap-2 mt-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={50}
                    onClick={() => handleRatingChange(i + 1)}
                    className={
                      rating > i
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300 hover:text-yellow-500"
                    }
                  />
                ))}
              </div>
            ) : null}

            {rating > 3 ? (
              <button
                onClick={() => setIsOpen(true)}
                className="text-lg bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-10"
              >
                Enviar reseña
              </button>
            ) : null}

            {rating < 4 && rating > 0 ? (
              <div className="flex flex-col items-center mt-5">
                <textarea
                  onChange={(e) => setBadReview(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Cuentanos tu experiencia aquí..."
                />
                {badReview.length > 0 ? (
                  <button
                    onClick={handleBadReview}
                    className="text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Enviar reseña
                  </button>
                ) : null}
              </div>
            ) : null}
          </>
        ) : null}

        {thankYou === true ? (
          <h1 className="font-semibold poppins text-center text-2xl sm:text-3xl bg-blue-500 text-white py-2 px-2 rounded">
            Gracias por tu reseña, la tomaremos en cuenta para mejorar nuestro
            servicio
          </h1>
        ) : null}
      </div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-white flex flex-col items-center justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center font-bold text-3xl ">
              Gracias!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center tracking-wider">
              Serás redirigido a Google, solo tienes que iniciar sesión y
              escribir tu reseña.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-green-500"
              onClick={handleContinue}
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Page; // ✅ Corrected export
