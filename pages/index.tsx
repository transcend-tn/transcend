import { ChevronUpIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/services";
import Technologies from "../components/Technologies";
import {
  getSection,
  getServices,
  getTeam,
  getTechnologies,
  getValues,
  getWorkflow,
} from "../lib/graphcms";
import Team from "../components/Team";
import Contact from "../components/contact";


export async function getStaticProps() {
  const hero = await getSection();
  const services = await getServices();
  const technologies = await getTechnologies();
  const workflow = await getWorkflow();
  const values = await getValues();
  const team = await getTeam();
  return {
    props: {
      hero,
      services,
      technologies,
      workflow,
      values,
      team,
    },
  };
}
export default function Home({
  hero,
  services,
  technologies,
  workflow,
  values,
  team,
}) {
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
        slug={hero?.slug}
      />
      <Services slug="services" bg="" title="services" data={services} />
      <Technologies title="technologies" data={technologies} />
      <Services slug="workflow" bg="" title="workflow" data={workflow} />
      <Services slug="values" bg="bg-gray-50" title="values" data={values} />
      <Team data={team} />
<Contact/>
      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-gray-600 text-white text-lg z-20 duration-300 hover:bg-gray-400"
      >
        <ChevronUpIcon />
      </a>
    </div>
  );
}
