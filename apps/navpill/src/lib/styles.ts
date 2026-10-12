import { cn } from '@free-react-templates/ui'

/** How deep a row sits inside the off-canvas panel (20px / 16px / 16px scales). */
export type PanelLevel = 1 | 2 | 3

/**
 * A header row label: white 16px text inside an inline span at 5px/20px padding
 * with a 30px radius. It fills #007bff on hover and on keyboard focus, and ships
 * already filled on the current item. `hasChildren` widens the right padding to
 * 30px so the chevron has room, which is why the string is assembled rather than
 * merged: `cn('px-5', 'pr-[30px]')` drops the left padding.
 */
export function navLabelClass(pill: boolean, hasChildren: boolean): string {
  const spacing = hasChildren ? 'px-5 pr-[30px]' : 'px-5'

  return `group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white group-focus-visible:ring-2 group-focus-visible:ring-white/70 relative inline-block rounded-[30px] py-[5px] transition-all duration-300 ease-[ease] ${spacing}${
    pill ? ' bg-accent text-white' : ''
  }`
}

const DROPDOWN_ROW_SHAPE =
  'w-full px-5 py-[9px] text-[16px] leading-[1.5] text-left transition-none hover:bg-row-hover focus-visible:bg-row-hover focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent'

/**
 * A row inside the dropdown panel: a white surface, #343a40 text on a 9px/20px
 * block row that takes the light #fafafb wash on hover/focus, and #007bff when it
 * is the current destination. The tone is chosen rather than merged so the
 * assembled string is exact.
 */
export function dropdownRowClass(current: boolean): string {
  return `block ${DROPDOWN_ROW_SHAPE} ${current ? 'text-accent' : 'text-row'}`
}

/**
 * The dropdown trigger of a row that opens a second panel: the same row shape as
 * a leaf row, with its label at the left and a right chevron pushed to the far
 * edge.
 */
export function dropdownTriggerClass(current: boolean): string {
  return cn(dropdownRowClass(current), 'flex items-center justify-between gap-3')
}

const PANEL_ROW_SCALE: Record<PanelLevel, string> = {
  1: 'pl-5 text-[20px]',
  2: 'pl-10 text-[16px]',
  3: 'pl-[60px] text-[16px]',
}

/**
 * A row inside the off-canvas panel: a block row at 10px/20px padding in ink,
 * turning #007bff on hover/focus, indented and scaled by its depth (20px / 40px /
 * 60px padding-left at 20px / 16px / 16px type), and already #007bff when it is
 * the current destination.
 */
export function panelRowClass(level: PanelLevel, current: boolean): string {
  return `block py-[10px] pr-5 transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${PANEL_ROW_SCALE[level]} ${
    current ? 'text-accent' : 'text-ink'
  }`
}

/** The step down the tree: top level rows indent to 40px, then everything to 60px. */
export function panelChildLevel(level: PanelLevel): PanelLevel {
  return level === 1 ? 2 : 3
}

/**
 * The round 36x36 sub-row expander: absolutely positioned in the row's top-right
 * corner, taking the light #f8f9fa wash on hover, holding a 12px chevron that
 * points down while the row is collapsed and up once it is expanded.
 */
export function expanderClass(expanded: boolean): string {
  return `absolute top-[10px] right-0 z-20 flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-soft focus-visible:bg-soft focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent${
    expanded ? ' bg-soft' : ''
  }`
}

/** The chevron inside a row expander: down while collapsed, up while expanded. */
export function expanderIconClass(expanded: boolean): string {
  return `h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`
}
