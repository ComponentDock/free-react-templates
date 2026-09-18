import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EventSpotlight } from './EventSpotlight'
import { eventSpotlight } from '../data'

describe('EventSpotlight', () => {
  it('renders the event date, title, time, and location', () => {
    render(<EventSpotlight />)
    expect(screen.getByText(eventSpotlight.day)).toBeInTheDocument()
    expect(screen.getByText(eventSpotlight.month)).toBeInTheDocument()
    expect(screen.getByText(eventSpotlight.title)).toBeInTheDocument()
    expect(screen.getByText(eventSpotlight.time)).toBeInTheDocument()
    expect(screen.getByText(eventSpotlight.location)).toBeInTheDocument()
  })

  it('renders the countdown values', () => {
    render(<EventSpotlight />)
    expect(screen.getByText(eventSpotlight.countdown.days)).toBeInTheDocument()
    expect(screen.getByText(eventSpotlight.countdown.hours)).toBeInTheDocument()
  })

  it('renders the Read more CTA', () => {
    render(<EventSpotlight />)
    expect(screen.getByRole('link', { name: eventSpotlight.ctaLabel })).toBeInTheDocument()
  })
})
