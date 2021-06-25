import { ChevronUpIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/services";
import { getSection, getServices } from "../lib/graphcms";

export async function getStaticProps() {
  const hero = await getSection();
  const services = await getServices();
  return {
    props: {
      hero,
      services,
    },
  };
}
export default function Home({ hero, services }) {
  return (
    <div>
      <Head>
        <title>Transcend</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Transcend Cyberprise is Tunisian Software Company"
        />
      </Head>
      <Hero
        title={hero?.title}
        subtitle={hero?.subtitle}
        description={hero?.description}
      />
      <Services data={services} />
      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-gray-600 text-white text-lg z-20 duration-300 hover:bg-gray-400"
      >
        <ChevronUpIcon />
      </a>
    </div>
  );
}
