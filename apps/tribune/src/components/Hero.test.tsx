import { render, screen, act, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero } from './Hero'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2025-10-01T00:00:00Z'))
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the conference heading and date', () => {
    render(<Hero />)
    expect(screen.getByText('Business Leaders')).toBeInTheDocument()
    expect(screen.getByText('Conference 2025')).toBeInTheDocument()
    expect(screen.getByText(/20–23 November 2025/)).toBeInTheDocument()
  })

  it('renders the countdown timer', () => {
    render(<Hero />)
    const timer = screen.getByRole('timer', { name: 'Countdown timer' })
    expect(timer).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('renders the registration form', () => {
    render(<Hero />)
    expect(screen.getByText('Join Conference')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your Phone')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /join now/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', () => {
    render(<Hero />)
    const nameInput = screen.getByPlaceholderText('Enter your Name')
    fireEvent.change(nameInput, { target: { value: 'John' } })
    expect(nameInput).toHaveValue('John')

    const emailInput = screen.getByPlaceholderText('Enter your Email')
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    expect(emailInput).toHaveValue('john@example.com')

    const phoneInput = screen.getByPlaceholderText('Enter your Phone')
    fireEvent.change(phoneInput, { target: { value: '1234567890' } })
    expect(phoneInput).toHaveValue('1234567890')
  })

  it('allows toggling the checkbox', () => {
    render(<Hero />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('submits the form without error', () => {
    render(<Hero />)
    fireEvent.submit(screen.getByRole('button', { name: /join now/i }))
  })

  it('updates countdown over time', () => {
    render(<Hero targetDate={new Date('2025-10-02T00:00:30Z')} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(60 * 1000)
    })
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
