import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Activities } from './Activities'

describe('Activities', () => {
  it('renders the section heading', () => {
    render(<Activities />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Church Activities')
  })

  it('shows upcoming events', () => {
    render(<Activities />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getAllByText('Weekend Bible Study with believers')).toHaveLength(2)
  })

  it('shows latest sermons', () => {
    render(<Activities />)
    expect(screen.getByText('Latest Sermons')).toBeInTheDocument()
    expect(screen.getByText('Walking in Grace')).toBeInTheDocument()
  })

  it('renders see all events link', () => {
    render(<Activities />)
    expect(screen.getByText('See All Events →')).toHaveAttribute('href', '#events')
  })

  it('renders see more link for sermons', () => {
    render(<Activities />)
    expect(screen.getByText('See More →')).toHaveAttribute('href', '#sermons')
  })
})
