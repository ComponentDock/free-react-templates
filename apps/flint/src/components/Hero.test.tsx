import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subheading, headline and testimonial', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Design is not just what it looks like design is how it works',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/there live the blind texts/)).toBeInTheDocument()
    expect(screen.getByText('Mark Vaughn')).toBeInTheDocument()
    expect(screen.getByText('Lublin, Poland')).toBeInTheDocument()
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })
})
