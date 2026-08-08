import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, blurb, and both CTA buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Ship Better APIs?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join 1M\+ developers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free API Key' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Talk to Sales' })).toBeInTheDocument()
  })
})
