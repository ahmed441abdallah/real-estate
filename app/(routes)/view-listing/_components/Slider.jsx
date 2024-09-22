import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import Image from "next/image";

const Slider = ({ images }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images ? (
          images?.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Image
                  width={800}
                  height={400}
                  className="rounded-xl  h-[400px]"
                  src={image.url}
                  alt="listing image"
                />
              </CarouselItem>
            );
          })
        ) : (
          <div className="w-full h-[200px] animate-pulse bg-slate-200"></div>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
