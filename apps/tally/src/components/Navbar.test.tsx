import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name Tally', () => {
    render(<Navbar />)
    expect(screen.getByText('Tally')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Case Study', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toHaveAttribute(
        'href',
        `#${link.toLowerCase().replace(' ', '-')}`,
      )
    })
  })

  it('has a search form', () => {
    render(<Navbar />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('is sticky on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('sticky')
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('allows typing in desktop search box', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchbox = screen.getByRole('searchbox', { name: /^Search$/i })
    await user.type(searchbox, 'query')
    expect(searchbox).toHaveValue('query')
  })

  it('allows typing in mobile search box', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileSearch = screen.getByRole('searchbox', { name: /search mobile/i })
    await user.type(mobileSearch, 'mobile-query')
    expect(mobileSearch).toHaveValue('mobile-query')
  })
})
