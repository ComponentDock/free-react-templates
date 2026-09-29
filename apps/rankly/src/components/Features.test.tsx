import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Ranking Improvement Solutions/i }),
    ).toBeInTheDocument()
  })

  it('renders the subheading and CTA', () => {
    render(<Features />)
    expect(screen.getByText(/Helps You Increase/)).toBeInTheDocument()
    expect(screen.getByText('Research Details')).toBeInTheDocument()
  })
})
