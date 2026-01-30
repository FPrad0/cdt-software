import type { User } from "../types";
import dogImage from "../assets/image/dog.png";
import bearImage from "../assets/image/bear.png";
import chickenImage from "../assets/image/chicken.png";
import dog2Image from "../assets/image/dog2.png";
import giraffeImage from "../assets/image/giraffe.png";
import gorillaImage from "../assets/image/gorilla.png";
import lionImage from "../assets/image/lion.png";
import meerkatImage from "../assets/image/meerkat.png";
import pandaImage from "../assets/image/panda.png";
import rabbitImage from "../assets/image/rabbit.png";

const images = [
  dogImage,
  bearImage,
  chickenImage,
  dog2Image,
  giraffeImage,
  gorillaImage,
  lionImage,
  meerkatImage,
  pandaImage,
  rabbitImage,
];

export function getUserImage(user: User): string {
  return images[user.id % images.length];
}
