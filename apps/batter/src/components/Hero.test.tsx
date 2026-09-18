import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtext', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /instead of eating/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders the CTA button linking to contact', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
