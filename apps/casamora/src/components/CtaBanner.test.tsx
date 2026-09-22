import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Make Yourself Comfortable/)).toBeInTheDocument()
  })

  it('renders the Reserve Now button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Reserve Now')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<CtaBanner className="custom-class" />)
    expect(screen.getByText(/Make Yourself Comfortable/).closest('section')).toHaveClass(
      'custom-class',
    )
  })
})
