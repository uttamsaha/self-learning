import Image from "next/image";
import Button from "./components/Button";
import image from '@/public/uttam.jpg'
const page = () => {
  return (
    <div className="mt-4">
      <div>This is mission page</div>

    {/* Image optimization */}
    <Image src={image} alt="my image" quality={100} placeholder="blur"/>
      <Button/>
    </div>
  );
};

export default page;
