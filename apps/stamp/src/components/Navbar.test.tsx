import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Industries', 'FAQ', 'Projects', 'Team', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders phone number and email in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('+02 89 365 3652')).toBeInTheDocument()
    expect(screen.getByText('info@example.com')).toBeInTheDocument()
  })

  it('renders social links in top bar', () => {
    render(<Navbar />)
    expect(screen.getAllByLabelText('Facebook').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('LinkedIn').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Instagram').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    const homeLink = screen.getAllByText('Home')
    // Click the mobile Home link (last one in the DOM)
    await user.click(homeLink[homeLink.length - 1]!)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('renders brand name Stamp', () => {
    render(<Navbar />)
    expect(screen.getByText('Stamp')).toBeInTheDocument()
  })
})
