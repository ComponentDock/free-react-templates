import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the serif headline, sub-paragraph and two call-to-action buttons', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { name: 'Ready to Find Your Dream Home?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Our team of experts is ready to help you navigate the market/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Browse Properties/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
