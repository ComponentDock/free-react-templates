import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Navigation section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Navigation' })).toBeInTheDocument()
  })

  it('renders Follow Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Follow Us' })).toBeInTheDocument()
  })

  it('renders Contact section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Contact' })).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Donate')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('info@givingheart.org')).toBeInTheDocument()
  })

  it('renders phone', () => {
    render(<Footer />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders Back to top button', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const btn = screen.getByText('Back to top')
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })
})
