import Slider from "@/components/Slider";
import Categories from "../components/Categories";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="flex w-full flex-wrap p-4 justify-center items-start">
      <Categories />
      <Slider />
      <ContactUs />
    </div>
  );
}
