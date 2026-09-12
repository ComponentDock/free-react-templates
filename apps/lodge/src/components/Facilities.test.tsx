import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders the facilities heading', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { name: 'Facilities' })).toBeDefined()
  })

  it('renders facility cards with titles and CTAs', () => {
    render(<Facilities />)
    expect(screen.getByText('Wellness Center')).toBeDefined()
    expect(screen.getByText('Fitness Center')).toBeDefined()
    const ctaButtons = screen.getAllByText('Visit Center')
    expect(ctaButtons.length).toBe(2)
  })

  it('renders facility images', () => {
    render(<Facilities />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
