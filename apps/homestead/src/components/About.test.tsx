import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutHeading, aboutImage, aboutImageAlt, aboutParagraphs } from '../data'

describe('About', () => {
  it('renders the heading, paragraphs and a photo', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: aboutHeading })).toBeInTheDocument()
    for (const paragraph of aboutParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', aboutImage)
    expect(img).toHaveAttribute('alt', aboutImageAlt)
  })
})
