import { SocialLinks } from './SocialLinks'

export function ErrorSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-[767px] py-24 text-center">
        <div className="h-[220px] max-[480px]:h-[168px]">
          <h1 className="bg-linear-[130deg] from-flame to-brand bg-clip-text font-sans text-[186px] font-extralight uppercase leading-none text-transparent max-[480px]:text-[142px]">
            404
          </h1>
        </div>
        <h2 className="mt-0 font-sans text-[33px] font-extralight uppercase tracking-[3px] text-gray-900 max-[480px]:text-[22px] dark:text-white">
          Oops! Nothing was found
        </h2>
        <p className="font-sans text-base font-extralight text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.{' '}
          <a
            href="/"
            className="rounded-[2px] border-b border-dashed border-brand font-sans font-extralight text-brand"
          >
            Return to homepage
          </a>
        </p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
