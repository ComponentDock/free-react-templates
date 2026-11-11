import { Sparkle } from 'lucide-react'
import { PORTRAIT, STATUS } from '../data/site'

/**
 * The arch: a 4:5 frame with a full top radius and a 28 px bottom one, holding a
 * square photograph cropped to `50% 30%`. The star sticker overhangs the frame's
 * right edge by 22 px and the status pill straddles its foot — both are
 * positioned against this block, which is why it is the positioning context.
 */
export function PortraitPanel() {
  return (
    <div className="bv-portrait">
      <div className="bv-frame">
        <img
          className="bv-img"
          src={PORTRAIT.src}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          alt={PORTRAIT.alt}
        />
      </div>

      <p className="bv-status">
        <span className="bv-pulse" aria-hidden="true" />
        {STATUS}
      </p>

      <span className="bv-sticker" aria-hidden="true">
        <Sparkle size={30} strokeWidth={0} fill="currentColor" />
      </span>
    </div>
  )
}
