import Image from "next/image";
import ShortenerForm from "./components/ShortenerForm";
import Footer from "./components/Footer/Footer";
import SparklesText from "@/components/ui/sparkles-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WifiGen from "./components/WifiGen";
import { Link, QrCode } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" py-10">
        <div className="flex flex-col items-center justify-center m-auto space-y-6 ">
          <div className="text-center">
            <SparklesText text="Make Life More Easy" />
            <p className="text-sm ">
              Wave in short links & instant WiFi QR codes
            </p>
          </div>

          <Tabs defaultValue="link-shortner" className="w-11/12 md:w-7/12">
            <TabsList className="py-5 px-1">
              <TabsTrigger
                value="link-shortner"
                className="flex items-center gap-1"
              >
                <Link className="size-4"></Link>Link Shortner
              </TabsTrigger>
              <TabsTrigger
                value="wifiqrgen"
                className="flex items-center gap-1"
              >
                {" "}
                <QrCode className="size-4" />
                Wifi QR Code
              </TabsTrigger>
            </TabsList>
            {/* LINK SHORTNER */}
            <TabsContent
              value="link-shortner"
              className="bg-[#EFF1F5] rounded-xl"
            >
              <div className=" m-auto p-5 md:p-8 md:pb-2 ">
                <ShortenerForm></ShortenerForm>
              </div>
            </TabsContent>
            {/* WIFI QR CODE */}
            <TabsContent value="wifiqrgen" className="bg-[#EFF1F5] rounded-xl">
              <div className=" m-auto p-5 md:p-8">
                <WifiGen></WifiGen>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
