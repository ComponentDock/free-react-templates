import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

const slideAt = (index: number) => heroSlides[index] ?? { headline: '', paragraph: '' }

describe('Hero', () => {
  it('renders the first slide with headline, paragraph, CTA and slider chrome', () => {
    render(<Hero />)

    const slides = screen.getAllByTestId('hero-slide')
    expect(slides).toHaveLength(2)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(0).headline)
    expect(screen.getByText(slideAt(0).paragraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get in touch' })
    expect(cta).toHaveAttribute('href', '#contact-section')
    expect(cta.className).toContain('border-2')
    expect(cta.className).toContain('border-brand')

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('slides forward and backward with the arrows', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(1).headline)
    expect(screen.getByText(slideAt(1).paragraph)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(0).headline)
  })

  it('wraps around the slide edges', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(1).headline)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(0).headline)
  })

  it('jumps to a slide via a pagination dot', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(slideAt(1).headline)
  })
})
