import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading and CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /facing criminal charges/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/waiting for your call/i)).toBeInTheDocument()
  })

  it('links to contact section', () => {
    render(<CtaBanner />)
    const link = screen.getByRole('link', { name: /get in touch/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
