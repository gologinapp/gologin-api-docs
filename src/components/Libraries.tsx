import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoDocker from '@/images/logos/docker.svg'
import logoNode from '@/images/logos/node.svg'
import logoPlaywright from '@/images/logos/playwright-logo.svg'
import logoPython from '@/images/logos/python.svg'

const libraries = [
  {
    href: 'https://github.com/gologinapp/gologin',
    name: 'Node.js Puppeteer',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: logoNode,
  },
  {
    href: 'https://playwright.dev/docs/intro',
    name: 'Node.js Playwright',
    description:
      'Playwright is a cross-browser automation tool which supports all modern rendering engines including Chromium, WebKit, and Firefox.',
    logo: logoPlaywright,
  },
  {
    href: 'https://github.com/gologinapp/pygologin',
    name: 'Python Selenium',
    description:
      'Selenium is a cross-browser automation toolset built on top of standrard WebDriver.',
    logo: logoPython,
  },
  {
    href: 'https://github.com/gologinapp/docker',
    name: 'Docker scraping container',
    description:
      'Docker container is a out-of-the-box solution to run your scraping browser automation.',
    logo: logoDocker,
  },

]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
