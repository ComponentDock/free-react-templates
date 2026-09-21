import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Fitness Ave/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/)).toBeInTheDocument()
    expect(screen.getByText(/info@sprintly.com/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders the logo link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Sprintly' })).toHaveAttribute('href', '#home')
  })
})
