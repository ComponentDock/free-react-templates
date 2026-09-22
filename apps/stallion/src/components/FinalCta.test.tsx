import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'

describe('FinalCta', () => {
  it('renders the heading and CTA button', () => {
    render(<FinalCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/never late to start/i)
    expect(screen.getByText(/Thinking about your fitness journey/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Become a Member/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
