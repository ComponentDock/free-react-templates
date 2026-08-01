import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, CTAs, and portrait image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Alex Morgan/)

    expect(screen.getByText(/design and build fast, accessible web experiences/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')

    const portrait = screen.getByRole('img', { name: /portrait of alex morgan/i })
    expect(portrait).toHaveAttribute('src', '/portrait.svg')
  })
})
