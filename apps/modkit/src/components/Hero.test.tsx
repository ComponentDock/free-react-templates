import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the gradient photo band with a bold white headline and teal CTA', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('home')
    expect(section.className).toContain('h-[80vh]')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/modkit-hero')

    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay.style.backgroundImage).toBe('var(--gradient-hero)')
    expect(overlay.className).toContain('opacity-80')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Modkit UI Kit.')
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('text-white')

    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'See Here' })
    expect(cta).toHaveAttribute('href', '#start')
    expect(cta.className).toContain('bg-kit-info')
  })
})
