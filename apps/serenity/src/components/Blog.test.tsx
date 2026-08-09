import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the Recent Posts heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
  })

  it('renders three post cards with dates and read-more links', () => {
    render(<Blog />)
    for (const title of [
      'Is wellness the new luxury',
      'Spa rituals for a calmer mind',
      'Why regular massage matters',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('Sep 25, 2019')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
