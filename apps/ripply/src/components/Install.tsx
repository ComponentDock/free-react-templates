import { Download, Smartphone } from 'lucide-react'

/* Install band (source: .install_app_area with the #ede6fd → #d2e6fd
   gradient and two Montserrat pill buttons). */
export function Install() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_right,#ede6fd,#d2e6fd)] px-[15px] py-[100px] text-center">
      <div className="mx-auto max-w-[760px]">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          Now Install Available On
        </h2>
        <h4 className="mt-4 text-[20px] font-medium text-ink">Create Your Apps Galary</h4>
        <p className="mt-4 text-[14px] leading-relaxed text-body">
          Grab Ripply from your favorite store and start building your app landing page today — no
          coding required.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-body">
          Compatible with Android and iOS devices, with regular updates and friendly support
          included.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex h-[55px] w-[200px] items-center justify-center gap-2 rounded-[27.5px] bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] font-display text-[18px] text-white"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Android
          </a>
          <a
            href="#"
            className="inline-flex h-[55px] w-[200px] items-center justify-center gap-2 rounded-[27.5px] border-2 border-[#9bccfc] bg-transparent font-display text-[18px] text-[#5a5f8f]"
          >
            <Smartphone className="h-5 w-5" aria-hidden="true" />
            App Store
          </a>
        </div>
      </div>
    </section>
  )
}
