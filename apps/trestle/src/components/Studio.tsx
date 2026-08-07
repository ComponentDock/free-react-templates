import { ButtonLink } from '@free-react-templates/ui'

export function Studio() {
  return (
    <section id="studio" className="py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-ink">
            Who we are
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl dark:text-white">
            We are a creative Architecture Studio
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist dark:text-gray-300">
            Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus.
            Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at
            mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar
            accumsan, tortor nisl iaculis ligula.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist dark:text-gray-300">
            Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat
            imperdiet. Curabitur non maximus leo.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#projects"
              className="border-4 border-ink bg-transparent px-10 py-4 text-sm font-black uppercase tracking-wide text-ink hover:bg-brand dark:border-white dark:text-white dark:hover:border-brand"
            >
              See Project
            </ButtonLink>
          </div>
        </div>

        <img
          src="https://picsum.photos/seed/trestle-studio/640/520"
          alt="Studio team reviewing architectural models"
          className="h-[420px] w-full object-cover"
        />
      </div>
    </section>
  )
}
