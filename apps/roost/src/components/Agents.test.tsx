import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Agents } from './Agents'

describe('Agents', () => {
  it('renders the section heading', () => {
    render(<Agents />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Agents')
  })

  it('renders 3 agent cards with names and listing counts', () => {
    render(<Agents />)
    const agentNames = screen.getAllByText('James Stallon')
    expect(agentNames.length).toBe(3)
    const listings = screen.getAllByText(/Listing/)
    expect(listings.length).toBe(3)
  })
})
