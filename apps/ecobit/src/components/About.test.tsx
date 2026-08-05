import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the split section heading, blurb, image, and learn-more link', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Easy To Access Social Media' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'The Ecobit social dashboard on a laptop' }),
    ).toBeInTheDocument()
  })
})
