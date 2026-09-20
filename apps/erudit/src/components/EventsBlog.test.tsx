import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EventsBlog } from './EventsBlog'

describe('EventsBlog', () => {
  it('renders events heading', () => {
    render(<EventsBlog />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders blog heading', () => {
    render(<EventsBlog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders 4 event entries', () => {
    render(<EventsBlog />)
    const events = screen.getAllByText(/Training|Workshop|Bootcamp|Sprint/)
    expect(events.length).toBeGreaterThanOrEqual(4)
  })

  it('renders 4 blog entries', () => {
    render(<EventsBlog />)
    const blogs = screen.getAllByRole('heading', { level: 3 })
    expect(blogs.length).toBeGreaterThanOrEqual(4)
  })

  it('shows event locations', () => {
    render(<EventsBlog />)
    expect(screen.getAllByText(/291 South 21th Street/).length).toBeGreaterThanOrEqual(1)
  })

  it('shows blog date meta', () => {
    render(<EventsBlog />)
    expect(screen.getByText('May 29, 2024')).toBeInTheDocument()
  })
})
