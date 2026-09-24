import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Forgot password link', () => {
    render(<Footer />)
    expect(screen.getByText('Forgot password?')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Forgot password?')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('link opens in new tab', () => {
    render(<Footer />)
    const link = screen.getByText('Forgot password?')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
