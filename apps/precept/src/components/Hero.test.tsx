import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/We Ensure Better Education/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<Hero />)
    const section = screen.getByText(/We Ensure Better Education/i).closest('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('precept-hero') })
  })
})
