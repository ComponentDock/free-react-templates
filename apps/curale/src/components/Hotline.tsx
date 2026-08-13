import { hotline } from '../data'

/** Full-width emergency hotline band: cover background image under a
 *  blue→cyan gradient overlay, white h2, large Roboto-900 phone number
 *  and support copy. */
export function Hotline() {
  return (
    <section
      className="relative bg-cover bg-center py-[130px] text-center"
      style={{ backgroundImage: `url(${hotline.image})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top right, rgba(36,76,253,0.9), rgba(21,228,253,0.9))',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-[30px] font-bold text-white md:text-[36px]">{hotline.heading}</h2>
        <p className="mb-4 text-[56px] font-black leading-none text-white md:text-[56px]">
          {hotline.phone}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/90">
          {hotline.copy}
        </p>
      </div>
    </section>
  )
}
