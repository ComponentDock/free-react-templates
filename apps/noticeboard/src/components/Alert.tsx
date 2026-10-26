import type { CSSProperties } from 'react'
import { CircleCheck, Info, OctagonX, TriangleAlert } from 'lucide-react'
import { SEVERITY_TOKENS, type Notice, type Severity } from '../data/alerts'

/** One outline glyph per severity — circle-i, circle-check, triangle-!, octagon-×. */
const GLYPHS: Record<Severity, typeof Info> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: OctagonX,
}

interface AlertProps {
  notice: Notice
}

/**
 * One notice: a 22 px icon column and a text column, 18 × 16 insets, a 12 px
 * radius and a 1 px hairline in the severity's own line colour. The four token
 * colours arrive as custom properties so the title can stay darker than the
 * accent. Below 480 the card tightens to 14 px insets and a 12 px gap — the
 * panel above it does not move.
 */
export function Alert({ notice }: AlertProps) {
  const tokens = SEVERITY_TOKENS[notice.severity]
  const Glyph = GLYPHS[notice.severity]
  const vars = {
    '--bg': tokens.bg,
    '--line': tokens.line,
    '--title': tokens.title,
    '--accent': tokens.accent,
  } as CSSProperties

  return (
    <div
      role={notice.role}
      data-severity={notice.severity}
      style={vars}
      className="grid grid-cols-[22px_1fr] items-start gap-[14px] rounded-xl border border-[var(--line)] bg-[var(--bg)] px-[18px] py-4 shadow-[0_1px_2px_rgba(17,24,39,.04)] alert-compact:gap-3 alert-compact:p-[14px]"
    >
      <Glyph
        aria-hidden="true"
        focusable="false"
        size={22}
        strokeWidth={2}
        className="mt-px block flex-none text-[var(--accent)]"
      />
      <div>
        <p className="m-0 text-[15px] leading-[1.5] font-semibold text-[var(--title)]">
          {notice.title}
        </p>
        <p className="mt-[3px] mr-0 mb-0 ml-0 text-[14px] leading-[1.5] text-[#374151]">
          {notice.text}
        </p>
      </div>
    </div>
  )
}
