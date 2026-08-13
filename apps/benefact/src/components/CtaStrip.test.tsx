import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaStrip } from './CtaStrip'

describe('CtaStrip', () => {
  it('shows the script heading and a right-aligned Donate Now button', () => {
    render(<CtaStrip />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Helping the Homeless, Hungry, and Hurtings Children/,
      }),
    ).toBeInTheDocument()
    const donate = screen.getByRole('link', { name: 'Donate Now' })
    expect(donate).toHaveAttribute('href', '#donate')
    expect(donate).toHaveClass('bg-primary')
  })
})
