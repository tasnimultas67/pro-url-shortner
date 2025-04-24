import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";
import SparklesText from "@/components/ui/sparkles-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WifiGen from "./components/WifiGen";

export default function Home() {
  return (
    <>
      <div className=" py-10">
        <div className="flex flex-col items-center justify-center m-auto space-y-6 ">
          <div className="text-center">
            <SparklesText text="Make Life More Easy" />
            <p className="text-sm ">Shorten your links with ease</p>
          </div>

          <Tabs defaultValue="link-short" className="w-11/12 md:w-7/12">
            <TabsList>
              <TabsTrigger value="link-short">Link Short</TabsTrigger>
              <TabsTrigger value="wifiqrgen">Wifi QR</TabsTrigger>
            </TabsList>
            <TabsContent value="link-short">
              <div className=" m-auto bg-white p-5 md:p-8 md:pb-2 rounded-lg shadow-xl">
                <ShortenerForm></ShortenerForm>
              </div>
            </TabsContent>
            <TabsContent value="wifiqrgen">
              <div className=" m-auto bg-white p-5 md:p-8 rounded-lg shadow-xl">
                <WifiGen></WifiGen>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
