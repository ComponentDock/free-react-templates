import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT } from '../data'

describe('About', () => {
  it('renders the photo on the left and the About Us copy on the right', () => {
    render(<About />)

    const image = screen.getByRole('img', { name: ABOUT.imageAlt })
    expect(image).toHaveAttribute('src', ABOUT.image)
    expect(image).toHaveClass('object-cover', 'md:h-[728px]')

    expect(screen.getByText(ABOUT.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: ABOUT.heading })).toBeInTheDocument()
    for (const paragraph of ABOUT.paragraphs) {
      expect(screen.getByText(new RegExp(paragraph.slice(0, 24)))).toBeInTheDocument()
    }

    const button = screen.getByRole('link', { name: ABOUT.cta })
    expect(button).toHaveAttribute('href', '#why-choose')
    expect(button).toHaveClass('border-navy', 'text-navy')
  })
})
