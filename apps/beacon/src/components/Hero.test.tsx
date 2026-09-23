import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the Beacon heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Beacon')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We Create Awesome/)).toBeInTheDocument()
    expect(screen.getByText(/Photographies and more/)).toBeInTheDocument()
  })

  it('has the hero section with background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'home')
    expect(section?.className).toContain('bg-cover')
  })
})
