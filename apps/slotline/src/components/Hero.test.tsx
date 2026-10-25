import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { hero, video } from '../content'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

function stubReducedMotion(reduce: boolean) {
  vi.stubGlobal('matchMedia', () => ({
    matches: reduce,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

describe('Hero', () => {
  it('renders the two-line headline, the lede and the three controls', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(hero.title)
    expect(heading.textContent).toContain(hero.phrases[0])
    expect(screen.getByText(hero.lede)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Try the booking flow/ })).toHaveAttribute('href', '#book')
    expect(screen.getByRole('link', { name: hero.secondaryCta.label })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('button', { name: new RegExp(hero.video) })).toBeInTheDocument()
  })

  it('keeps the stat strip static and serif — it is not the counter band', () => {
    render(<Hero />)
    for (const stat of hero.stats) {
      const figure = screen.getByText(stat.value)
      expect(figure.className).toContain('font-serif')
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('cycles the second line every three seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)
    const line = screen.getByTestId('typewriter')
    expect(line.textContent).toBe(hero.phrases[0])

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(line.textContent).toBe(hero.phrases[1])

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(line.textContent).toBe(hero.phrases[0])
  })

  it('drops the typewriter entirely under reduced motion', () => {
    stubReducedMotion(true)
    vi.useFakeTimers()
    render(<Hero />)
    const line = screen.getByTestId('typewriter')

    act(() => {
      vi.advanceTimersByTime(9000)
    })
    expect(line.textContent).toBe(hero.phrases[0])
  })

  it('drops the shimmer class once the photo has loaded', () => {
    render(<Hero />)
    const photo = screen.getByRole('img', { name: hero.photoAlt })
    expect(photo.className).toContain('img-shimmer')

    fireEvent.load(photo)
    expect(photo.className).not.toContain('img-shimmer')
  })

  it('opens the authored walkthrough and closes it three ways', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: new RegExp(hero.video) }))
    const dialog = screen.getByRole('dialog', { name: video.title })
    expect(dialog).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')
    expect(screen.getByText(video.caption)).toBeInTheDocument()

    await user.click(screen.getByText(video.steps[0] as string))
    expect(screen.getByRole('dialog', { name: video.title })).toBeInTheDocument()

    await user.keyboard('{a}')
    expect(screen.getByRole('dialog', { name: video.title })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: video.title })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')

    await user.click(screen.getByRole('button', { name: new RegExp(hero.video) }))
    await user.click(screen.getByRole('button', { name: video.close }))
    expect(screen.queryByRole('dialog', { name: video.title })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: new RegExp(hero.video) }))
    await user.click(screen.getByTestId('video-modal'))
    expect(screen.queryByRole('dialog', { name: video.title })).not.toBeInTheDocument()
  })
})
