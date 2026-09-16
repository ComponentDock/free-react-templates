import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and description', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { name: /ready to start your journey/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/join hundreds of professionals/i)).toBeInTheDocument()
  })

  it('renders the consultation button', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: /book a free consultation/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
