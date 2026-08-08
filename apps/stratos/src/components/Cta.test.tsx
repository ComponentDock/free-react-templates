import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, subtext, and both buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Ship Faster?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Join 10,000\+ developers who deploy with confidence/),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started Free/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Talk to Sales/ })).toBeInTheDocument()
  })
})
