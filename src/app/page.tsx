"use client"

import Image from "next/image";
import { useLocale, useTranslations } from "use-intl";

export default function Home() {
  const translation = useTranslations("HomePage")
  const locale = useLocale()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol dir={locale == "fa" ? "rtl" : "ltr"} className={`font-mono list-inside list-decimal text-sm/6 text-center ${locale == "fa" ? "sm:text-right" : "sm:text-left"}`}>
          <li className="mb-2 tracking-[-.01em]">
            {translation.rich("HeroListItem1", {
              code: (chunks) => (
                <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                  {chunks}
                </code>
              ),
              editPath: "src/app/page.tsx"
            })}
          </li>
          <li className="mtracking-[-.01em]">
            {translation("HeroListItem2")}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            dir={locale == "fa" ? "rtl" : "ltr"}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            {translation("DeployButton")}
          </a>
          <a
            className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation("ReadOurDocsButton")}
          </a>
        </div>
      </main>
      <footer
        dir={locale == "fa" ? "rtl" : "ltr"}
        className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {translation("FooterListItem1")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {translation("FooterListItem2")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {translation("FooterListItem3", { nextJsWebsite: "nextjs.org" })}
          <span className={locale == "fa" ? "rotate-180" : ""}>→</span>
        </a>
      </footer>
    </div>
  );
}
