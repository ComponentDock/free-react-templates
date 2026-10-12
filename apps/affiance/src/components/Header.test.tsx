import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from './Header'
import { BRAND, NAV } from '../lib/site'

/** jsdom keeps `scrollY` at zero for ever, so the bar's threshold is driven by hand. */
function scrollTo(offset: number): void {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: offset })
  fireEvent.scroll(window)
}

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

describe('Header', () => {
  it('floats the transparent bar over the hero at the top of the page', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveClass('absolute', 'bg-brand', 'lg:bg-transparent')
    expect(screen.getByRole('link', { name: `${BRAND} — home` })).toHaveClass('text-white')
  })

  it('lists the design navigation and marks the first label current', () => {
    render(<Header />)

    const row = screen.getByRole('navigation', { name: 'Primary' })
    const links = Array.from(row.querySelectorAll('a'))

    expect(links.map((link) => link.textContent)).toEqual(NAV.map((item) => item.label))
    expect(links[0] as HTMLElement).toHaveAttribute('aria-current', 'page')
    expect(links[0] as HTMLElement).toHaveClass('text-brand')
    expect(links[1] as HTMLElement).not.toHaveAttribute('aria-current')
  })

  it('pins itself and turns black on pale pink once the page scrolls', () => {
    const { container } = render(<Header />)

    scrollTo(200)

    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveClass('fixed', 'bg-tint', 'shadow-nav')
    expect(screen.getByRole('link', { name: `${BRAND} — home` })).toHaveClass('text-black')
    expect(container.querySelector('button[aria-expanded]')).toHaveClass('text-black')

    scrollTo(10)

    expect(header).toHaveClass('absolute', 'lg:bg-transparent')
  })

  it('folds the labels into a panel that mounts only while it is open', () => {
    const { container } = render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#folded-menu')).toBeNull()

    fireEvent.click(toggle)

    const panel = container.querySelector('#folded-menu') as HTMLElement

    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(panel.querySelectorAll('a')).toHaveLength(NAV.length)

    fireEvent.click(panel.querySelectorAll('a')[3] as HTMLElement)

    expect(container.querySelector('#folded-menu')).toBeNull()
  })

  it('carries the eight labels into the folded panel', () => {
    const { container } = render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }))

    const panel = container.querySelector('#folded-menu') as HTMLElement

    expect(Array.from(panel.querySelectorAll('a')).map((link) => link.getAttribute('href'))).toEqual(
      NAV.map((item) => item.href),
    )
  })
})
