import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterStrip } from './CounterStrip'

describe('CounterStrip', () => {
  it('displays the people helped counter', () => {
    render(<CounterStrip />)
    expect(screen.getByText('1,432,805')).toBeInTheDocument()
  })

  it('shows the Donate Money section', () => {
    render(<CounterStrip />)
    expect(screen.getByText('Donate Money')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Donate Now/i })).toHaveAttribute('href', '#donate')
  })

  it('shows the Be a Volunteer section', () => {
    render(<CounterStrip />)
    expect(screen.getByText('Be a Volunteer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Be A Volunteer/i })).toBeInTheDocument()
  })
})
