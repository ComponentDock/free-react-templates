import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('renders all blog cards', () => {
    render(<Blog />)
    expect(screen.getAllByTestId('blog-card')).toHaveLength(3)
    expect(screen.getByText('Top 10 Tips for Conference Attendees')).toBeInTheDocument()
    expect(screen.getByText('Why Developer Conferences Matter')).toBeInTheDocument()
    expect(screen.getByText('Behind the Scenes of Colloquium')).toBeInTheDocument()
  })

  it('renders blog metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Jan 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Admin')).toBeInTheDocument()
  })
})
