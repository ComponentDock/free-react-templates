import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogTips } from './BlogTips'

describe('BlogTips', () => {
  it('renders the section heading', () => {
    render(<BlogTips />)
    expect(screen.getByRole('heading', { level: 2, name: /Tips & Articles/ })).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<BlogTips />)
    expect(screen.getByText('Etiquette Tips for Travellers')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Hidden Gems in New York')).toBeInTheDocument()
    expect(screen.getByText('How to Plan the Perfect Weekend Trip')).toBeInTheDocument()
  })

  it('displays author names', () => {
    render(<BlogTips />)
    expect(screen.getByText(/Jeff Sheldon/)).toBeInTheDocument()
  })

  it('displays dates', () => {
    render(<BlogTips />)
    expect(screen.getByText(/May 5, 2024/)).toBeInTheDocument()
  })
})
