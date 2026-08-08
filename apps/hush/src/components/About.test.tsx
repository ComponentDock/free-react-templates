import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading and four stats', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'A Place Set Apart' })).toBeInTheDocument()
    expect(screen.getByText('35+')).toBeInTheDocument()
    expect(screen.getByText('12,000+')).toBeInTheDocument()
    expect(screen.getByText('80')).toBeInTheDocument()
    expect(screen.getByText('Years of Ministry')).toBeInTheDocument()
    expect(screen.getByText('Retreat Guests')).toBeInTheDocument()
    expect(screen.getByText('Acres of Silence')).toBeInTheDocument()
  })

  it('includes a founding story paragraph and an image', () => {
    render(<About />)
    expect(screen.getByText(/founded in 1987/)).toBeInTheDocument()
    const img = screen.getByAltText('The retreat chapel among the trees')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/hush-about'))
  })
})
