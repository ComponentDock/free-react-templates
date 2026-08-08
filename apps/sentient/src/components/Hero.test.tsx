import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

function installFakeTimers() {
  vi.useFakeTimers({
    toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'Date'],
  })
}

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the badge, headline, CTAs, stats and code window', () => {
    render(<Hero />)
    expect(screen.getByText('Powered by GPT-5 Architecture')).toBeInTheDocument()

    const level1 = screen.getByRole('heading', { level: 1 })
    expect(level1.textContent).toMatch(/Build Intelligent Apps/)
    expect(level1.textContent).toMatch(/in Half the Time/)

    expect(screen.getByRole('link', { name: 'Start Building Free' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Documentation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Demo' })).toBeInTheDocument()

    for (const stat of ['1M+', '99.99%', '50ms', '10,000+']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }

    expect(screen.getByText('api_example.py')).toBeInTheDocument()
    expect(screen.getByLabelText('Python code example')).toBeInTheDocument()
  })

  it('cycles the typewriter phrase through all options and wraps around', async () => {
    installFakeTimers()
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/in Half the Time/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2400)
    })
    expect(heading.textContent).toMatch(/at Any Scale/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2400)
    })
    expect(heading.textContent).toMatch(/with Full Control/)

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2400)
    })
    expect(heading.textContent).toMatch(/in Half the Time/)
  })
})
