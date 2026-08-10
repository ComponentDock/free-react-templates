import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroCarousel } from './HeroCarousel'
import { heroSlides } from '../data'

describe('HeroCarousel', () => {
  it('renders the first slide with caption, headline, excerpt and meta', () => {
    const { container } = render(<HeroCarousel />)

    const first = heroSlides[0]!
    expect(screen.getByText("Editor's Pick")).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: first.author })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('newswire-hero-1'),
    )
  })

  it('advances and wraps through slides with the next/prev arrows', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot nav and highlights the active dot', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('bg-accent')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveClass('bg-accent')

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('bg-accent')
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveClass('bg-accent')
  })
})
