import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Counseling For Your Better Life',
    )
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Professional guidance/)).toBeInTheDocument()
  })

  it('renders CTA button linking to appointment', () => {
    render(<Hero />)
    const cta = screen.getByText('Get Started').closest('a')
    expect(cta).toHaveAttribute('href', '#appointment')
  })

  it('has parallax background', () => {
    render(<Hero />)
    const section = screen.getByRole('link', { name: /get started/i }).closest('section')
    expect(section).toHaveStyle({ backgroundAttachment: 'fixed' })
  })
})
