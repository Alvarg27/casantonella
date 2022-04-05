import React from "react";
import { render } from "react-dom";
import * as FontAwesome from "react-icons/fa";
import {
  FaWineBottle,
  FaUtensils,
  FaIceCream,
  FaGlassWhiskey,
  FaGlassMartiniAlt,
  FaAppleAlt,
  FaCarrot,
  FaCocktail,
  FaCookieBite,
  FaFish,
  FaGlassCheers,
  FaGlassMartini,
  FaHamburger,
  FaHotdog,
  FaHeart,
  FaLeaf,
  FaLemon,
  FaMortarPestle,
  FaMugHot,
  FaPepperHot,
  FaPizzaSlice,
  FaSeedling,
  FaStar,
  FaSun,
  FaStopwatch,
  FaTag,
  FaThermometerFull,
  FaThermometerEmpty,
  FaTint,
  FaUtensilSpoon,
  FaWineGlassAlt,
  FaWineGlass,
  FaSnowflake,
  FaUser,
  FaDrumstickBite,
  FaBeer,
} from "react-icons/fa";

export default function Icon({ iconName, template }) {
  const renderIcon = () => {
    if (iconName === "FaWineBottle") {
      return <FaWineBottle />;
    } else if (iconName === "FaUtensils") {
      return <FaUtensils />;
    } else if (iconName === "FaIceCream") {
      return <FaIceCream />;
    } else if (iconName === "FaGlassWhiskey") {
      return <FaGlassWhiskey />;
    } else if (iconName === "FaGlassMartiniAlt") {
      return <FaGlassMartiniAlt />;
    } else if (iconName === "FaAppleAlt") {
      return <FaAppleAlt />;
    } else if (iconName === "FaCarrot") {
      return <FaCarrot />;
    } else if (iconName === "FaCocktail") {
      return <FaCocktail />;
    } else if (iconName === "FaFish") {
      return <FaFish />;
    } else if (iconName === "FaCookieBite") {
      return <FaCookieBite />;
    } else if (iconName === "FaGlassCheers") {
      return <FaGlassCheers />;
    } else if (iconName === "FaGlassMartini") {
      return <FaGlassMartini />;
    } else if (iconName === "FaHamburger") {
      return <FaHamburger />;
    } else if (iconName === "FaHotdog") {
      return <FaHotdog />;
    } else if (iconName === "FaHeart") {
      return <FaHeart />;
    } else if (iconName === "FaLeaf") {
      return <FaLeaf />;
    } else if (iconName === "FaLemon") {
      return <FaLemon />;
    } else if (iconName === "FaMortarPestle") {
      return <FaMortarPestle />;
    } else if (iconName === "FaMugHot") {
      return <FaMugHot />;
    } else if (iconName === "FaPepperHot") {
      return <FaPepperHot />;
    } else if (iconName === "FaPizzaSlice") {
      return <FaPizzaSlice />;
    } else if (iconName === "FaSeedling") {
      return <FaSeedling />;
    } else if (iconName === "FaStar") {
      return <FaStar />;
    } else if (iconName === "FaSun") {
      return <FaSun />;
    } else if (iconName === "FaTag") {
      return <FaTag />;
    } else if (iconName === "FaThermometerFull") {
      return <FaThermometerFull />;
    } else if (iconName === "FaThermometerEmpty") {
      return <FaThermometerEmpty />;
    } else if (iconName === "FaStopwatch") {
      return <FaStopwatch />;
    } else if (iconName === "FaTint") {
      return <FaTint />;
    } else if (iconName === "FaUtensilSpoon") {
      return <FaUtensilSpoon />;
    } else if (iconName === "FaWineGlassAlt") {
      return <FaWineGlassAlt />;
    } else if (iconName === "FaWineGlass") {
      return <FaWineGlass />;
    } else if (iconName === "FaSnowflake") {
      return <FaSnowflake />;
    } else if (iconName === "FaUser") {
      return <FaUser />;
    } else if (iconName === "FaDrumstickBite") {
      return <FaDrumstickBite />;
    } else if (iconName === "FaBeer") {
      return <FaBeer />;
    }
  };

  return <div style={{ margin: "auto" }}>{renderIcon()}</div>;
}
