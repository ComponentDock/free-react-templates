import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('renders the heading, meta and both buttons', () => {
    render(<Sermons />)
    expect(screen.getByText("Experience God's Presence")).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sermon for Today' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Lord is Sufficient for all of our needs' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Sermon from: Felix Gonner/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Sermons' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Sermons' })).toBeInTheDocument()
  })
})
