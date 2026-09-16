import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders heading', () => {
    render(<CallToAction />)
    expect(screen.getByText('A Place For You')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Find a place to connect/)).toBeInTheDocument()
  })

  it('renders outlined CTA button', () => {
    render(<CallToAction />)
    const btn = screen.getByText('Become A Member')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('border-2')
  })

  it('has data-testid', () => {
    render(<CallToAction />)
    expect(screen.getByTestId('call-to-action')).toBeInTheDocument()
  })
})
