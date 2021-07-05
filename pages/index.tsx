import { ChevronUpIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Services from "../components/services";
import Team from "../components/team";
import Technologies from "../components/technologies";
import {
  getSection,
  getServices,
  getTeam,
  getTechnologies,
  getValues,
  getWorkflow,
} from "../lib/graphcms";

export async function getStaticProps({ locale }) {
  const hero = await getSection("transcend", [locale, "en"]);
  const servicesMeta = await getSection("services", [locale, "en"]);
  const workflowMeta = await getSection("workflow", [locale, "en"]);
  const valuesMeta = await getSection("values", [locale, "en"]);
  const teamMeta = await getSection("team", [locale, "en"]);
  const contactMeta = await getSection("contact", [locale, "en"]);
  const services = await getServices([locale, "en"]);
  const technologies = await getTechnologies([locale, "en"]);
  const workflow = await getWorkflow([locale, "en"]);
  const values = await getValues([locale, "en"]);
  const team = await getTeam([locale, "en"]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      hero,
      servicesMeta,
      services,
      technologies,
      workflowMeta,
      workflow,
      valuesMeta,
      values,
      teamMeta,
      team,
      contactMeta,
    },
  };
}
export default function Home({
  hero,
  servicesMeta,
  services,
  technologies,
  workflowMeta,
  workflow,
  valuesMeta,
  values,
  teamMeta,
  team,
  contactMeta,
}) {
  const { t } = useTranslation("common");
  const contact = {
    emailPlaceholder: t("contact-email-placeholder"),
    msgTitle: t("contact-message"),
    msgPlaceholder: t("contact-message-placeholder"),
    buttonCaption: t("contact-button"),
  };
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
      <Services bg="dark:bg-gray-700" meta={servicesMeta} data={services} />
      <Technologies title="technologies" data={technologies} />
      <Services bg="dark:bg-gray-700" meta={workflowMeta} data={workflow} />
      <Services
        bg="bg-gray-50 dark:bg-gray-800"
        meta={valuesMeta}
        data={values}
      />
      <Team meta={teamMeta} data={team} />
      <Contact local={contact} meta={contactMeta} />
      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-gray-600 text-white text-lg z-20 duration-300 hover:bg-gray-400"
      >
        <ChevronUpIcon />
      </a>
    </div>
  );
}
