import { ButtonLink } from '@free-react-templates/ui'

/**
 * The announcement strip: a single violet band 135 px tall at desktop, pairing
 * the headline, the mint price and the mint action. Below the desktop
 * breakpoint it becomes a stacked column.
 */
export function CtaStrip() {
  return (
    <section id="news" className="scroll-mt-[124px] bg-plum-mid">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <div className="flex flex-col items-center py-[40px] pl-[5px] text-center min-[992px]:h-[135px] min-[992px]:flex-row min-[992px]:justify-between min-[992px]:py-0 min-[992px]:text-left">
          <h2 className="text-[36px] font-bold text-white max-[1199px]:text-[30px] max-[575px]:text-[24px]">
            Start building your site now
          </h2>

          <p className="mt-[11px] text-[48px] font-bold text-mint max-[1199px]:text-[36px] max-[575px]:text-[24px] min-[992px]:mt-0 min-[992px]:translate-y-[-8px]">
            <span className="text-[16px] font-bold max-[575px]:text-[14px]">from </span>$9.90
            <span className="text-[16px] font-bold max-[575px]:text-[14px]">/month</span>
          </p>

          <ButtonLink
            href="#contact"
            className="mt-[11px] h-[63px] w-[148px] rounded-[12px] bg-mint text-[16px] font-bold text-ink-on-mint hover:bg-plum-deep hover:text-white max-[575px]:h-[53px] max-[575px]:w-[140px] max-[575px]:text-[14px] min-[992px]:mt-0 min-[992px]:translate-y-[4px]"
          >
            Start now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
