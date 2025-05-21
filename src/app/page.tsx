'use client';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openImageModal = (src: string) => {
    setModalImage(src);
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


    // animação da Hero
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

    // animação do scroll

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
    <div className=" min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 px-4">

      <div
        className="absolute inset-0 z-0 bg-[url('/fundo.svg')] bg-cover bg-center opacity-20 pointer-events-none"
        aria-hidden="true"
      />


      {/* Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center justify-evenly text-center mb-10 h-screen ">
        <h1 ref={titleRef} className="text-7xl p-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-4">
          Atividade de Biologia
        </h1>
        <div ref={descriptionDivRef} className="backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-lg">
          <p ref={descriptionRef} className="text-lg text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ducimus cupiditate, fugit odit illum unde molestias possimus similique ad veritatis expedita porro, quod aliquam quidem aspernatur nisi excepturi nemo dignissimos.
          </p>
        </div>
        <div ref={btnRef} className="mt-8">
          <Link href="#explore" className="bg-blue-600 text-white px-6 py-3 backdrop-opacity-100 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Explore Agora
          </Link>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="w-full max-w-5xl flex flex-col justify-around space-y-16 pt-3 mb-16 h-screen">
        {/* Bloco 1 */}
        <div className="grid md:grid-cols-2 gap-20 items-center ">
          <div className="scroll-item-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Titulo</h2>
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus, nostrum, ab quam iusto atque ut asperiores, quasi non similique aspernatur repellat id exercitationem quos? Quod molestiae nisi error mollitia?
            </p>
          </div>
          <Image
            src="/bio.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-90 object-cover scroll-item-left"
            onClick={() => openImageModal("/bio.jpg")}
          />
        </div>

        {/* Bloco 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/bio.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-90 object-cover scroll-item-right"
            onClick={() => openImageModal("/bio.jpg")}
          />
          <div className="scroll-item-right">
            <h2 className="text-2xl font-bold text-green-700 mb-2">titulo</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, voluptate iste ullam iusto error sapiente, odio rerum repudiandae atque libero non et! Qui tempora, dicta enim fugit cumque earum harum.
            </p>
          </div>
        </div>

      </section>
      <section className="w-full max-w-5xl flex flex-col justify-around space-y-16 pt-3 mb-16 h-screen">
        {/* Bloco 1 */}
        <div className="grid md:grid-cols-2 gap-20 items-center ">
          <div className="scroll-item-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Titulo</h2>
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus, nostrum, ab quam iusto atque ut asperiores, quasi non similique aspernatur repellat id exercitationem quos? Quod molestiae nisi error mollitia?
            </p>
          </div>
          <Image
            src="/bio.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-90 object-cover scroll-item-left"
            onClick={() => openImageModal("/bio.jpg")}
          />
        </div>

        {/* Bloco 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/bio.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-xl w-full h-90 object-cover scroll-item-right"
            onClick={() => openImageModal("/bio.jpg")}
          />
          <div className="scroll-item-right">
            <h2 className="text-2xl font-bold text-green-700 mb-2">titulo</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, voluptate iste ullam iusto error sapiente, odio rerum repudiandae atque libero non et! Qui tempora, dicta enim fugit cumque earum harum.
            </p>
          </div>
        </div>

      </section>


      {/* Footer */}
      <footer className="w-full text-center text-gray-500 py-6 mt-5">
        © {new Date().getFullYear()} BioAtv. Todos os direitos reservados.
      </footer>

      {modalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-4 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <Image
            width={500}
            height={500}
            src={modalImage}
            alt="Imagem ampliada"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
