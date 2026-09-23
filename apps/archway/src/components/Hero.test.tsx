import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /We Create Amazing Architecture Designs/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /View our works/i })).toHaveAttribute(
      'href',
      '#projects',
    )
  })
})
