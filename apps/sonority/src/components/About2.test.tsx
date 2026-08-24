import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About2 } from './About2'

describe('About2', () => {
  it('renders the heading', () => {
    render(<About2 />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/We are tender heart/)
  })

  it('renders three feature items with check icons', () => {
    render(<About2 />)
    expect(screen.getByText(/Discover new artists/)).toBeInTheDocument()
    expect(screen.getByText(/Download songs/)).toBeInTheDocument()
    expect(screen.getByText(/Get recommendations/)).toBeInTheDocument()
  })

  it('renders the placeholder image', () => {
    render(<About2 />)
    const img = screen.getByAltText('Sonority platform features')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has the light gray section background', () => {
    render(<About2 />)
    const section = document.querySelector('section')!
    expect(section.className).toContain('bg-brand-section')
  })
})
