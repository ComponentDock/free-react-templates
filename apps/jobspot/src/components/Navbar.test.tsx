import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('JobSpot')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Find Jobs', 'Candidates', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the Post a Job CTA', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Post a Job').length).toBeGreaterThanOrEqual(1)
  })

  it('shows mobile menu items on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    const navLinks = screen.getAllByText('Home')
    expect(navLinks.length).toBe(2)
  })
})
