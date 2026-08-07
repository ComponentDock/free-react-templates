import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Minimalistic Architecture and more/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Project' })).toBeInTheDocument()
  })

  it('renders a hero image with alt text', () => {
    render(<Hero />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
