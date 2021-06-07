import {
  CodeIcon,
  CogIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const services = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Custom Software Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CodeIcon,
  },
  {
    name: "Mobile Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Dev Ops",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CogIcon,
  },
  {
    name: "Software Testing and QA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: RefreshIcon,
  },
];

export default function Services() {
  return (
    <div className="mt-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lorem ipsum dolor sit amet
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((s) => (
              <div key={s.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    <Link href={`/services/${encodeURIComponent(s.name.toLowerCase())}`}>
                      {s.name}
                    </Link>
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {s.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
