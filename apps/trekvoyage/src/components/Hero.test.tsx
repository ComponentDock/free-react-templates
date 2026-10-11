import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

const typed = () => screen.getByTestId('typed-word').textContent

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the crossfading slider, the headline and the turquoise CTA', () => {
    const { container } = render(<Hero />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(5)
    expect(images[0]!).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/trekvoyage-hero-1/1920/1080',
    )
    expect(images[0]!.className).toContain('opacity-100')
    expect(images[1]!.className).toContain('opacity-0')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Travel to the most beautiful places in the world, like')
    expect(heading.className).toContain('text-white')

    const cta = screen.getByRole('link', { name: 'Contact us' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('bg-brand')

    expect(container.querySelector('.hero-wash')).not.toBeNull()
  })

  it('types the destination word and rolls on to the next one', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(typed()).toBe('')

    for (let step = 0; step < 13; step += 1) {
      act(() => {
        vi.advanceTimersByTime(120)
      })
    }
    expect(typed()).toBe('Sahara Desert')

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(typed()).toBe('')

    act(() => {
      vi.advanceTimersByTime(120)
    })
    expect(typed()).toBe('S')
  })

  it('advances the slider and wraps back to the first photo', () => {
    vi.useFakeTimers()
    const { container } = render(<Hero />)

    const opacities = () =>
      [...container.querySelectorAll('img')].map((image) =>
        image.className.includes('opacity-100') ? 'on' : 'off',
      )

    expect(opacities()).toEqual(['on', 'off', 'off', 'off', 'off'])

    for (let step = 0; step < 5; step += 1) {
      act(() => {
        vi.advanceTimersByTime(5000)
      })
    }

    expect(opacities()).toEqual(['on', 'off', 'off', 'off', 'off'])
  })
})
