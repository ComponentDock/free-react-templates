import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT, IMAGES } from '../data'

describe('About', () => {
  it('renders the heading, paragraphs, dark button and rounded photo', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: ABOUT.heading })).toBeInTheDocument()
    for (const paragraph of ABOUT.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#services')
    const image = screen.getByRole('img', { name: 'The Flair studio team at work' })
    expect(image).toHaveAttribute('src', IMAGES.about)
    expect(image.className).toContain('rounded-[5px]')
  })
})
