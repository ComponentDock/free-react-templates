import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('For More Agency')
    expect(screen.getByRole('link', { name: /view portfolio/i })).toHaveAttribute(
      'href',
      '#projects',
    )
  })

  it('renders background image with overlay', () => {
    render(<Hero />)
    const section = screen.getByText('For More Agency').closest('section')!
    expect(section).toHaveClass('bg-cover')
  })
})
