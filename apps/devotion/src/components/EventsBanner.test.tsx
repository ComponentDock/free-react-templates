import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EventsBanner } from './EventsBanner'

describe('EventsBanner', () => {
  it('renders the event title', () => {
    render(<EventsBanner />)
    expect(screen.getByText('December Camp Meeting')).toBeInTheDocument()
  })

  it('shows the caption', () => {
    render(<EventsBanner />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('shows the countdown label', () => {
    render(<EventsBanner />)
    expect(screen.getByText(/camp meeting will start in/i)).toBeInTheDocument()
  })
})
