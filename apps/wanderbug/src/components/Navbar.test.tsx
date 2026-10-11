import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('renders the white header with wordmark, links, dropdown and phone CTA', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'top')
    expect(header).toHaveClass('bg-white')

    expect(screen.getByRole('link', { name: 'Wanderbug' })).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'Events' })).toHaveAttribute('href', '#events')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(within(nav).getByRole('button', { name: 'Blog' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    const phone = screen.getByRole('link', { name: '+10 (67) 678 2567' })
    expect(phone).toHaveAttribute('href', 'tel:+1067678256720')
  })

  it('opens the Blog dropdown on hover and on click', () => {
    render(<Navbar />)

    const blog = screen.getByRole('button', { name: 'Blog' })
    const blogItem = blog.parentElement as HTMLElement

    fireEvent.mouseOver(blogItem)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      '#testimonials',
    )
    expect(screen.getByRole('link', { name: 'Events Details' })).toHaveAttribute('href', '#events')
    expect(screen.getByRole('link', { name: 'Element' })).toHaveAttribute('href', '#faq')

    fireEvent.mouseOut(blogItem)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Element' })).not.toBeInTheDocument()

    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
  })

  it('leaves plain links alone when hovered', () => {
    render(<Navbar />)

    const home = within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', {
      name: 'Home',
    })
    fireEvent.mouseOver(home.parentElement as HTMLElement)
    fireEvent.mouseOut(home.parentElement as HTMLElement)

    expect(screen.getByRole('button', { name: 'Blog' })).toHaveAttribute('aria-expanded', 'false')
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
    expect(within(panel).getByRole('link', { name: 'Events' })).toHaveAttribute('href', '#events')
    expect(within(panel).getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      '#testimonials',
    )
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    const eventsLink = within(panel).getByRole('link', { name: 'Events' })
    eventsLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(eventsLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile' })
    const child = within(reopened).getByRole('link', { name: 'Element' })
    child.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(child)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('fixes a white bar with a shadow once the page is scrolled, and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'top')

    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'sticky')
    expect(header).toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'top')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
