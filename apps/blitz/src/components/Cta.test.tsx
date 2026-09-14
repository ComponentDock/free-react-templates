import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders headline', () => {
    render(<Cta />)
    expect(screen.getByText('We love our customers')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Cta />)
    expect(screen.getByText(/Cursus, enim a ultrices/)).toBeInTheDocument()
  })

  it('renders the CTA image', () => {
    render(<Cta />)
    const img = screen.getByRole('img', { name: /team member/i })
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
