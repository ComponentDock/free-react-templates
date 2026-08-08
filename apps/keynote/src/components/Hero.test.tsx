import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, level-1 heading, blurb and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/September 18–20, 2026 · San Francisco, CA/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/The Future of AI is Here/i)
    expect(screen.getByText(/Join 5,000\+ researchers/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Your Ticket/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Schedule/i })).toBeInTheDocument()
  })

  it('renders the countdown and the statistics row', () => {
    render(<Hero />)
    expect(screen.getByText('Event starts in')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()

    expect(screen.getByText('5,000+')).toBeInTheDocument()
    expect(screen.getByText('80+')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('Attendees')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Workshops')).toBeInTheDocument()
  })
})
