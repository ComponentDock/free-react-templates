import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

function heroBackground(): string {
  return screen.getByTestId('hero-slide').style.backgroundImage
}

describe('Hero', () => {
  it('renders the full-viewport gradient hero with the headline and Start Searching CTA', () => {
    render(<Hero />)
    const section = screen.getByTestId('hero')
    expect(section).toHaveClass('min-h-[700px]')
    expect(heroBackground()).toContain('voyara-hero-1')
    expect(screen.getByTestId('hero-overlay')).toHaveClass('opacity-80')

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Enjoy Holidays')).toBeInTheDocument()
    expect(screen.getByText('with affordable Hotels')).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Start Searching' })
    expect(cta).toHaveAttribute('href', '#book')
    expect(cta).toHaveClass('bg-white')
  })

  it('advances to the next slide and wraps around at the end', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(heroBackground()).toContain('voyara-hero-2')
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(heroBackground()).toContain('voyara-hero-1')
  })

  it('steps back to the previous slide and wraps to the last one', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(heroBackground()).toContain('voyara-hero-2')
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(heroBackground()).toContain('voyara-hero-1')
  })
})
