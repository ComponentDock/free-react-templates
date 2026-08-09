import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroStrip } from './IntroStrip'

describe('IntroStrip', () => {
  it('renders the readiness headline and the booking call-to-action', () => {
    render(<IntroStrip />)
    expect(
      screen.getByRole('heading', { name: /Are you ready\? Let's repair it now!/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book an Appointment/i })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })
})
