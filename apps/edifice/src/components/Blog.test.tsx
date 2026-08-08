import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with titles and dates', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
    for (const title of [
      'Smart City Construction',
      'Green Building Materials',
      'Safe Site Operations',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('Jan 12, 2026')).toBeInTheDocument()
    expect(screen.getByText('Jan 08, 2026')).toBeInTheDocument()
    expect(screen.getByText('Dec 30, 2025')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
