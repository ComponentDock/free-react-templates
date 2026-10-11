import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the dark workshop hero with the pill CTA', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: 'Buildkit UI Kit.' })).toBeInTheDocument()
    expect(screen.getByText('A free UI kit on tools & workshop design.')).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: /Download Kit/ })
    expect(cta).toHaveAttribute('href', '#buttons')
    expect(cta.className).toContain('rounded-full')
    expect(cta.className).toContain('shadow-material')

    const section = container.querySelector('section')!
    expect(section.id).toBe('home')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/buildkit-hero')
    expect(container.querySelector('div[aria-hidden="true"]')!.className).toContain('bg-black/80')
  })
})
