import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the emphasized headline, paragraph and ghost CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We love to create/)
    expect(heading.textContent).toMatch(/Beautiful/)
    expect(heading.textContent).toMatch(/websites/)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#portfolio')
  })

  it('uses the brand gradient on the section background', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Home' })
    expect(section.className).toContain('bg-[linear-gradient(45deg,#ee76ad_0%,#efac78_100%)]')
  })
})
