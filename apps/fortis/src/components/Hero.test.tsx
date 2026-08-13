import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { brand } from '../data'

describe('Hero', () => {
  it('renders the full-height photo hero with headline, supporting line and ghost CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe(`${brand.name} Web Design Agency`)

    const section = screen.getByTestId('hero')
    expect(section.className).toContain('min-h-[600px]')
    expect(section.className).toContain('bg-cover')
    expect(section.style.backgroundImage).toContain('picsum.photos/id/0/1920/1080')

    expect(screen.getByTestId('hero-overlay').className).toContain('bg-black/70')
    expect(screen.getByRole('paragraph').textContent).toContain('websites')
    const cta = screen.getByRole('link', { name: 'Contact Us' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('rounded-full')
    expect(cta.className).toContain('border-2')
    expect(cta.className).toContain('border-white')
    expect(cta.className).toContain('hover:bg-white')
    expect(cta.className).toContain('hover:text-black')
  })
})
