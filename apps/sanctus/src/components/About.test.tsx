import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the subheading, heading, two paragraphs, and CTA', () => {
    render(<About />)
    expect(screen.getByText(about.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: about.ctaLabel })).toBeInTheDocument()
  })

  it('shows the rounded about photo', () => {
    render(<About />)
    const image = screen.getByRole('img', { name: about.imageAlt })
    expect(image).toHaveAttribute('src', about.image)
  })
})
