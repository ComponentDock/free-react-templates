import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('shows the headline and call-to-action buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { name: 'Ready to Start Building Wealth?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started Free' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Pricing' })).toBeInTheDocument()
  })
})
