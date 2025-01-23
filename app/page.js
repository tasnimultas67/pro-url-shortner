import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";
import SparklesText from "@/components/ui/sparkles-text";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100 py-10 md:py-0">
        <div className="flex flex-col items-center justify-center md:h-[100dvh] w-full space-y-6">
          <div className="text-center">
            <SparklesText text="Shorten your looong URL :)" />
            <p className="text-sm ">Shorten your links with ease</p>
          </div>
          <div className="w-11/12 md:w-7/12 m-auto bg-white p-5 md:p-8 md:pb-2 rounded-lg shadow-xl">
            <ShortenerForm></ShortenerForm>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
