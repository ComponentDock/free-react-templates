import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the About section', () => {
    render(<About />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('displays the About heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument()
  })

  it('displays bio text', () => {
    render(<About />)
    expect(screen.getByText(/passionate digital product designer/)).toBeInTheDocument()
  })

  it('displays a portrait image', () => {
    render(<About />)
    const img = screen.getByAltText('Portrait photo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('displays 3 stat cards', () => {
    render(<About />)
    expect(screen.getByText('06')).toBeInTheDocument()
    expect(screen.getByText('$40M+')).toBeInTheDocument()
    expect(screen.getByText('Multiple')).toBeInTheDocument()
  })

  it('displays stat labels', () => {
    render(<About />)
    expect(screen.getByText('years of experience')).toBeInTheDocument()
    expect(screen.getByText('invested in projects')).toBeInTheDocument()
    expect(screen.getByText('awards won')).toBeInTheDocument()
  })
})
