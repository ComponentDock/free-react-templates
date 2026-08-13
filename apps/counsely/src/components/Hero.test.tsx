import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the eyebrow, headline, and supporting copy', () => {
    render(<Hero />)
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.textContent).toMatch(/^Attorneys Fighting For Your Freedom\.\|?$/)
    expect(screen.getByText(hero.description)).toBeInTheDocument()
  })

  it('cycles the rotating gold word on an interval', () => {
    render(<Hero />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.textContent).toMatch(/Freedom\.\|?$/)

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(headline.textContent).toMatch(/Rights\.\|?$/)

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(headline.textContent).toMatch(/Case\.\|?$/)

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(headline.textContent).toMatch(/Custody\.\|?$/)

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(headline.textContent).toMatch(/Freedom\.\|?$/)
  })

  it('renders the gold CTA with an arrow icon', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Get Legal Advice/ })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('renders the background photo with a dark overlay', () => {
    const { container } = render(<Hero />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveAttribute('alt', '')
    expect(container.querySelector('.bg-black\\/50')).toBeInTheDocument()
  })
})
