import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Parallax } from './Parallax'

describe('Parallax', () => {
  it('renders heading and paragraph', () => {
    render(<Parallax />)
    expect(screen.getByText(/Reasons To/)).toBeInTheDocument()
    expect(screen.getByText(/we focus on a range/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Parallax />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })
})
