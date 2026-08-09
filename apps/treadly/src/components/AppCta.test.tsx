import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppCta } from './AppCta'

describe('AppCta', () => {
  it('renders the headline, offer copy, store buttons, and phone mockup', () => {
    render(<AppCta />)
    expect(screen.getByRole('heading', { name: 'Ready to Step Up Your Game?' })).toBeInTheDocument()
    expect(screen.getByText(/15% off your first order/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get 15% Off' })).toHaveAttribute('href', '#newsletter')
    expect(screen.getByRole('link', { name: 'Google Play' })).toHaveAttribute('href', '#newsletter')
    expect(screen.getByRole('img', { name: /mobile app preview/i })).toBeInTheDocument()
  })
})
