import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const lang = [
  { name: "English", locale: "en" },
  { name: "Français", locale: "fr" },
];
function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState(
    lang.find((e) => e.locale === router.locale)
  );
  return (
        <Listbox value={locale} onChange={setLocale}>
          <div className="relative ml-2">
            <Listbox.Button className="relative w-28 py-2 px-2 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm dark:bg-gray-700">
              <span className="block truncate">{locale.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {lang.map((lang, Idx) => (
                  <Listbox.Option
                    key={Idx}
                    className={({ active }) =>
                      `${
                        active ? "text-amber-900 bg-amber-100 dark:text-white" : "text-gray-900 dark:text-gray-300"
                      }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={lang}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          <Link href={router.pathname} locale={lang.locale}>
                            {lang.name}
                          </Link>
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-amber-600" : "text-amber-600"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
  );
}

export default LanguageSwitcher;
