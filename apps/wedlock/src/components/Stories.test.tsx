import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stories } from './Stories'

describe('Stories', () => {
  it('renders the wedding stories heading', () => {
    render(<Stories />)
    expect(screen.getByRole('heading', { level: 1, name: 'Wedding stories' })).toBeInTheDocument()
  })

  it('renders story cards with photos, categories, titles and read-more links', () => {
    render(<Stories />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByRole('link', { name: /Read more/i }).length).toBe(3)
    expect(screen.getByText('A lakeside ceremony in Tuscany')).toBeInTheDocument()
    expect(screen.getByText('Vintage glamour in the city')).toBeInTheDocument()
  })
})
