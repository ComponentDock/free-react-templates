import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroHeadlineAccent, heroHeadlineLead, heroSlides, heroSubline } from '../data'

describe('Hero', () => {
  it('renders the first slide with headline, sub-line, CTA, and a mockup image', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(heroHeadlineLead)
    const accent = heading.querySelector('span')
    expect(accent).toHaveTextContent(heroHeadlineAccent)
    expect(screen.getByText(new RegExp(heroSubline))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Exploring' })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBe(heroSlides.length)
  })

  it('navigates slides with the next and previous controls', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const slides = screen.getAllByRole('img', { hidden: true })
    expect(slides.length).toBe(heroSlides.length)
    const first = slides[0]
    expect(first).not.toHaveAttribute('aria-hidden')
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(first).toHaveAttribute('aria-hidden', 'true')
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(first).not.toHaveAttribute('aria-hidden')
  })

  it('includes a decorative curve shape', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument()
  })
})
