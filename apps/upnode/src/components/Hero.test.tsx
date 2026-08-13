import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroCtaLabels, heroSlides } from '../data'

describe('Hero', () => {
  it('shows the headline, price line, copy, and two CTA buttons on the blue background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-primary')
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/The Best Web Hosting/)
    expect(screen.getByText('$2.95/month*')).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroCtaLabels.start })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroCtaLabels.chat })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('renders the cloud-wave transition at the bottom', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows the strikethrough old price', () => {
    render(<Hero />)
    const old = screen.getByText('$7.99')
    expect(old.className).toContain('line-through')
  })
})
