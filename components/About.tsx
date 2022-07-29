/* eslint-disable @next/next/no-img-element */
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <Wrapper>
      <div className="my-10 grid grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center w-full">
        <img
          className="object-cover h-full w-full sm:h-full md:h-[350-px] lg:h-[500px] rounded-2xl"
          src="https://uploads-ssl.webflow.com/60c5f64abe141da7260da0b9/613a13d875bf677060afcf72_DSC01145-p-500.jpeg"
          alt="a"
        />
        <div className="text-gray-700 text-sm md:text-base leading-5 tracking-wider">
          <h1 className="text-3xl font-semibold text-black">
            HEY THERE!
          </h1>
          Hi, it`s Rachel from Kuala Lumpur, Malaysia! 🇲🇾 I’m a Product
          Designer, Webflow Developer, Creator, Entrepreneur. In short, I love
          creating and building stuff. ✨ Welcome to my little slice of the
          internet—I hope you find something useful! If you’re curious, read
          more about me.
          <p className="">
            Hi, it`s Rachel from Kuala Lumpur, Malaysia! 🇲🇾 I’m a Product
            Designer, Webflow Developer, Creator, Entrepreneur. In short, I love
            creating and building stuff. ✨ Welcome to my little slice of the
            internet—I hope you find something useful!
          </p>
          <p className="my-2">
            If you’re curious, read more{" "}
            <a className="font-bold" href="#">
              about me.
            </a>
          </p>
          <p>Thanks for dropping by,</p>
          <span className="text-lg font-bold font-serif">Rachel</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
