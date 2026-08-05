import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline, rotating expert word, lead line, and Hire Us button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/We Are Expert in/)
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
    expect(screen.getByText('We Make Beautiful Things')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Hire Us' })).toHaveAttribute('href', '#contact')

    expect(screen.getByRole('img', { name: 'Chimper hero workspace' })).toBeInTheDocument()
  })

  it('cycles through the typed words over time', () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('WordPress')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
  })
})
