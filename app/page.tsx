import Image from "next/image";
import HeroPage from "../components/HomePage/heropage/page";
import Category from "../components/HomePage/category/category";
import BestSellingCourse from "@/components/HomePage/bestSelling/BestSellingCourse";
import FeatureCourses from "@/components/HomePage/featureCourses/FeatureCourses";
import RecentCourse from "@/components/HomePage/recentCourse/RecentCourse";
import BeInstractor from "@/components/HomePage/become instructor/BeInstractor";
import TopInstructors from "@/components/HomePage/top instractors/TopInstructors";
import TrustedCompanies from "@/components/HomePage/trusted Companies/TrustedCompanies";
import Footer from "@/components/HomePage/footer/Footer";

export default function Home() {
  return (
    <>
      <HeroPage/>
      <Category/>
      <BestSellingCourse/>
      <FeatureCourses/>
      <RecentCourse/>
      <BeInstractor/>
      <TopInstructors/>
      <TrustedCompanies/>
      <Footer/>
    </>
  );
}
