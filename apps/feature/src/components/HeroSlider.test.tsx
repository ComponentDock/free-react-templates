import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders four slides with sequential numbered badges, titles and dates', () => {
    const { container } = render(<HeroSlider />)

    const slides = [
      { title: 'Top 5 Places To Start Your Vacation This Summer', number: '1' },
      { title: '6 Facts - The Health Benefits of Swimming & Surfing', number: '2' },
      { title: 'Popular Lifestyle Tips', number: '3' },
      { title: '7 Tricks of Skateboarding For A Beginner', number: '4' },
    ] as const
    for (const slide of slides) {
      const titleElement = screen.getAllByText(slide.title)[0]!
      expect(titleElement).toBeInTheDocument()
      // The badge is the first element of the slide's text block.
      expect(titleElement.closest('div')?.querySelector('span')?.textContent).toBe(slide.number)
    }

    expect(screen.getAllByText('January 20, 2017')).toHaveLength(4)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('shows only the active slide and switches with prev/next controls', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '6 Facts - The Health Benefits of Swimming & Surfing',
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', {
        level: 1,
        name: 'Top 5 Places To Start Your Vacation This Summer',
      }),
    ).not.toBeInTheDocument()

    // Wraps forward from the last slide back to the first.
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Top 5 Places To Start Your Vacation This Summer',
      }),
    ).toBeInTheDocument()

    // Wraps backward from the first slide to the last.
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '7 Tricks of Skateboarding For A Beginner',
      }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the numbered dot indicators', () => {
    render(<HeroSlider />)
    const dot4 = screen.getByRole('button', { name: 'Go to slide 4' })
    expect(dot4).toHaveAttribute('aria-current', 'false')

    fireEvent.click(dot4)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '7 Tricks of Skateboarding For A Beginner',
      }),
    ).toBeInTheDocument()
    expect(dot4).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })
})
