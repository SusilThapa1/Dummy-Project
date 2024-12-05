import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductCardSkeleton = () => {
  return (
    <div
      className={`  flex flex-col justify-center items-center gap-3 p-4 bg-gray-300   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl`}
    >
      <SkeletonTheme baseColor="#ede9e9" highlightColor="#d8d0d0">
        {/* Image Placeholder */}

        <Skeleton height={154} width={154} />

        {/* Title Placeholder */}
        <div className="flex flex-col w-full justify-center gap-2 items-center">
          <Skeleton containerClassName="w-[20vw] h-10" />

          {/* Description Placeholder */}
          <Skeleton count={4} containerClassName="w-full" />

          {/* Price and Rating Placeholder */}
          <div className="flex gap-[2vw] justify-center w-[15vw] items-center">
            <Skeleton containerClassName="w-52" />
            <Skeleton containerClassName="w-52" />
          </div>

          {/* Button Placeholder */}
          <Skeleton height={35} width={150} />
        </div>
      </SkeletonTheme>
    </div>
  );
};
export const ProductDetailsCardSkeleton = () => {
  return (
    <div
      className={`h-screen-minus-128 w-full flex justify-center items-center gap-3 pt-16  bg-gray-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] `}
    >
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 px-5 py-4 w-[895] gap-10 mx-auto bg-gray-200 rounded-lg shadow-lg h-[448]">
        <SkeletonTheme baseColor="#aeaaaa" highlightColor="#e0dddd">
          {/* Image Placeholder */}

          <Skeleton height={300} width={300} containerClassName="rounded-md" />

          {/* Title Placeholder */}
          <div className="w-full flex flex-col gap-7">
            <Skeleton height={50} containerClassName="w-full" />
            {/* Description Placeholder */}
            <Skeleton count={4} containerClassName="w-full" />

            {/* Price and quantity */}
            <div className="w-full flex flex-col gap-16">
              <Skeleton height={30} containerClassName="w-[10vw]" count={2} />
              {/* Button Placeholder */}
              <Skeleton height={35} containerClassName="w-full mt-18" />
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};
