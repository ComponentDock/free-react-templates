import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and both call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Be bold/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /make an appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /our services/i })).toBeInTheDocument()
  })

  it('shows a background image with a descriptive alt', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Rouge salon/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
