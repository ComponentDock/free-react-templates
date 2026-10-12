import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  ACTIVE_NAV_LABEL,
  BRAND,
  MENU_CLOSE_LABEL,
  MENU_ID,
  MENU_TOGGLE_LABEL,
  NAV_ITEMS,
  SECTION_IDS,
  submenuLabel,
} from '../lib/site'

const storyRow = () => screen.getByRole('link', { name: 'Our Story' })
const storyItem = () => storyRow().closest('li') as HTMLElement
const foldedPanel = () => document.getElementById(MENU_ID) as HTMLElement

describe('Header', () => {
  it('floats the bar over the cover with the wordmark and the five tracked rows', () => {
    render(<Header />)

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('absolute', 'top-[20px]', 'z-[1000]')
    expect(header).toHaveClass('max-md:top-0')
    expect(screen.getByRole('link', { name: BRAND })).toHaveAttribute('href', `#${SECTION_IDS.home}`)
    expect(within(screen.getByRole('banner')).queryByRole('heading')).not.toBeInTheDocument()

    const rows = within(screen.getByRole('navigation', { name: 'Primary' })).getAllByRole('link')

    expect(rows).toHaveLength(5)
    expect(rows.map((row) => row.textContent)).toEqual(
      NAV_ITEMS.map((item) => item.label),
    )
    expect(rows[0]).toHaveClass('border-brand')
    expect(rows[0]).toHaveAttribute('aria-current', 'page')
    expect(rows[1]).toHaveClass('hover:border-brand')
    expect(rows[1]).not.toHaveAttribute('aria-current')
    expect(rows.map((row) => row.getAttribute('href'))).toEqual(
      NAV_ITEMS.map((item) => item.href),
    )
    expect(ACTIVE_NAV_LABEL).toBe('Home')
  })

  it('leaves no dead or foreign anchor anywhere in the bar', () => {
    const { container } = render(<Header />)

    const hrefs = [...container.querySelectorAll('a')].map((anchor) => anchor.getAttribute('href'))

    expect(hrefs.every((href) => (href as string).startsWith('#'))).toBe(true)
    expect(hrefs).not.toContain('#!')
  })

  it('opens the story panel on hover and closes it when the pointer leaves the row', () => {
    render(<Header />)

    fireEvent.mouseEnter(storyItem())

    expect(storyRow()).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Featured' })).toBeInTheDocument()

    fireEvent.mouseLeave(storyItem())

    expect(storyRow()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Featured' })).not.toBeInTheDocument()
  })

  it('opens on click and on focus, and Escape closes it without reopening', () => {
    render(<Header />)

    fireEvent.click(storyRow())

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument()
    expect(storyRow()).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focusIn(storyRow())

    expect(storyRow()).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()

    // A key that is not Escape leaves the panel alone.
    fireEvent.keyDown(document, { key: 'Tab' })

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument()
  })

  it('opens the panel second level to the right of the row that owns it', () => {
    render(<Header />)

    fireEvent.mouseEnter(storyItem())

    const categoriesItem = screen.getByRole('link', { name: 'Categories' }).closest('li') as HTMLElement

    expect(screen.getAllByRole('link', { name: 'Featured' })).toHaveLength(1)

    fireEvent.mouseEnter(categoriesItem)

    expect(screen.getAllByRole('link', { name: 'Featured' })).toHaveLength(2)

    const nested = screen.getAllByRole('link', { name: 'Featured' })[1]?.closest('ul') as HTMLElement

    expect(nested).toHaveClass('left-full')
    expect(screen.getAllByRole('link', { name: 'Categories' })[0]).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseLeave(storyItem())

    expect(screen.queryByRole('link', { name: 'Featured' })).not.toBeInTheDocument()
  })

  it('folds the rows into a toggleable panel below the design breakpoint', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', MENU_ID)
    expect(document.getElementById(MENU_ID)).toBeNull()

    fireEvent.click(toggle)

    const panel = foldedPanel()

    expect(panel).toBeInTheDocument()
    expect(screen.getByRole('button', { name: MENU_CLOSE_LABEL })).toHaveAttribute('aria-expanded', 'true')
    expect(within(panel).getAllByRole('link')).toHaveLength(5)
    expect(within(panel).queryByRole('link', { name: 'Featured' })).not.toBeInTheDocument()
  })

  it('walks the folded panel through all three levels', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: MENU_TOGGLE_LABEL }))

    const panel = foldedPanel()
    const storyToggle = within(panel).getByRole('button', { name: submenuLabel('Our Story', false) })

    fireEvent.click(storyToggle)

    expect(within(panel).getByRole('button', { name: submenuLabel('Our Story', true) })).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Featured' })).toHaveClass('pl-[25px]')
    expect(within(panel).getAllByRole('link')).toHaveLength(8)

    fireEvent.click(within(panel).getByRole('button', { name: submenuLabel('Categories', false) }))

    const secondLevel = within(panel).getAllByRole('link', { name: 'Featured' })

    expect(secondLevel).toHaveLength(2)
    expect(secondLevel[1]).toHaveClass('pl-[35px]')
    expect(within(panel).getAllByRole('link')).toHaveLength(11)
  })

  it('closes the folded panel again from the toggle and mounts nothing while it is shut', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: MENU_TOGGLE_LABEL }))
    fireEvent.click(within(foldedPanel()).getByRole('button', { name: submenuLabel('Our Story', false) }))

    expect(within(foldedPanel()).getByRole('link', { name: 'Featured' })).toBeInTheDocument()

    fireEvent.click(within(foldedPanel()).getByRole('button', { name: submenuLabel('Our Story', true) }))

    expect(within(foldedPanel()).queryByRole('link', { name: 'Featured' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: MENU_CLOSE_LABEL }))

    expect(document.getElementById(MENU_ID)).toBeNull()
    expect(screen.getByRole('button', { name: MENU_TOGGLE_LABEL })).toHaveAttribute('aria-expanded', 'false')
  })
})
