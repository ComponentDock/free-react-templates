import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the 500px cover photo band with a placeholder image', () => {
    render(<Hero />)
    const photo = screen.getByAltText(/design book/i)
    expect(photo).toHaveAttribute('src', 'https://picsum.photos/seed/upstart-hero/1920/500')
  })

  it('renders the pull-quote with the decorative glyph and author row', () => {
    render(<Hero />)
    expect(
      screen.getByText(
        'Design is not just what it looks like and feels like. Design is how it works.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('\u201D')).toBeInTheDocument()
    expect(screen.getByText('Steve Jobs')).toBeInTheDocument()
    expect(screen.getByAltText('Steve Jobs')).toHaveClass('rounded-full')
  })

  it('renders the bordered CTA card with the Hire Us Now button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Available For Work/ }),
    ).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'Hire Us Now' })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
