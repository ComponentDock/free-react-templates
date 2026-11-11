import { useCallback, useState } from 'react'
import { GROUPS } from './content'

/** One flag per group; the table reads it as `hidden` on each row. */
export type OpenState = Record<string, boolean>

function initialState(narrow: boolean): OpenState {
  const state: OpenState = {}
  GROUPS.forEach((group, index) => {
    state[group.id] = narrow ? index === 0 : true
  })
  return state
}

/**
 * The table's only state. Load decides the starting point (everything open,
 * except on a phone where only the first group is), and nothing subscribes to
 * the viewport afterwards — the reference reads its breakpoint once, so a
 * desktop window dragged narrow keeps what the visitor already opened.
 */
export function useGroups(narrow: boolean) {
  const [open, setOpen] = useState<OpenState>(() => initialState(narrow))

  const toggle = useCallback((id: string) => {
    setOpen((previous) => ({ ...previous, [id]: !previous[id] }))
  }, [])

  const setAll = useCallback((value: boolean) => {
    setOpen(Object.fromEntries(GROUPS.map((group) => [group.id, value])))
  }, [])

  return {
    open,
    toggle,
    expandAll: useCallback(() => setAll(true), [setAll]),
    collapseAll: useCallback(() => setAll(false), [setAll]),
  }
}
