import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand and all nav links with Home as the current link', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Esquire' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      // The Blog link appears twice: top-level and as a submenu item.
      const links = screen.getAllByRole('link', { name: link.label })
      expect(links.length).toBeGreaterThanOrEqual(1)
      expect(links[0]).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders circular social icon links (desktop)', () => {
    render(<Navbar />)

    for (const social of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }
  })

  it('expands the Blog dropdown submenu on hover', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    const blog = screen.getAllByRole('link', { name: 'Blog' })[0]!
    // Capture the submenu BEFORE hovering: once open, tailwind-merge drops
    // the `invisible` class, so a post-hover lookup would match the still
    // closed Pages submenu instead.
    const submenu = Array.from(container.querySelectorAll('ul')).find((ul) =>
      ul.className.includes('invisible'),
    )!

    await user.hover(blog)

    expect(submenu.className).toContain('opacity-100')
    expect(screen.getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()

    await user.unhover(blog)
    expect(submenu.className).not.toContain('opacity-100')
  })

  it('toggles the mobile menu with the Menu button and closes on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a top-level link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    // jsdom hash-navigation races with the React handler and can drop the
    // test from the suite — neutralize navigation with a native listener.
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a submenu item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const singleBlogLinks = screen.getAllByRole('link', { name: 'Single Blog' })
    const mobileLink = singleBlogLinks[singleBlogLinks.length - 1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
