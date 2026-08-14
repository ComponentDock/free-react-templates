import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the headings on the coral section', () => {
    render(<Testimonials />)

    expect(screen.getByText('Read testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What Client Says' })).toBeInTheDocument()
  })

  it('renders quote cards with name, position and circular photo', () => {
    const { container } = render(<Testimonials />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(TESTIMONIALS.length)

    const jeff = TESTIMONIALS[0]!
    expect(screen.getByText(jeff.quote)).toBeInTheDocument()
    expect(screen.getByText(jeff.name)).toBeInTheDocument()
    expect(screen.getByText(jeff.position)).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(TESTIMONIALS.length)
    expect(images[0]).toHaveAttribute('src', jeff.photo)
  })
})
