import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Creative } from './Creative'

describe('Creative', () => {
  it('renders the heading', () => {
    render(<Creative />)
    expect(
      screen.getByRole('heading', { name: /We work hard and think creatively/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Creative />)
    expect(screen.getByText('See How We Work')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<Creative />)
    expect(screen.getByRole('img', { name: /creative team/i })).toBeInTheDocument()
  })
})
