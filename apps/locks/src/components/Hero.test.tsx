import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, call to action and play button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /we will make you stylish/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book an appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /hair stylist at work/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
