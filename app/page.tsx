import Image from "next/image";
import HeroPage from "../components/HomePage/heropage/page";
import Category from "../components/HomePage/category/category";
import BestSellingCourse from "@/components/HomePage/bestSelling/BestSellingCourse";
import FeatureCourses from "@/components/HomePage/featureCourses/FeatureCourses";
import RecentCourse from "@/components/HomePage/recentCourse/RecentCourse";

export default function Home() {
  return (
    <>
      <HeroPage/>
      <Category/>
      <BestSellingCourse/>
      <FeatureCourses/>
      <RecentCourse/>
    </>
  );
}
