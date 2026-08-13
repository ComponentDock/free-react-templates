import { cn } from '@free-react-templates/ui'
import { gallery } from '../data'

/** "Our Medical Camp" photo mosaic: two columns — one big 690px image
 *  above two small 330px ones (and mirrored), with a dark overlay +
 *  zoom-out hover effect. */
export function Gallery() {
  const [leftBig, leftSmall1, leftSmall2, rightSmall1, rightSmall2, rightBig] = gallery.images

  const renderImage = (image: { src: string; alt: string; big: boolean }) => (
    <div className="group relative overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className={cn(
          'w-full object-cover transition-transform duration-500 group-hover:scale-100',
          image.big ? 'h-[330px] scale-[1.06] lg:h-[690px]' : 'h-[330px] scale-[1.06]',
        )}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(1,10,28,0.3)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  )

  return (
    <section className="bg-white py-24 md:py-[110px]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="inline-flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
            {gallery.kicker}
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
            {gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {leftBig && renderImage(leftBig)}
            {leftSmall1 && renderImage(leftSmall1)}
            {leftSmall2 && renderImage(leftSmall2)}
          </div>
          <div className="flex flex-col gap-6">
            {rightSmall1 && renderImage(rightSmall1)}
            {rightSmall2 && renderImage(rightSmall2)}
            {rightBig && renderImage(rightBig)}
          </div>
        </div>
      </div>
    </section>
  )
}
