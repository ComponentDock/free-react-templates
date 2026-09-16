import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Let your light so shine before men.',
    )
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Visit Our Church')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
  })
})
