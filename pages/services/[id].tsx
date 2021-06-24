import { useRouter } from "next/router";
import Breadcrumbs from "../../components/breadcrumbs";

const services = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Lorem ipsum, Web Development amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "custom-software-development",
    name: "Custom Software Development",
    description:
      "Lorem ipsum, Custom Software Development amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description:
      "Lorem ipsum, Mobile Development amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "dev-ops",
    name: "Dev Ops",
    description:
      "Lorem ipsum, Dev Ops amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    id: "software-testion-qa",
    name: "Software Testing and QA",
    description:
      "Lorem ipsum, Software Testing and QA amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];

export default function Service({ service }) {
  const router = useRouter();
  const pages = [
    { name: "Services", href: "/services", current: false },
    { name: service?.name, href: router.asPath, current: true },
  ];
  return (
    <>
      <Breadcrumbs pages={pages} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase"></h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {service?.name}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {service?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps({ params }) {
  const service = services.find((s) => s.name.toLowerCase() === params.id.toLowerCase());
  if (service === undefined)
    return {
      // returns a redirect to an internal page `/another-page`
      redirect: {
        destination: "/services",
        permanent: false,
      },
    };
  else
    return {
      props: { service }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
  const paths = services.map((s) => {
    return {
      params: {
        id: s.name,
      },
    };
  });
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}
