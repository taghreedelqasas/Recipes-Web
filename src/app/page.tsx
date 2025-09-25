import About from "@/components/About";
import FeaturedCategories from "@/components/FeaturedCategories";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
 import React from "react";
import Footer from "@/components/Footer";

export default function Home() {

 
     // redirect("/dashboard");
     return  (
       <div>
         <Header />
         <FeaturedCategories />
         <About/>
         <Footer/>
       </div>
     );

    

}
