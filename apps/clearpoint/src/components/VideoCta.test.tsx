import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the heading, paragraphs and dark Learn More button', () => {
    render(<VideoCta />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /boost our clients. bottom line by optimizing/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/unit economics, funnel conversion/i)).toBeInTheDocument()
    expect(screen.getByText(/compounding growth curve/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#case-study')
  })

  it('renders the mint circular play button', () => {
    render(<VideoCta />)
    const play = screen.getByRole('link', { name: /Play introduction video/i })
    expect(play).toHaveAttribute('href', '#contact')
    expect(play.className).toContain('bg-brand')
    expect(play.className).toContain('rounded-full')
  })
})
