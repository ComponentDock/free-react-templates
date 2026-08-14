import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { brand, navLinks, phoneHref, topBar } from '../data'

describe('Navbar', () => {
  it('renders the white top bar with address, phone and email contact items', () => {
    render(<Navbar />)
    expect(screen.getByText(topBar.address)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: topBar.phone })
    expect(phone).toHaveAttribute('href', phoneHref)
    expect(screen.getByRole('link', { name: topBar.email })).toHaveAttribute(
      'href',
      `mailto:${topBar.email}`,
    )
  })

  it('renders the teal navbar with the brand, tagline, seven links and a search input', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner.querySelector('.bg-brand')).not.toBeNull()
    expect(screen.getByText(brand.name)).toBeInTheDocument()
    expect(screen.getByText(brand.tagline)).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    fireEvent.submit(screen.getByRole('search'))
  })

  it('opens and closes the mobile menu via the hamburger toggler', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: /open menu/i })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggler)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    const links = within(mobile).getAllByRole('link')
    expect(links).toHaveLength(navLinks.length)
    links[0]!.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(links[0]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
