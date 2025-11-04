import Image from "next/image";
import HeroPage from "../components/heropage/page";
import Category from "../components/category/category";

export default function Home() {
  return (
    <>
      <HeroPage/>
      <Category/>
    </>
  );
}
