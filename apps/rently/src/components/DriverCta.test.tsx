import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DriverCta } from './DriverCta'

describe('DriverCta', () => {
  it('renders the earn headline and driver CTA', () => {
    render(<DriverCta />)
    expect(
      screen.getByRole('heading', { name: /Do You Want To Earn With Us\? So Don't Be Late\./i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Become A Driver/i })).toBeInTheDocument()
  })
})
