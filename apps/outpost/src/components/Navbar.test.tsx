import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('renders the transparent header over the hero with wordmark, links, outlined button and search toggle', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    const brand = screen.getByRole('link', { name: 'outpost' })
    expect(brand).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'Packages' })).toHaveAttribute('href', '#packages')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(within(nav).getByRole('button', { name: 'Pages' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Trip' })).toHaveAttribute('href', '#newsletter')

    const searchToggle = screen.getByRole('button', { name: 'Toggle search' })
    expect(searchToggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the Pages and Blog dropdowns on hover and on click', () => {
    render(<Navbar />)

    const pages = screen.getByRole('button', { name: 'Pages' })
    const pagesItem = pages.parentElement as HTMLElement
    expect(pages).toHaveAttribute('aria-expanded', 'false')

    fireEvent.mouseOver(pagesItem)
    expect(pages).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Book trip' })).toHaveAttribute('href', '#newsletter')
    expect(screen.getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#places')

    fireEvent.mouseOut(pagesItem)
    expect(pages).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument()

    const blog = screen.getByRole('button', { name: 'Blog' })
    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      '#newsletter',
    )
    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
  })

  it('leaves plain links alone when hovered', () => {
    render(<Navbar />)

    const home = within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', {
      name: 'Home',
    })
    const homeItem = home.parentElement as HTMLElement
    fireEvent.mouseOver(homeItem)
    fireEvent.mouseOut(homeItem)

    expect(screen.getByRole('button', { name: 'Pages' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes the search overlay', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    const input = screen.getByPlaceholderText('Search Here')
    expect(input).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle search' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    fireEvent.submit(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByPlaceholderText('Search Here')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText('Search Here')).not.toBeInTheDocument()
  })

  it('toggles the mobile panel and closes it from a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(panel).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(within(panel).getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#places')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const homeLink = within(panel).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile' })
    const childLink = within(reopened).getByRole('link', { name: 'Elements' })
    childLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(childLink)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('fixes a black bar on scroll and removes the listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
