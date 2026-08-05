import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and call-to-action button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Another cool free template by the fine folks at colorlib',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/a clean, modern landing page to launch your next project/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Try it Free' })).toHaveAttribute('href', '#contact')

    expect(screen.getByRole('img', { name: 'Bold hero dashboard illustration' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/bold-hero/600/450',
    )
  })
})
