import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the About Me eyebrow, Personal Details heading, paragraphs and CTA', () => {
    render(<About />)
    expect(screen.getByText(about.eyebrow)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Personal Details/)
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    const cta = screen.getByRole('link', { name: about.cta })
    expect(cta).toHaveAttribute('href', '#portfolio')
  })

  it('shows the portrait photo on the left', () => {
    render(<About />)
    const image = screen.getByRole('img', { name: about.alt })
    expect(image).toHaveAttribute('src', about.image)
  })
})
