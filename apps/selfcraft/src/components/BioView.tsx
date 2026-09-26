export function BioView() {
  return (
    <section aria-label="Bio">
      <h1 className="font-heading text-heading text-4xl sm:text-5xl mb-0">Hi, I'm Kate Woodman</h1>

      <div className="mb-12">
        <p className="text-lg text-body-text mb-4">Web Designer &amp; Developer</p>
        <p className="mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, magnam aut animi,
          excepturi voluptatum placeat dolor accusantium atque iure! Animi architecto eveniet
          voluptatum illo ut maiores sed, autem pariatur culpa?
        </p>
        <p className="leading-relaxed">
          Commodi, neque debitis atque cum quod, culpa repellendus voluptatum voluptatem, molestiae
          dicta laborum nulla corporis illum, ratione rerum quibusdam ea optio! Consectetur
          obcaecati facilis esse reprehenderit ipsam, facere dolorem incidunt.
        </p>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-body-text hover:text-brand transition-colors duration-300"
          aria-label="Twitter"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
          </svg>
          Twitter
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-body-text hover:text-brand transition-colors duration-300"
          aria-label="Facebook"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          Facebook
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-body-text hover:text-brand transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Instagram
        </a>
      </div>
    </section>
  )
}
