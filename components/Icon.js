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
  FaCat,
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
    }
  };

  return <div style={{ margin: "auto" }}>{renderIcon()}</div>;
}
