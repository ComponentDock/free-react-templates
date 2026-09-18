import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Linnet')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Services', 'Portfolio', 'Team', 'Pricing', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(toggle)
    const homeLinks = screen.getAllByText('Home')
    const lastLink = homeLinks.at(-1)
    if (!lastLink) throw new Error('Expected a Home link')
    await userEvent.click(lastLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
