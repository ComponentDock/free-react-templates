import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the heading and paragraph', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.heading)
    expect(screen.getByText(hero.body)).toBeInTheDocument()
  })

  it('anchors the CTA to the reservation section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#reservation')
    expect(cta).toHaveClass('bg-brand')
  })

  it('uses the background photo from the data', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#home') as HTMLElement
    expect(section.style.backgroundImage).toContain(hero.image)
  })

  it('renders the cutlery icon as an SVG', () => {
    const { container } = render(<Hero />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
