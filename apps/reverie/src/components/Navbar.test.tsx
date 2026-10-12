import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import {
  BRAND,
  CURRENT_NAV_LABEL,
  MENU_CLOSE_LABEL,
  MENU_OPEN_LABEL,
  SEARCH_OPEN_LABEL,
  SECTION_IDS,
} from '../lib/site'

function renderNavbar() {
  const searchButton = createRef<HTMLButtonElement>()
  const onOpenSearch = vi.fn()
  const utils = render(<Navbar searchButton={searchButton} onOpenSearch={onOpenSearch} />)

  return { ...utils, searchButton, onOpenSearch }
}

describe('Navbar', () => {
  it('renders the wordmark, the six destinations and the current-item dot', () => {
    renderNavbar()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${BRAND} — back to the top` })).toHaveTextContent(
      BRAND,
    )

    const row = screen.getByRole('navigation', { name: 'Primary' })

    expect(within(row).getAllByRole('link')).toHaveLength(5)
    expect(within(row).getAllByRole('button')).toHaveLength(1)
    expect(
      [CURRENT_NAV_LABEL, 'Services', 'Portfolio', 'News', 'Contact'].map((label) =>
        within(row).getByRole('link', { name: label }).getAttribute('href'),
      ),
    ).toEqual([
      `#${SECTION_IDS.home}`,
      `#${SECTION_IDS.services}`,
      `#${SECTION_IDS.portfolio}`,
      `#${SECTION_IDS.news}`,
      `#${SECTION_IDS.contact}`,
    ])
    expect(
      within(row).getByRole('link', { name: CURRENT_NAV_LABEL }).querySelector('span'),
    ).toHaveClass('bg-nav')
    expect(within(row).getByRole('link', { name: 'News' }).querySelector('span')).toBeNull()
  })

  it('opens the Pages panel on hover, on click and on focus, and closes it three ways', () => {
    const { container } = renderNavbar()
    const trigger = screen.getByRole('button', { name: 'Pages' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(within(container).getByRole('button', { name: 'Pages' })).toBe(trigger)

    fireEvent.mouseEnter(trigger.parentElement as HTMLElement)
    fireEvent.focusIn(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      `#${SECTION_IDS.portfolio}`,
    )
    expect(screen.getByRole('link', { name: 'Team' })).toHaveAttribute(
      'href',
      `#${SECTION_IDS.services}`,
    )
    expect(screen.getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      `#${SECTION_IDS.news}`,
    )

    fireEvent.keyDown(document, { key: 'ArrowDown' })

    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument()

    fireEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseLeave(trigger.parentElement as HTMLElement)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#reverie-pages-panel')).toBeNull()
  })

  it('folds the row into a toggle below the design own breakpoint', () => {
    renderNavbar()
    const toggle = screen.getByRole('button', { name: MENU_OPEN_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('#reverie-folded-menu')).toBeNull()

    fireEvent.click(toggle)

    const panel = document.querySelector('#reverie-folded-menu') as HTMLElement

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: MENU_CLOSE_LABEL })).toBe(toggle)
    expect(within(panel).getAllByRole('link')).toHaveLength(8)
    expect(within(panel).getByText('Pages')).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      `#${SECTION_IDS.news}`,
    )

    fireEvent.click(within(panel).getByRole('link', { name: 'Contact' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('#reverie-folded-menu')).toBeNull()
  })

  it('keeps the four marks inside the page and hands the magnifier its own handler', () => {
    const { container, onOpenSearch } = renderNavbar()
    const header = screen.getByRole('banner')

    expect(container.querySelectorAll('svg')).toHaveLength(7)

    const marks = within(header).getAllByRole('link', { name: new RegExp(`^${BRAND} on`) })

    expect(marks).toHaveLength(4)
    expect(marks.map((mark) => mark.getAttribute('href'))).toEqual([
      `#${SECTION_IDS.contact}`,
      `#${SECTION_IDS.contact}`,
      `#${SECTION_IDS.contact}`,
      `#${SECTION_IDS.contact}`,
    ])

    fireEvent.click(screen.getByRole('button', { name: SEARCH_OPEN_LABEL }))

    expect(onOpenSearch).toHaveBeenCalledTimes(1)
  })
})
