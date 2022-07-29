import type { NextPage } from "next";
import About from "../components/About";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Title from "../components/Title";
import TimeLine from "../components/TimeLine";
import TimeLineItems from "../components/TimeLineItems";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Orgil`s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <div className="w-full mx-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
        <About />
        {/* <Section>
          <Title text=" About me in 10 seconds" />
          <div className="text-sm md:text-base text-gray-600 ">
            <p className="my-4">
              Hi. I`m Rachel! I`m a self-taught Senior Product Designer,
              YouTuber, Webflow Developer, Entrepreneur. I`m many things, but
              above all, I`m a storyteller.
            </p>
            <p className="my-4">
              I work as a Senior Product Designer. In May 2021, my YouTube
              channel was launched - since then it grew to 65K+ subscribers.
            </p>
            <p className="my-4">
              I advocate for no-code tools and believe in becoming 1% better
              every day. I aspire to bootstrap my own company and impact 1B
              people by making design education accessible to all.
            </p>
          </div>
        </Section> */}

  
        <Section>
          <Title text="Timeline" />
          <TimeLine>
            <TimeLineItems
              time="1995"
              content="Born in Kuala Lumpur, Malaysia"
            />
          </TimeLine>
        </Section>

        <Section>
          <Title text="Skills" />
        </Section>
      </div>
    </>
  );
};

export default Home;
