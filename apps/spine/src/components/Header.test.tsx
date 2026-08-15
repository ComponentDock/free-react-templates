import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { header, navLinks } from '../data'

describe('Header', () => {
  it('renders the top utility row: brand, search pill, FAQ, Track Order, cart badge and Sign in', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: header.brand })).toHaveAttribute('href', '#home')
    expect(screen.getByPlaceholderText('Search book by author or publisher')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: header.searchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: header.faqLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: header.trackOrderLabel })).toBeInTheDocument()

    const cart = screen.getByRole('link', { name: `Cart, ${header.cartCount} items` })
    expect(within(cart).getByText(header.cartCount)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: header.signInLabel })).toBeInTheDocument()
  })

  it('prevents default navigation when the search form is submitted', () => {
    render(<Header />)
    const form = screen.getByRole('search')
    fireEvent.submit(form)
    expect(screen.getByPlaceholderText('Search book by author or publisher')).toBeInTheDocument()
  })

  it('renders the desktop nav with all top-level items and the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      if (link.children) {
        expect(within(nav).getByRole('button', { name: link.label })).toBeInTheDocument()
      } else {
        expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
      }
    }
    // The source DOM misspells "Contact" as "Contect"; the recreation SHALL
    // render the correct spelling (the official screenshot agrees).
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(nav).queryByRole('link', { name: 'Contect' })).not.toBeInTheDocument()

    await user.click(within(nav).getByRole('button', { name: 'Pages' }))
    for (const child of navLinks.find((link) => link.label === 'Pages')!.children!) {
      expect(screen.getByRole('link', { name: child.label })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu, restoring body scroll', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')

    await user.click(within(mobile).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const backdrop = container.querySelector('div[aria-hidden="true"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
