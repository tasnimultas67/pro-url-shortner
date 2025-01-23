import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";
import SparklesText from "@/components/ui/sparkles-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden rounded-lg border bg-background py-20">
        <FlickeringGrid
          className="fixed inset-0 z-0 size-full"
          squareSize={4}
          gridGap={1}
          color="#6B7280"
          maxOpacity={0.4}
          flickerChance={0.2}
          height={800}
          width={2600}
        />
      </div>
      <div className="  py-10 md:py-0 z-[100] absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center m-auto space-y-6 ">
          <div className="text-center">
            <SparklesText text="Shorten your looong URL :)" />
            <p className="text-sm ">Shorten your links with ease</p>
          </div>
          <div className="w-11/12 md:w-7/12 m-auto bg-white p-5 md:p-8 md:pb-2 rounded-lg shadow-xl">
            <ShortenerForm></ShortenerForm>
          </div>
        </div>
      </div>
    </>
  );
}
