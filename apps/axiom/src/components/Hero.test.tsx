import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline with the underlined emphasized span', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We are Design and Development Agency based on California')
    expect(heading).toHaveClass('text-ink')
    const span = heading.querySelector('span')
    expect(span).toHaveTextContent('Design and Development')
    expect(span).toHaveClass('underline')
  })

  it('shows the yellow-underlined Brows Our Products CTA', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'Brows Our Products' })
    expect(cta).toHaveAttribute('href', '#work')
    expect(cta).toHaveClass('after:bg-yellow')
  })

  it('shows the floating purple circle and mint triangle shapes', () => {
    const { container } = render(<Hero />)

    const shapes = container.querySelectorAll('[aria-hidden="true"]')
    expect(shapes.length).toBeGreaterThanOrEqual(2)
    expect(container.querySelector('.rounded-full')).toHaveClass('bg-[#b79ced]')
    expect(container.querySelector('.rotate-45')).toHaveClass('bg-[#8fe3c0]')
  })
})
