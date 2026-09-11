import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders CTA message', () => {
    render(<CtaBanner />)
    expect(screen.getByText("Let's Get Started")).toBeInTheDocument()
  })

  it('renders as a link', () => {
    render(<CtaBanner />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#')
  })
})
