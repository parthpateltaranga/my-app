
"use client";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Rates and coverage from over 50 top insurance providers.</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} style={{ width: 150 }} className="mx-4">
              <img src={logo.src} alt={logo.alt} style={{ height: '40px', width: 'auto' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerBar;
