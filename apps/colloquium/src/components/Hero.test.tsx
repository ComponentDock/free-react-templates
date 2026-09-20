import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Biggest Developer Conference 2025')).toBeInTheDocument()
    expect(screen.getByText("Hurry Up! Don't Waste Time")).toBeInTheDocument()
  })

  it('renders countdown timer', () => {
    render(<Hero />)
    const countdown = screen.getByTestId('countdown')
    expect(countdown).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders location and date', () => {
    render(<Hero />)
    expect(screen.getByText('New York Convention Center')).toBeInTheDocument()
    expect(screen.getByText('01st - 05th February, 2025')).toBeInTheDocument()
  })
})
