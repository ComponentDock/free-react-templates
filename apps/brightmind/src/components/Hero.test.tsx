import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and two CTA buttons', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /No Nation Can Prosper In Life Without Education/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Apply Now/i })).toHaveAttribute('href', '#apply')
    expect(screen.getByRole('link', { name: /View Courses/i })).toHaveAttribute('href', '#courses')
  })
})
