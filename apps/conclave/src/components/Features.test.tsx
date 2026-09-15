import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FEATURES } from '../data'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and all feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Conclave Features')).toBeInTheDocument()
    for (const feature of FEATURES) {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    }
  })

  it('renders Learn More and Buy Ticket buttons', () => {
    render(<Features />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Buy Ticket' })).toHaveAttribute('href', '#pricing')
  })
})
