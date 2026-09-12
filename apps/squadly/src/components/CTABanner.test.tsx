import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the heading and CTA button', () => {
    render(<CTABanner />)

    expect(
      screen.getByRole('heading', { name: /We Are Squadly A Heavy Equipment/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make An Appointment' })).toBeInTheDocument()
  })
})
