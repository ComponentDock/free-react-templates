import { cn } from '@free-react-templates/ui'

/** How deep a row sits inside the off-canvas panel (20px / 16px / 16px scales). */
export type PanelLevel = 1 | 2 | 3

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent'

/**
 * A row label in the header: bare 16px text at 20px vertical padding that takes
 * no underline, no background and no border from the reference — it only turns
 * accent on hover and on keyboard focus, over .3s. A label that opens a panel
 * widens its right padding to 20px so the chevron has room.
 */
export function barLabelClass(hasChildren: boolean, current: boolean): string {
  return cn(
    'group relative inline-block py-5 text-[16px] transition-colors duration-300 hover:text-accent',
    hasChildren && 'pr-[20px]',
    current ? 'text-accent' : 'text-black',
    FOCUS_RING,
  )
}

/**
 * A row inside a dropdown panel: a white surface, black 16px text at 9px/20px
 * padding, taking the light #f8f9fa wash with #ced4da text on hover/focus and
 * drawn already accent (on the wash) when it is the current destination.
 */
export function dropdownRowClass(current: boolean): string {
  return cn(
    'block w-full px-5 py-[9px] text-left text-[16px] leading-[1.5] transition-none hover:bg-soft hover:text-muted',
    'focus-visible:bg-soft focus-visible:text-muted',
    FOCUS_RING,
    current ? 'bg-soft text-accent' : 'text-black',
  )
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
 * turning accent on hover/focus, indented and scaled by its depth (20px / 40px /
 * 60px padding-left at 20px / 16px / 16px type), and already accent when it is
 * the current destination.
 */
export function panelRowClass(level: PanelLevel, current: boolean): string {
  return `block py-[10px] pr-5 transition-colors duration-300 hover:text-accent ${PANEL_ROW_SCALE[level]} ${
    current ? 'text-accent' : 'text-ink'
  } focus-visible:text-accent ${FOCUS_RING}`
}

/** The step down the tree: top level rows indent to 40px, then everything to 60px. */
export function panelChildLevel(level: PanelLevel): PanelLevel {
  return level === 1 ? 2 : 3
}

/**
 * The round 36x36 sub-row expander: absolutely positioned in the row's top-right
 * corner, taking the light #f8f9fa wash on hover, holding a 12px chevron that
 * points up while the row is collapsed and down once it is expanded.
 */
export function expanderClass(expanded: boolean): string {
  return `absolute top-[10px] right-0 z-20 flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-soft ${FOCUS_RING}${
    expanded ? ' bg-soft' : ''
  }`
}

/** The chevron inside a row expander: up while collapsed, down while expanded. */
export function expanderIconClass(expanded: boolean): string {
  return `h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-0' : 'rotate-180'}`
}

/** A utility-bar link: #666666 text that warms to #007bff, with no underline. */
export function topBarLinkClass(): string {
  return cn('inline-flex items-center transition-colors duration-300 hover:text-accent', FOCUS_RING)
}
