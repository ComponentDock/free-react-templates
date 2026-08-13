import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the eyebrow, headline, and paragraphs', () => {
    render(<About />)
    expect(screen.getByText(about.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.headline })).toBeInTheDocument()
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('renders the video image with a green circular play button', () => {
    const { container } = render(<About />)
    expect(container.querySelector('img')).toHaveAttribute('src', about.image)
    expect(screen.getByRole('button', { name: about.videoLabel })).toBeInTheDocument()
  })

  it('counts up to the experience number', () => {
    render(<About />)
    expect(screen.getByText('0')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText(String(about.counterValue))).toBeInTheDocument()
    expect(screen.getByText(about.counterLabel)).toBeInTheDocument()
  })

  it('clears its interval on unmount', () => {
    const { unmount } = render(<About />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
  })
})
