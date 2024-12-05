import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { GoArrowRight } from "react-icons/go";

const BackForward = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <Button
        title="Go back"
        onClick={() => router.back()}
        text={<FaArrowLeft className="text-gray-800   text-xl" />}
      />
      <Button
        title="Go forward"
        onClick={() => router.forward()}
        text={<FaArrowRight className="text-gray-800   text-xl" />}
      />
    </div>
  );
};

export default BackForward;
