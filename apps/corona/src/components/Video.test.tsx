import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Video } from './Video'

describe('Video', () => {
  it('shows the white section title on the muted band', () => {
    render(<Video />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Watch Our Trainers/)
    expect(screen.getByText(/See how our mentors teach/)).toBeInTheDocument()
  })

  it('renders two video thumbnails with play buttons', () => {
    render(<Video />)

    expect(screen.getAllByRole('figure')).toHaveLength(2)
    expect(
      screen.getByRole('button', { name: 'Play Live class demo — Angular' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Play Mentor workshop — Photography' }),
    ).toBeInTheDocument()
  })
})
