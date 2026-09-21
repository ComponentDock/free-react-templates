import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us')
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/community of yoga enthusiasts/)).toBeInTheDocument()
  })

  it('renders the overlapping images', () => {
    render(<About />)
    expect(screen.getByAltText('Yoga practice session')).toBeInTheDocument()
    expect(screen.getByAltText('Meditation retreat')).toBeInTheDocument()
  })
})
