import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders the current year', () => {
    const { container } = render(<Footer />)
    const year = String(new Date().getFullYear())
    expect(container.textContent).toContain(year)
  })
})
