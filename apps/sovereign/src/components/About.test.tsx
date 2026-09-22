import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading and paragraph', () => {
    render(<About />)
    expect(screen.getByText('About Our Hotel')).toBeInTheDocument()
    expect(screen.getByText(/Sovereign Hotel offers/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('Sovereign Hotel lobby')
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toContain('sovereign-about')
  })
})
