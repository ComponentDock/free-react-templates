import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { DAYS, SCHEDULE, type TableVariant } from '../data/schedule'

/** Shared header-cell geometry: 12px medium uppercase, padding 24/20/25/10. */
const HEAD_BASE =
  'text-left text-[12px] font-medium uppercase leading-[1.4] text-headtext pt-6 pb-5 pl-[25px] pr-2.5'

/** Shared body-cell geometry: 14px normal, padding 18/14/25/10. */
const BODY_BASE =
  'text-left text-[14px] font-normal leading-[1.4] text-celltext pt-[18px] pb-3.5 pl-[25px] pr-2.5'

/** Name column geometry — double-width first column. */
const NAME_COL = 'w-[265px] pl-[42px]'

/** Day column geometry. */
const DAY_COL = 'w-[130px]'

interface VariantStyles {
  /** Outer wrapper (ver6: rounded gradient card shell). */
  shell: string
  /** Table background (ver6: transparent — gradient shows through). */
  table: string
  /** Header cell band background. */
  head: string
  /** Even-row stripe (ver2 mint / ver5 ice). */
  stripe: string
  /** Row separator (ver3 only — 1px light border under each tbody row). */
  rowBorder: string
  /** Text/body treatment on hovered row cells (per-version). */
  rowHover: string
  /** Header-cell treatment while its column is hovered (ver1–5 only). */
  colHead: string
  /** Body-cell treatment while its column is hovered (ver6 header too). */
  colBody: string
  /** Strongest treatment on the exact hovered cell (`:hover`). */
  cellHover: string
  /** Body text override (ver6: white cells on the gradient card). */
  bodyText: string
}

/**
 * Per-version treatment matrix. Token values captured from the source
 * snippet stylesheet — ver4/ver5 row hover is TEXT-ONLY (no background),
 * ver5 column/cell highlights are border overlays, and ver6 has NO
 * distinct head-highlight (its header cell joins the plain column class).
 */
const VARIANT_STYLES: Record<TableVariant, VariantStyles> = {
  ver1: {
    shell: '',
    table: 'bg-white',
    head: 'bg-ver1-head',
    stripe: '',
    rowBorder: '',
    rowHover: 'group-hover:bg-ver1-row',
    colHead: 'bg-ver1-colhead',
    colBody: 'bg-ver1-row',
    cellHover: 'hover:bg-ver1-cell! hover:text-headtext!',
    bodyText: '',
  },
  ver2: {
    shell: '',
    table: 'bg-white',
    head: 'bg-ver2-head',
    stripe: 'bg-ver2-stripe',
    rowBorder: '',
    rowHover: 'group-hover:bg-ver2-row group-hover:text-headtext',
    colHead: 'bg-ver2-colhead',
    colBody: 'bg-ver2-row text-headtext',
    cellHover: 'hover:bg-ver2-cell! hover:text-headtext!',
    bodyText: '',
  },
  ver3: {
    shell: '',
    table: 'bg-white',
    head: 'bg-ver3-head',
    stripe: '',
    rowBorder: 'border-b border-ver3-border',
    rowHover: 'group-hover:bg-ver3-row',
    colHead: 'bg-ver3-colhead',
    colBody: 'bg-ver3-row',
    cellHover: 'hover:bg-ver3-cell! hover:text-headtext!',
    bodyText: '',
  },
  ver4: {
    shell: '',
    table: 'bg-white',
    head: 'bg-ver4-head',
    stripe: '',
    rowBorder: '',
    rowHover: 'group-hover:text-ver4-head',
    colHead: 'bg-ver4-colhead',
    colBody: 'bg-ver4-col',
    cellHover: 'hover:bg-ver4-col! hover:text-ver4-head!',
    bodyText: '',
  },
  ver5: {
    shell: '',
    table: 'bg-white',
    head: 'bg-ver5-head',
    stripe: 'bg-ver5-stripe',
    rowBorder: '',
    rowHover: 'group-hover:text-ver5-accent',
    colHead: 'bg-ver5-colhead text-ver5-accent border-x border-ver5-side',
    colBody: 'text-ver5-accent border-x border-ver5-side',
    cellHover: 'hover:text-ver5-accent! hover:ring-1 hover:ring-ver5-accent',
    bodyText: '',
  },
  ver6: {
    shell: 'rounded-2xl bg-ver6-fallback bg-[linear-gradient(-68deg,#ac32e4,#4801ff)]',
    table: 'bg-transparent',
    head: 'bg-ver6-head',
    stripe: '',
    rowBorder: '',
    rowHover: 'group-hover:bg-ver6-row',
    colHead: '',
    colBody: 'bg-ver6-row',
    cellHover: 'hover:bg-ver6-cell!',
    bodyText: 'text-headtext',
  },
}

interface ScheduleTableProps {
  /** Which color treatment this table renders (ver1–ver6). */
  variant: TableVariant
}

/**
 * One weekly-schedule table with the three-strength crosshair: the whole
 * row highlights via CSS `:hover`, the whole column via React state
 * (hovered column tracked per table; wrapper `onMouseLeave` clears it),
 * and the exact cell gets the strongest per-version treatment. Hover is a
 * pointer-only cosmetic enhancement — cells are not focusable and all
 * data is fully readable statically.
 */
export function ScheduleTable({ variant }: ScheduleTableProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null)
  const styles = VARIANT_STYLES[variant]
  const onCellEnter = (col: number) => () => setHoveredColumn(col)

  /** Header-cell class while its column is hovered — ver6's header cell
   *  joins the plain column treatment (no distinct head rule exists). */
  const headHighlight = (col: number) =>
    hoveredColumn === col && (variant === 'ver6' ? styles.colBody : styles.colHead)

  return (
    <div
      className={cn('mb-[110px] overflow-x-auto', styles.shell)}
      onMouseLeave={() => setHoveredColumn(null)}
    >
      <table className={cn('w-full min-w-[1240px] border-collapse text-left', styles.table)}>
        <thead>
          <tr>
            <th
              scope="col"
              className={cn(HEAD_BASE, NAME_COL, styles.head, headHighlight(0))}
              onMouseEnter={onCellEnter(0)}
            >
              <span className="sr-only">Name</span>
            </th>
            {DAYS.map((day, i) => (
              <th
                key={day}
                scope="col"
                className={cn(HEAD_BASE, DAY_COL, styles.head, headHighlight(i + 1))}
                onMouseEnter={onCellEnter(i + 1)}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SCHEDULE.map((staff, rowIndex) => (
            <tr key={staff.name} className={cn('group', styles.rowBorder)}>
              <th
                scope="row"
                className={cn(
                  BODY_BASE,
                  NAME_COL,
                  styles.bodyText,
                  rowIndex % 2 === 1 && styles.stripe,
                  styles.rowHover,
                  hoveredColumn === 0 && styles.colBody,
                  styles.cellHover,
                )}
                onMouseEnter={onCellEnter(0)}
              >
                {staff.name}
              </th>
              {DAYS.map((day, i) => (
                <td
                  key={day}
                  className={cn(
                    BODY_BASE,
                    DAY_COL,
                    styles.bodyText,
                    rowIndex % 2 === 1 && styles.stripe,
                    styles.rowHover,
                    hoveredColumn === i + 1 && styles.colBody,
                    styles.cellHover,
                  )}
                  onMouseEnter={onCellEnter(i + 1)}
                >
                  {staff.times[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
