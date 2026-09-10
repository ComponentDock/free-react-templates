import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('displays the About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('displays the Top Products section', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getByText('Ripple')).toBeInTheDocument()
    expect(screen.getByText('Litecoin')).toBeInTheDocument()
    expect(screen.getByText('Cardano')).toBeInTheDocument()
  })

  it('displays the Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('displays the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 CoinWave/)).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(submitBtn)
  })

  it('has clickable product links', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const bitcoinLink = screen.getByRole('link', { name: 'Bitcoin' })
    await user.click(bitcoinLink)
  })
})
