'use client';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";
import UnhaDeGatoInfo from "./_infs/inf1";
import VeronicaOfficinalisInfo from "./_infs/inf2";
import BoldoInfo from "./_infs/inf3";
import AcaiInfo from "./_infs/inf4";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalText, setModalText] = useState<React.ReactNode>("");

  const openImageModal = (src: string, text: React.ReactNode) => {
    setModalImage(src);
    setModalText(text);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  const titleRef = useRef(null);
  const descriptionDivRef = useRef(null);
  const descriptionRef = useRef(null);
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    const title = titleRef.current;
    const descriptionDiv = descriptionDivRef.current;
    const description = descriptionRef.current;
    const btn = btnRef.current;

    if (title && descriptionDiv && description) {
      tl.from(title, { y: 100, opacity: 0 }, 0)
        .from(descriptionDiv, { y: 100, opacity: 0 }, "-=0.3")
        .from(description, { y: 50, opacity: 0 }, "-=0.3")
        .from(btn, { y: 50, opacity: 0 }, "-=0.3")
    }

    gsap.utils.toArray(".scroll-item-left").forEach((el) => {
      const element = el as Element;
      gsap.from(element, {
        opacity: 0,
        x: -200,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    gsap.utils.toArray(".scroll-item-right").forEach((el) => {
      const element = el as Element;
      gsap.from(element, {
        opacity: 0,
        x: 200,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#a3b18a] px-2 sm:px-4">
      <div
        className="absolute inset-0 z-0 bg-[url('/fundo.svg')] bg-cover bg-center opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center justify-evenly text-center mb-10 min-h-[100vh] py-8 sm:py-0">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-7xl p-2 sm:p-4 font-extrabold"
          style={{ color: "#3a5a40" }}
        >
          Atividade de Biologia
        </h1>
        <div
          ref={descriptionDivRef}
          className="backdrop-blur-sm bg-white/30 p-4 sm:p-6 rounded-lg shadow-lg"
        >
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg text-gray-700 max-w-2xl"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ducimus cupiditate, fugit odit illum unde molestias possimus similique ad veritatis expedita porro, quod aliquam quidem aspernatur nisi excepturi nemo dignissimos.
          </p>
        </div>
        <div ref={btnRef} className="mt-6 sm:mt-8">
          <Link
            href="#explore"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Explore Agora
          </Link>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="w-full max-w-5xl flex flex-col justify-around space-y-12 sm:space-y-16 pt-3 mb-10 min-h-[80vh]">
        {/* Bloco 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="scroll-item-left">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">Uncaria tomentosa (unha-de-gato)</h2>
            <p className="text-gray-600">
              É uma planta medicinal da Amazônia peruana, conhecida popularmente como “unha-de-gato” por seus espinhos curvos.
            </p>
          </div>
          <Image
            src="/img1.png"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-60 sm:h-90 object-cover scroll-item-left cursor-pointer"
            onClick={() => openImageModal("/img1.png", <UnhaDeGatoInfo />)}
          />
        </div>

        {/* Bloco 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/img2.png"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-60 sm:h-90 object-cover scroll-item-right cursor-pointer"
            onClick={() => openImageModal("/img2.png", <VeronicaOfficinalisInfo />)}
          />
          <div className="scroll-item-right">
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Veronica officinalis L. (Verônica)</h2>
            <p className="text-gray-600">
              É tida como uma das primeiras plantas medicinais que se tem notícia e passou a ser conhecida como a “erva dos leprosos”.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl flex flex-col justify-around space-y-12 sm:space-y-16 pt-3 mb-10 min-h-[80vh]">
        {/* Bloco 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="scroll-item-left">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">Peumus boldus (Boldo)</h2>
            <p className="text-gray-600">
              O boldo pode ser consumido na forma de cápsulas, chás, sucos ou tinturas usando as folhas frescas de boldo
            </p>
          </div>
          <Image
            src="/img3.png"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-60 sm:h-90 object-cover scroll-item-left cursor-pointer"
            onClick={() => openImageModal("/img3.png", <BoldoInfo />)}
          />
        </div>

        {/* Bloco 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/img4.png"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-60 sm:h-90 object-cover scroll-item-right cursor-pointer"
            onClick={() => openImageModal("/img4.png", <AcaiInfo />)}
          />
          <div className="scroll-item-right">
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Euterpe oleracea (Açaizeiro)</h2>
            <p className="text-gray-600">
              O açaí é uma palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa, muito utilizado na confecção de alimentos e bebidas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-black py-6 mt-5">
        © {new Date().getFullYear()} BioAtv. Todos os direitos reservados.
      </footer>

 {modalOpen && (
  <div
    className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center px-4 backdrop-blur-sm bg-black/30"
    onClick={closeModal}
  >
    <Image
      width={400}
      height={400}
      src={modalImage}
      alt="Imagem ampliada"
      className="w-full max-w-xs sm:max-w-md md:max-w-3xl h-auto rounded-lg shadow-lg mb-4 md:mb-0"
    />
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-3xl h-auto max-h-[70vh] md:max-h-[70vh] overflow-y-auto">
      {modalText}
    </div>
  </div>
)}
    </div>
  );
}
