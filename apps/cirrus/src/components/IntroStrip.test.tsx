import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { IntroStrip } from './IntroStrip'

describe('IntroStrip', () => {
  it('renders the question heading', () => {
    render(<IntroStrip />)
    expect(screen.getByText('Have any question about us?')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<IntroStrip />)
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the pink Get in Touch CTA', () => {
    render(<IntroStrip />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })
})
