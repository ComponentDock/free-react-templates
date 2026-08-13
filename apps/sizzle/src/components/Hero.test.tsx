import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline and paragraph', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(hero.eyebrow)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.heading)
    expect(screen.getByText(hero.body)).toBeInTheDocument()
  })

  it('anchors the CTA to the menu section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#menu')
    expect(cta).toHaveClass('bg-brand')
  })

  it('uses the background photo from the data', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#home') as HTMLElement
    expect(section.style.backgroundImage).toContain(hero.image)
  })
})
