/* Photo band recreated from the source's full-screen site-section-cover:
   an empty band filling the viewport with a single full-bleed cover photo
   and no content. */

export function PhotoBand() {
  return (
    <section
      aria-label="Office team"
      className="h-screen min-h-[755px] w-full bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/meridian-team/1600/900)' }}
    />
  )
}
