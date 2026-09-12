import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoBanner } from './VideoBanner'

describe('VideoBanner', () => {
  it('renders the heading', () => {
    render(<VideoBanner />)
    expect(screen.getByRole('heading', { name: /watch video/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<VideoBanner />)
    expect(screen.getByText(/you will love our execution/i)).toBeInTheDocument()
  })

  it('renders a play button', () => {
    render(<VideoBanner />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
