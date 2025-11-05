
'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false, loading: () => null });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerBar = () => {
  const logos = [
    { src: "/logos/intact-insurance-logo-rgb.svg", alt: "Intact" },
    { src: "/logos/aviva-logo-rgb.svg", alt: "Aviva" },
    { src: "/logos/travelers-logo-red-umbrella.svg", alt: "Travelers" },
    { src: "/logos/economical-logo-rgb.svg", alt: "Economical" },
    { src: "/logos/coachman.svg", alt: "Coachman" },
    { src: "/logos/Echelon.svg", alt: "Echelon" },
    { src: "/logos/Hagerty.svg", alt: "Hagerty" },
    { src: "/logos/Jevco.svg", alt: "Jevco" },
    { src: "/logos/SGI.svg", alt: "SGI" },
    { src: "/logos/Tugo.svg", alt: "Tugo" },
    { src: "/logos/Wawanesa.svg", alt: "Wawanesa" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-10">We partner with Canada's top insurance companies</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 flex justify-center items-center">
              <Image src={logo.src} alt={logo.alt} width={120} height={50} className="grayscale hover:grayscale-0 transition duration-300" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerBar;
