import Image from "next/image";
import ObjectDetection from "@/components/obj_detection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl
      tracking-tighter md:px-6 text-center bg-gradient-to-b from-white via-gray-300 to-gray-600 
      text-transparent bg-clip-text">
        Object-Detection
      </h1>
      <ObjectDetection/>
    </main>
  );
}
