import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Year End Conference')).toBeInTheDocument()
    expect(screen.getByText('Now you can watch the Talent')).toBeInTheDocument()
  })

  it('renders date and location', () => {
    render(<Hero />)
    expect(screen.getByText('05th - 09th February, 2025')).toBeInTheDocument()
    expect(screen.getByText('56/8, Dhanmondi, Dhaka - 1205')).toBeInTheDocument()
  })

  it('renders countdown area', () => {
    render(<Hero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
  })
})
