import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroSlides, nextSlideLabel, previousSlideLabel } from '../data'

const slideOneTitles = heroSlides[0]!.posts.map((post) => post.title)
const slideTwoTitles = heroSlides[1]!.posts.map((post) => post.title)

describe('Hero', () => {
  it('renders the first slide with a large post and two stacked posts', () => {
    render(<Hero />)

    for (const title of slideOneTitles) {
      expect(screen.getByRole('link', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('June 20, 2018')).toHaveLength(3)
    expect(screen.queryByRole('link', { name: slideTwoTitles[0] })).not.toBeInTheDocument()
  })

  it('switches slides with the next and previous controls, wrapping around', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('link', { name: slideTwoTitles[0] })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: slideOneTitles[0] })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('link', { name: slideOneTitles[0] })).toBeInTheDocument()

    // Previous from the first slide wraps to the last slide.
    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('link', { name: slideTwoTitles[0] })).toBeInTheDocument()
  })

  it('auto-advances every five seconds and keeps cycling', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)

      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('link', { name: slideTwoTitles[0] })).toBeInTheDocument()

      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('link', { name: slideOneTitles[0] })).toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })
})
