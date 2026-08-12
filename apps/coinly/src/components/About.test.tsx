import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, summary, paragraphs and Get Started CTA', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'What is Bitcoin' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Bitcoin is an innovative payment network and a new kind of money.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })
})
