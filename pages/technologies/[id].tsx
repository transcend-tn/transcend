import { useRouter } from 'next/router';
import Breadcrumbs from '../../components/breadcrumbs';
const technologies = [
  {
    name: "Javascript",
    description:
      "Get all of your questions answered in our forums or contact support.",
  },
  {
    name: "NodeJS",
    description:
      "Learn how to maximize our platform to get the most out of it.",
  },
  {
    name: "PHP",
    description:
      "See what meet-ups and other events we might be planning near you.",
  },
];
export default function Service({ technology }) {
  const router = useRouter()
  const pages = [
    { name: 'Technologies', href: '/technologies', current: false },
    { name: technology?.name, href: router.asPath, current: true },
  ]
  return (<>
    <Breadcrumbs pages={pages}/>
    <div className="mt-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase"></h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {technology?.name}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {technology?.description}
          </p>
        </div>
      </div>
    </div></>
  );
}

export function getStaticProps({ params }) {
  const technology = technologies.find((t) => t.name.toLowerCase() === params.id.toLowerCase());
  if (technology === undefined)
    return {
      // returns a redirect to an internal page `/another-page`
      redirect: {
        destination: "/technologies",
        permanent: false,
      },
    };
  else
    return {
      props: { technology }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
  const paths = technologies.map((t) => {
    return {
      params: {
        id: t.name,
      },
    };
  });
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}
