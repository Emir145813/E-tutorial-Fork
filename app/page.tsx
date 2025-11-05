import Image from "next/image";
import HeroPage from "../components/HomePage/heropage/page";
import Category from "../components/HomePage/category/category";
import BestSellingCourse from "@/components/HomePage/bestSelling/BestSellingCourse";

export default function Home() {
  return (
    <>
      <HeroPage/>
      <Category/>
      <BestSellingCourse/>
    </>
  );
}
