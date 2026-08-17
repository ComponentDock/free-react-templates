import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the heading, subtext, and five category cards', () => {
    render(<Categories />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Things Are You Interested In' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Things you are looking for today')).toBeInTheDocument()
    // Restaurant & Bar and Outdoor each appear twice (left + right columns)
    expect(screen.getAllByText('Restaurant & Bar')).toHaveLength(2)
    expect(screen.getAllByText('Outdoor')).toHaveLength(2)
    expect(screen.getByText('Shopping Center')).toBeInTheDocument()
  })

  it('renders the tall card with its description and Explore pill', () => {
    render(<Categories />)
    expect(
      screen.getByText('Discover & connect with great local businesses in New York'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
  })
})
