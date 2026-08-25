import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the CTA heading and button', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Do not wait/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })
})
