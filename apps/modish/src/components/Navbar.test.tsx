import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the top bar with logo, search, user panel and shopping cart', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /modish/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('search', { name: 'Site search' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: 'Search on modish' })).toHaveAttribute(
      'placeholder',
      'Search on modish ....',
    )
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in or create account/i })).toBeInTheDocument()
    const cart = screen.getByRole('link', { name: /shopping cart/i })
    expect(cart).toHaveAttribute('href', '#top-selling')
    expect(within(cart).getByText('0')).toBeInTheDocument()
  })

  it('renders the dark nav links with the Jewelry New tag', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'Women', 'Men', 'Shoes', 'Pages', 'Blog']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: /jewelry/i })).toBeInTheDocument()
    expect(within(nav).getByText('New')).toBeInTheDocument()
  })

  it('submits the search form without navigating', () => {
    render(<Navbar />)
    const form = screen.getByRole('search', { name: 'Site search' })
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobile).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
