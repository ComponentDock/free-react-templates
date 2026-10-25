import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { resetMedia, stubMedia } from '../test/helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

describe('Hero', () => {
  it('renders the two-line heading, the lede, three controls and the proof row', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Every good idea starts')
    expect(screen.getByTestId('hero-phrase')).toHaveTextContent('as a conversation')
    expect(screen.getByTestId('hero-phrase')).toHaveClass('text-gradient')

    expect(screen.getByText('14,000 builders, one front porch')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Join the Community/ })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Browse Discussions' })).toHaveAttribute(
      'href',
      '#discussions',
    )
    expect(screen.getByRole('button', { name: 'Watch Demo' })).toBeInTheDocument()

    for (const label of ['Members', 'Channels', 'Posts a week', 'Questions answered']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(screen.getByRole('img', { name: /Members of the community/ })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/veranda-1/1600/900',
    )
  })

  it('cycles the gradient phrase every three seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('hero-phrase')).toHaveTextContent('as a half-formed question')

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('hero-phrase')).toHaveTextContent("with someone else's reply")

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('hero-phrase')).toHaveTextContent('as a conversation')
  })

  it('leaves the phrase static under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })

    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(9000)
    })

    expect(screen.getByTestId('hero-phrase')).toHaveTextContent('as a conversation')
  })

  it('drifts the two blobs with the scroll', () => {
    render(<Hero />)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 200 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    const down = document.querySelector('[data-parallax="0.15"]') as HTMLElement
    const up = document.querySelector('[data-parallax="-0.1"]') as HTMLElement
    expect(down.style.transform).toBe('translateY(30px)')
    expect(up.style.transform).toBe('translateY(-20px)')
  })

  it('opens the tour from Watch Demo and returns focus on close', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const play = screen.getByRole('button', { name: 'Watch Demo' })
    await user.click(play)

    expect(screen.getByRole('dialog', { name: 'Veranda tour' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close video' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(play).toHaveFocus()
  })
})
