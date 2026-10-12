import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuList } from './MenuList'
import { MenuRow } from './MenuRow'
import { ROWS } from '../lib/site'
import { menuLabelClass, menuListClass, menuRowClass } from '../lib/styles'

describe('MenuList — the rail’s six labels', () => {
  it('stacks every label the model declares, in the model’s own order', () => {
    render(<MenuList onNavigate={() => {}} />)

    const list = screen.getByTestId('rail-menu')

    expect(list.tagName).toBe('UL')
    expect(list.className).toBe(menuListClass)
    expect(within(list).getAllByRole('listitem')).toHaveLength(ROWS.length)
    expect(
      within(list)
        .getAllByRole('link')
        .map((row) => row.textContent),
    ).toEqual(ROWS.map((row) => row.label))
    expect(
      within(list)
        .getAllByRole('link')
        .map((row) => row.getAttribute('href')),
    ).toEqual(ROWS.map((row) => row.href))
  })

  it('hands the drawer back when a label is followed', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<MenuList onNavigate={onNavigate} />)

    const first = within(screen.getByTestId('rail-menu')).getAllByRole(
      'link',
    )[0] as HTMLAnchorElement

    // A native listener runs ahead of React's delegated one, so the in-page hash never navigates
    // while the row's own handler still fires.
    first.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(first)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})

describe('MenuRow — one label and the rule that rests under it', () => {
  it('drops the design’s own row pitch: 22px on a 1.5 line, 10px of air under it', () => {
    render(<MenuRow row={ROWS[0]!} onNavigate={() => {}} />)

    const row = screen.getByRole('listitem')

    expect(row.className).toBe(menuRowClass)
    expect(row.className).toContain('mb-[10px]')
    expect(row.className).toContain('text-[22px]')
    expect(row.className).toContain('font-medium')
    expect(row.className).toContain('last:mb-0')
  })

  it('marks the block the page is on, and only that one', () => {
    render(<MenuList onNavigate={() => {}} />)

    const rows = within(screen.getByTestId('rail-menu')).getAllByRole('link')
    const current = rows.filter((row) => row.getAttribute('aria-current') === 'page')

    expect(current).toHaveLength(1)
    expect(current[0]).toBe(rows[0])
  })

  it('paints the current label coral and leaves every other one black', () => {
    render(<MenuList onNavigate={() => {}} />)

    const rows = within(screen.getByTestId('rail-menu')).getAllByRole('link')
    const holds = (row: Element, token: string) =>
      new RegExp(`(^|\\s)${token}(\\s|$)`).test(row.className)

    expect(rows[0]?.className).toBe(menuLabelClass(true))
    expect(holds(rows[0]!, 'text-accent')).toBe(true)
    expect(holds(rows[0]!, 'after:visible')).toBe(true)
    expect(holds(rows[0]!, 'after:scale-x-100')).toBe(true)

    for (const row of rows.slice(1)) {
      expect(row.className).toBe(menuLabelClass(false))
      expect(holds(row, 'text-label')).toBe(true)
      expect(holds(row, 'text-accent')).toBe(false)
      expect(holds(row, 'after:invisible')).toBe(true)
      expect(holds(row, 'after:scale-x-0')).toBe(true)
    }
  })

  it('carries the 2px coral rule that wipes in from the left, under every label', () => {
    render(<MenuList onNavigate={() => {}} />)

    for (const row of within(screen.getByTestId('rail-menu')).getAllByRole('link')) {
      expect(row.className).toContain('after:absolute')
      expect(row.className).toContain('after:bottom-[7px]')
      expect(row.className).toContain('after:h-[2px]')
      expect(row.className).toContain('after:bg-accent')
      expect(row.className).toContain('after:origin-left')
      expect(row.className).toContain('after:duration-300')
      expect(row.className).toContain('after:ease-underline')
      expect(row.className).toContain('hover:after:visible')
      expect(row.className).toContain('hover:after:scale-x-100')
      // The design strips outlines on focus; the ring the recreation keeps is a documented delta.
      expect(row.className).toContain('focus-visible:outline-accent')
    }
  })

  it('has the rule hidden until the label is hovered or current, never a colour fade', () => {
    render(<MenuList onNavigate={() => {}} />)

    const rows = within(screen.getByTestId('rail-menu')).getAllByRole('link')
    const holds = (row: Element, token: string) =>
      new RegExp(`(^|\\s)${token}(\\s|$)`).test(row.className)

    for (const row of rows) {
      expect(row.className).toContain('after:transition-all')

      // Exactly one of the two states: the rule rests wiped away, or the current row holds it.
      expect(holds(row, 'after:scale-x-0') !== holds(row, 'after:scale-x-100')).toBe(true)
      expect(holds(row, 'after:bg-transparent')).toBe(false)
    }
  })

  it('hands the drawer back when the label itself is followed', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<MenuRow row={ROWS[2]!} onNavigate={onNavigate} />)

    const row = screen.getByRole('link') as HTMLAnchorElement

    expect(row).toHaveAttribute('href', '#charts')
    expect(row).not.toHaveAttribute('aria-current')

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
