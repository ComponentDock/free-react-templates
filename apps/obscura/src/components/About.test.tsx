import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders three full-bleed photo sections with heading, paragraph, and outline button', () => {
    render(<About />)
    const headings = screen.getAllByRole('heading', { level: 2, name: 'Artistic Portraits' })
    expect(headings).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
    expect(screen.getAllByText(/Lorem ipsum/)).toHaveLength(3)
  })

  it('renders the first and third sections with white text and the second with dark ink text', () => {
    render(<About />)
    const headings = screen.getAllByRole('heading', { level: 2, name: 'Artistic Portraits' })
    expect(headings[0]).toHaveClass('text-white')
    expect(headings[1]).toHaveClass('text-ink')
    expect(headings[2]).toHaveClass('text-white')
  })

  it('gives each section a matching anchor id', () => {
    render(<About />)
    expect(document.getElementById('about')).not.toBeNull()
    expect(document.getElementById('portfolio')).not.toBeNull()
    expect(document.getElementById('news')).not.toBeNull()
  })

  it('renders the background photos as decorative images', () => {
    render(<About />)
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(3)
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt', '')
    })
  })
})
