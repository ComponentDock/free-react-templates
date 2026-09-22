import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtitle, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Beach Resort')

    expect(screen.getByText('Relax, Unwind, and Enjoy')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'EXPLORE NOW' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'SEE ROOMS' })).toBeInTheDocument()
  })

  it('has a background image from picsum.photos', () => {
    render(<Hero />)

    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
