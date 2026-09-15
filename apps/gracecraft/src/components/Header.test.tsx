import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the logo and nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /gracecraft/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Sermons', 'Events', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()
    await user.click(menuBtn)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('toggles search panel on click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const searchBtn = screen.getByRole('button', { name: /toggle search/i })
    await user.click(searchBtn)
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
  })

  it('submits search form without page reload', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const searchBtn = screen.getByRole('button', { name: /toggle search/i })
    await user.click(searchBtn)
    const searchInput = screen.getByRole('searchbox', { name: /search/i })
    await user.type(searchInput, 'sermon')
    const submitBtn = screen.getByRole('button', { name: /^Search$/i })
    await user.click(submitBtn)
    expect(searchInput).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[1]!)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })
})
