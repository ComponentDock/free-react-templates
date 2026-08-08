import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingCta } from './ClosingCta'

describe('ClosingCta', () => {
  it('renders the headline and two buttons', () => {
    render(<ClosingCta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Begin Your Journey Inward' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Retreat' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
