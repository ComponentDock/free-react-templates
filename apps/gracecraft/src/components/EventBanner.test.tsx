import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EventBanner } from './EventBanner'

describe('EventBanner', () => {
  it('shows event date badge, title, time, and location', () => {
    render(<EventBanner />)
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('mar')).toBeInTheDocument()
    expect(screen.getByText(/Exploring the Christian Faith/)).toBeInTheDocument()
    expect(screen.getByText(/08:00 AM - 11:00 AM/)).toBeInTheDocument()
    expect(screen.getByText(/1195 Lobortis Rd/)).toBeInTheDocument()
  })

  it('displays countdown timer units', () => {
    render(<EventBanner />)
    expect(screen.getByText('day')).toBeInTheDocument()
    expect(screen.getByText('hrs')).toBeInTheDocument()
    expect(screen.getByText('min')).toBeInTheDocument()
    expect(screen.getByText('sec')).toBeInTheDocument()
  })
})
