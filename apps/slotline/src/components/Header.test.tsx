import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from '../components/Header'
import { chrome, nav } from '../content'

afterEach(() => {
  vi.restoreAllMocks()
})

function scrollTo(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
  Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 4000 })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

function placeSection(id: string, top: number) {
  const section = document.createElement('section')
  section.id = id
  section.getBoundingClientRect = () => ({ top }) as DOMRect
  document.body.appendChild(section)
  return section
}

describe('Header', () => {
  it('renders the wordmark, six labels and the plum CTA', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Slotline home' })).toHaveAttribute('href', '#top')
    const main = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const item of nav) {
      expect(within(main).getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }
    expect(screen.getByRole('link', { name: chrome.headerCta })).toHaveAttribute('href', '#contact')
  })

  it('lifts its shadow once the page has scrolled past 50 px', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header?.className).not.toContain('shadow-lg')

    scrollTo(120)
    expect(header?.className).toContain('shadow-lg')
  })

  it('opens and closes the mobile disclosure, and closes it on a label press', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: chrome.menuOpen })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: chrome.menuClose })).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(panel).getAllByRole('link')).toHaveLength(nav.length + 1)

    await user.click(within(panel).getByRole('link', { name: 'Pricing' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: chrome.menuOpen }))
    await user.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getAllByRole('link')[6] as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: chrome.menuOpen }))
    await user.click(screen.getByRole('button', { name: chrome.menuClose }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('marks the band under the header and ignores ids that do not exist', () => {
    const book = placeSection('book', 40)
    const availability = placeSection('availability', -600)
    render(<Header />)
    const main = screen.getByRole('navigation', { name: 'Main navigation' })

    scrollTo(10)
    expect(within(main).getByRole('link', { name: 'Availability' })).toHaveAttribute('aria-current', 'true')
    expect(within(main).getByRole('link', { name: 'Book' })).not.toHaveAttribute('aria-current')

    availability.getBoundingClientRect = () => ({ top: 400 }) as DOMRect
    book.getBoundingClientRect = () => ({ top: -300 }) as DOMRect
    scrollTo(20)
    expect(within(main).getByRole('link', { name: 'Book' })).toHaveAttribute('aria-current', 'true')

    book.remove()
    availability.remove()
    scrollTo(30)
    for (const item of nav) {
      expect(within(main).getByRole('link', { name: item.label })).not.toHaveAttribute('aria-current')
    }
  })
})
