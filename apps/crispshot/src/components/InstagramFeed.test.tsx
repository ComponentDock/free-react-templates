import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders the heading', () => {
    render(<InstagramFeed />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Follow Instagram')
  })

  it('renders the photographer handle in the heading area', () => {
    render(<InstagramFeed />)
    const handles = screen.getAllByText('@Crispshot_photographer')
    expect(handles.length).toBeGreaterThan(0)
  })

  it('renders 6 Instagram images', () => {
    render(<InstagramFeed />)
    const items = screen.getAllByTestId(/^instagram-item-/)
    expect(items.length).toBe(6)
  })
})
