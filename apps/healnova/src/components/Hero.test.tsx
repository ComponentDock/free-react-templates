import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and get-started CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /We Provide High Solutions for Your Health/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get started/i })).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Medical professional/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
