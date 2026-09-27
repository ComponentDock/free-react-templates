import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/craftwork/i)).toBeInTheDocument()
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
