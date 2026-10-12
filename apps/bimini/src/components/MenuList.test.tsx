import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { MenuList } from './MenuList'
import { ROWS } from '../lib/site'
import {
  menuLabelClass,
  menuLabelTextClass,
  menuListClass,
  menuRowClass,
} from '../lib/styles'

describe('MenuList — the labels the sheet stacks down the middle', () => {
  it('pitches the four labels in the design’s own order, with the current row first', () => {
    const { container } = render(<MenuList onNavigate={() => {}} />)

    const list = screen.getByTestId('sheet-menu')

    expect(list.tagName).toBe('UL')
    expect(list.className).toBe(menuListClass)
    expect(list.className).toContain('list-none')
    expect(list.className).toContain('p-0')
    expect(list.className).toContain('max-md:pt-5')

    const rows = Array.from(container.querySelectorAll('li'))

    expect(rows).toHaveLength(ROWS.length)
    expect(rows.map((row) => row.textContent)).toEqual(ROWS.map((row) => row.label))

    for (const [index, row] of rows.entries()) {
      expect(row.className).toBe(menuRowClass)
      expect(row.className).toContain('text-[14px]')
      expect(row.className).toContain('font-semibold')
      expect(row.className).toContain('tracking-[5px]')
      expect(row.className).toContain('leading-[1.8]')
      expect(row.getAttribute('data-testid')).toBe(`row-${ROWS[index]?.href.slice(1)}`)
    }

    expect(rows[0]?.querySelector('a')?.className).toBe(menuLabelClass(true))
    expect(rows[0]?.querySelector('a')?.className).toContain('text-current-row')
    expect(rows[0]?.querySelector('span')?.className).toBe(menuLabelTextClass)
    expect(rows[0]?.querySelector('span')?.className).toContain('menu-label-hairline')
    expect(rows[0]?.querySelector('span')?.className).toContain('px-[10px]')

    expect(rows[1]?.querySelector('a')?.className).toBe(menuLabelClass(false))
    expect(rows[1]?.querySelector('a')?.className).toContain('text-on-dark')
    expect(rows[1]?.querySelector('span')?.className).toBe(menuLabelTextClass)
  })

  it('marks the current row with aria-current, keeping the design’s gold on it alone', () => {
    const { container } = render(<MenuList onNavigate={() => {}} />)

    const current = Array.from(container.querySelectorAll('a[aria-current="page"]'))

    expect(current).toHaveLength(1)
    expect(current[0]?.textContent).toBe(ROWS[0]?.label)
    expect(current[0]?.className).not.toContain('text-accent')
    expect(container.querySelectorAll('a[aria-current="page"] .menu-label-hairline')).toHaveLength(1)
    expect(container.querySelectorAll('.menu-label-hairline')).toHaveLength(ROWS.length)
  })

  it('hands every label a real destination and closes the sheet behind it', () => {
    const onNavigate = vi.fn()

    render(<MenuList onNavigate={onNavigate} />)

    const links = screen.getAllByRole('link', { hidden: true })

    expect(links.map((link) => link.getAttribute('href'))).toEqual(ROWS.map((row) => row.href))
    expect(links.some((link) => link.getAttribute('href') === '#')).toBe(false)

    links[0]?.click()
    links[1]?.click()

    expect(onNavigate).toHaveBeenCalledTimes(2)
  })

  it('renders a list nothing is asked to keep a ref to', () => {
    const { container } = render(<MenuList onNavigate={() => {}} />)

    expect(container.querySelector('nav')).toBeNull()
    expect(createRef<HTMLUListElement>().current).toBeNull()
  })
})
