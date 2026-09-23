import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand link and all desktop nav links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: BRAND })).toHaveAttribute('href', '#home')

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders the Blog submenu items when hovering the Blog link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogLink = screen.getAllByRole('link', { name: 'Blog' })[0]!
    await user.hover(blogLink)

    expect(screen.getByRole('link', { name: 'Blog Post' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
  })

  it('hides the Blog submenu after unhovering', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogLink = screen.getAllByRole('link', { name: 'Blog' })[0]!
    await user.hover(blogLink)
    expect(screen.getByRole('link', { name: 'Blog Post' })).toBeInTheDocument()

    await user.unhover(blogLink)
    expect(screen.queryByRole('link', { name: 'Blog Post' })).not.toBeInTheDocument()
  })

  it('has a mobile toggle button with aria-expanded=false initially', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Mobile menu should show nav links
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a top-level link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }))

    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a submenu item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }))

    const blogPostLinks = screen.getAllByRole('link', { name: 'Blog Post' })
    const mobileLink = blogPostLinks[blogPostLinks.length - 1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu on Escape keydown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('does not close the mobile menu on non-Escape keydown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
