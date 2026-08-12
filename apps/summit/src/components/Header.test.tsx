import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterAll, describe, expect, it } from 'vitest'
import { Header } from './Header'

const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY')

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Header', () => {
  it('renders the wordmark, uppercase menu and Get Tickets pill', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Summit home' })).toHaveTextContent('Summit')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('link', { name: /Speakers/i })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Get Tickets' })).toHaveAttribute(
      'href',
      '#tickets',
    )
  })

  it('turns solid black with a shadow once the page is scrolled', () => {
    render(<Header />)
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-black/80')
    setScrollY(300)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-black')
    expect(header.className).toContain('shadow-')
    setScrollY(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-black/80')
  })

  it('opens the Pages dropdown on hover and closes it on leave', () => {
    render(<Header />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const pagesLink = within(mainNav).getByRole('link', { name: /Pages/i })
    expect(screen.queryByRole('link', { name: 'Schedule' })).not.toBeInTheDocument()
    fireEvent.mouseEnter(pagesLink)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    fireEvent.mouseLeave(pagesLink)
    expect(screen.queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('closes the dropdown after picking an item', () => {
    render(<Header />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const pagesLink = within(mainNav).getByRole('link', { name: /Pages/i })
    fireEvent.mouseEnter(pagesLink)
    fireEvent.click(screen.getByRole('link', { name: 'Tickets' }))
    expect(screen.queryByRole('link', { name: 'Tickets' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with an aria-expanded hamburger', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    const ticketsLink = within(mobileNav).getByRole('link', { name: 'Get Tickets' })
    expect(ticketsLink).toHaveAttribute('href', '#tickets')
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu after tapping the Get Tickets link', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Get Tickets' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

afterAll(() => {
  if (originalScrollY) {
    Object.defineProperty(window, 'scrollY', originalScrollY)
  }
})
