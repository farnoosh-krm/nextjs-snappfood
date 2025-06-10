import Slider from "@/components/Slider";
import Categories from "../components/Categories";
import ContactUs from "@/components/ContactUs";
import DownloadApp from "@/components/DownloadApp";

export default function Home() {
  return (
    <div className="flex w-full flex-wrap p-4 justify-center items-start">
      <Categories />
      <Slider />
      <DownloadApp />
      <ContactUs />
    </div>
  );
}
