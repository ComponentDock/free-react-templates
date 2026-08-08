import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, welcome copy and CTAs over a photo background', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: /A Place to Belong/ })).toBeInTheDocument()
    expect(
      screen.getByText(/Whether you're exploring faith for the first time/),
    ).toBeInTheDocument()

    const hero = screen.getByRole('img', { name: /congregation/i })
    expect(hero).toBeInTheDocument()
    expect(hero).toHaveAttribute('src', expect.stringContaining('picsum.photos'))

    expect(screen.getByRole('link', { name: 'Plan Your Visit' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Online/ })).toBeInTheDocument()
  })

  it('shows the Join Us This Week schedule card with gold service times', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: /Join Us This Week/ })).toBeInTheDocument()
    expect(screen.getByText('Sunday Worship')).toBeInTheDocument()
    expect(screen.getByText('Wednesday Bible Study')).toBeInTheDocument()
    expect(screen.getByText('Youth Group')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM & 11:00 AM')).toBeInTheDocument()
    expect(screen.getByText('7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('6:30 PM')).toBeInTheDocument()
  })
})
