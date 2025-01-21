import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex flex-col items-center justify-center h-[100dvh] w-full space-y-6">
          <div className="text-center">
            <h3 className="text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-t from-black to-blue-800">
              Shorten your looong links :)
            </h3>
            <p className="text-sm ">Shorten your links with ease</p>
          </div>
          <div className="w-7/12 m-auto bg-white p-8 rounded-lg shadow-xl">
            <ShortenerForm></ShortenerForm>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
