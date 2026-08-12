import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterVideo } from './CounterVideo'
import { STAT_COUNTERS } from '../data'

describe('CounterVideo', () => {
  it('renders the play button, heading and video thumbnail', () => {
    render(<CounterVideo />)
    expect(screen.getByRole('heading', { level: 2, name: 'Ivy University' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play the university video' })).toHaveAttribute(
      'href',
      'https://vimeo.com/45830194',
    )
    expect(screen.getByRole('img', { name: 'Campus life at Ivy University' })).toBeInTheDocument()
  })

  it('renders the four stat counters with values and labels', () => {
    render(<CounterVideo />)
    for (const counter of STAT_COUNTERS) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })
})
