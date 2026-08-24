import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /We Are Digital Agency/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /START A PROJECT/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /WATCH THE VIDEO/i })).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/We craft digital experiences/i)).toBeInTheDocument()
  })
})
