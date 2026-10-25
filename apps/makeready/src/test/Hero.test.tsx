import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { hero } from '../content'
import { installMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('Hero', () => {
  it('carries the badge, the pitch, the three controls, four stats and the image', () => {
    render(<Hero />)

    expect(screen.getByText(hero.badge)).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAccessibleName('Design that survives contact with production')
    expect(heading).toHaveClass('lg:text-6xl', 'lg:leading-[60px]')

    expect(screen.getByText(/A six-person studio working mostly in print/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Start a project/ })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'See the work' })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('button', { name: /Watch Demo/ })).toBeInTheDocument()

    for (const stat of hero.stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }

    const image = screen.getByRole('img', { name: hero.imageAlt })
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveAttribute('width', '1200')
  })

  it('cycles the second line every three seconds, in a fixed box', () => {
    vi.useFakeTimers()
    installMedia({ reduce: false })
    render(<Hero />)

    const line = screen.getByTestId('typewriter')
    expect(line).toHaveTextContent(hero.phrases[0])
    expect(line).toHaveClass('min-h-[80px]', 'lg:min-h-[60px]', 'text-gradient')
    expect(line).toHaveAttribute('aria-hidden', 'true')

    act(() => vi.advanceTimersByTime(3000))
    expect(line).toHaveAttribute('data-fading', 'true')

    act(() => vi.advanceTimersByTime(300))
    expect(line).toHaveTextContent(hero.phrases[1])
    expect(line).toHaveAttribute('data-fading', 'false')
  })

  it('stays still under reduced motion', () => {
    vi.useFakeTimers()
    installMedia({ reduce: true })
    render(<Hero />)

    const line = screen.getByTestId('typewriter')
    act(() => vi.advanceTimersByTime(9000))
    expect(line).toHaveTextContent(hero.phrases[0])

    act(() => {
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 300 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(line).toHaveTextContent(hero.phrases[0])
  })

  it('opens the demo reel and closes it on the button, the backdrop and Escape', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    expect(screen.queryByTestId('video-dialog')).toBeNull()

    await user.click(screen.getByRole('button', { name: /Watch Demo/ }))
    const dialog = screen.getByTestId('video-dialog')
    expect(dialog).toHaveAttribute('role', 'dialog')
    expect(screen.getByTitle('Demo reel')).toHaveAttribute('src', hero.videoUrl)

    await user.click(screen.getByRole('button', { name: 'Close the video' }))
    expect(screen.queryByTestId('video-dialog')).toBeNull()

    await user.click(screen.getByRole('button', { name: /Watch Demo/ }))
    await user.keyboard('{Escape}')
    expect(screen.queryByTestId('video-dialog')).toBeNull()

    await user.click(screen.getByRole('button', { name: /Watch Demo/ }))
    await user.keyboard('a')
    expect(screen.getByTestId('video-dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Watch Demo/ }))
    await user.click(screen.getByTestId('video-dialog'))
    expect(screen.queryByTestId('video-dialog')).toBeNull()
  })
})
