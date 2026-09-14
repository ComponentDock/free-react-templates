import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the heading and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /We make clothes that suit you/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Our Services/i })).toHaveAttribute('href', '#services')
  })
})
