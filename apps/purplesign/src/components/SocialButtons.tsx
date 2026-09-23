export function SocialButtons() {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[40px] border border-[var(--color-social-border)] bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-black hover:text-white hover:border-black"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
        Facebook
      </button>
      <button
        type="button"
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[40px] border border-[var(--color-social-border)] bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-black hover:text-white hover:border-black"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
        Twitter
      </button>
    </div>
  )
}
