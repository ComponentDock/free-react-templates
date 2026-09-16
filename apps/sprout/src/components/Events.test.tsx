import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the heading and event cards', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()
    expect(screen.getByText('Community Prayer Night')).toBeInTheDocument()
    expect(screen.getByText('Youth Retreat 2026')).toBeInTheDocument()
    expect(screen.getByText('Christmas Service Celebration')).toBeInTheDocument()
  })

  it('renders the link for each event', () => {
    render(<Events />)
    const links = screen.getAllByRole('link', { name: /know jesus christ better/i })
    expect(links).toHaveLength(3)
  })
})
