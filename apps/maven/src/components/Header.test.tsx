import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the spark logo, uppercase links, and Contact link', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Maven/i })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'About', 'Services', 'Portfolio', 'Blog']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()
  })

  it('reveals the Pages dropdown with Single Blog and Elements on activation', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const pages = screen.getByRole('button', { name: 'Pages' })
    expect(pages).toHaveAttribute('aria-expanded', 'false')

    await user.click(pages)
    expect(pages).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    const singleBlog = screen.getByRole('link', { name: 'Single Blog' })
    singleBlog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(singleBlog)
    expect(pages).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands and collapses the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    const mobileLink = screen.getAllByRole('link', { name: 'Home' }).at(-1)!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // The mobile Contact link also closes the menu when clicked.
    await user.click(toggle)
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' }).at(-1)!
    mobileContact.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileContact)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands and collapses the mobile Pages submenu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const mobilePages = screen.getAllByRole('button', { name: 'Pages' }).at(-1)!
    await user.click(mobilePages)
    expect(mobilePages).toHaveAttribute('aria-expanded', 'true')

    const singleBlog = screen.getAllByRole('link', { name: 'Single Blog' }).at(-1)!
    singleBlog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(singleBlog)
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
