import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your E-mail')).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getAllByText('About us').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Vinylspin column', () => {
    render(<Footer />)
    expect(screen.getByText('Vinylspin')).toBeInTheDocument()
    expect(screen.getByText('PR & Marketing')).toBeInTheDocument()
  })

  it('renders Connect column', () => {
    render(<Footer />)
    expect(screen.getByText('Connect')).toBeInTheDocument()
    expect(screen.getByText('Soundcloud')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('newsletter form submits', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your E-mail')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('test@example.com')
  })
})
