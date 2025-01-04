import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center h-[100dvh] w-full space-y-6">
          <div className="text-center">
            <h3 className="text-5xl font-bold tracking-tight">Link Shortner</h3>
            <p className="text-sm">Shorten your links with ease</p>
          </div>
          <ShortenerForm></ShortenerForm>
        </div>
        <Footer />
      </div>
    </>
  );
}
