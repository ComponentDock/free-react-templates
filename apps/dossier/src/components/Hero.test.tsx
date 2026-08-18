import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroPortrait, heroSubtitle, heroTitle } from '../data'

describe('Hero', () => {
  it('renders the green hero with title, subtitle, and outlined CTA', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section.className).toContain('bg-hero-green')
    expect(section.querySelector('.h-\\[900px\\]')).toBeTruthy()

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroSubtitle)).toBeInTheDocument()

    const hire = screen.getByRole('link', { name: 'Hire Me' })
    expect(hire).toHaveAttribute('href', '#contact')
    expect(hire.className).toContain('border-2')
    expect(hire.className).toContain('border-ink')
    expect(hire.className).toContain('uppercase')
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Creative workspace flat lay' })).toHaveAttribute(
      'src',
      heroPortrait,
    )
  })
})
