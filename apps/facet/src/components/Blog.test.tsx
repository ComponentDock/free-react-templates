import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Read Our Stories' })).toBeInTheDocument()
    for (const title of [
      'Why Lead Generation is Key for Business Growth',
      'Interior Trends That Define the Modern Office',
      'How to Plan a Renovation on a Budget',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Read More')).toHaveLength(3)
  })
})
