import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, gradient headline, and blurb', () => {
    render(<Hero />)

    expect(screen.getByText('Wednesdays at 6:30 PM')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/RISE HIGHER/i)
    expect(screen.getByText(/made to do life alone/i)).toBeInTheDocument()
  })

  it('renders both call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Join Us Wednesday' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Latest Message' })).toBeInTheDocument()
  })

  it('renders the hero stats band', () => {
    render(<Hero />)

    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('Students Weekly')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Small Groups')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Leaders')).toBeInTheDocument()
  })
})
