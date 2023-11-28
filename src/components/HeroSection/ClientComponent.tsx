"use client";

import { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
  headingHome: React.ReactNode;
  sectionImagesHome: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { headingHome, sectionImagesHome } = props;
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {/* Heading */}
        {headingHome}

        {/* Room description */}
        <div className="flex justify-between mt-12">
          {/* Room */}
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center"> Basic Room </p>
            <CountUpNumber duration={3000} endValue={200} />
          </div>
          {/* Room 2*/}
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center"> Luxury Room </p>
            <CountUpNumber duration={3000} endValue={120} />
          </div>
          {/* Room 3*/}
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center"> Suite </p>
            <CountUpNumber duration={3000} endValue={50} />
          </div>
        </div>
      </div>

      {/* Images Section */}
      {sectionImagesHome}
    </section>
  );
};

export default ClientComponent;
