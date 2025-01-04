import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col items-center justify-center h-screen w-full space-y-6">
          <div className="text-center">
            <h3 className="text-5xl font-bold tracking-tight">Link Shortner</h3>
            <p className="text-sm">Shorten your links with ease</p>
          </div>
          <ShortenerForm></ShortenerForm>
        </div>
        {/* Featured Image */}
        <div className="h-screen">
          <Image
            className="object-cover h-screen"
            src="https://images.unsplash.com/photo-1678924665955-5dcccbf904f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Link Shortner Image"
            width={700}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
