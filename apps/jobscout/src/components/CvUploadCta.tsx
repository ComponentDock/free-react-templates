import { Upload } from 'lucide-react'

export function CvUploadCta() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jobscout-cv/1920/500)' }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-8">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-white/70">
          Upload Your Resume
        </span>
        <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Make a Difference with Your Online Resume!
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded border border-white px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-navy"
        >
          <Upload className="h-4 w-4" />
          Upload your CV
        </a>
      </div>
    </section>
  )
}
