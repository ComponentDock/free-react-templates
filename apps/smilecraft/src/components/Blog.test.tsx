import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()

    const titles = [
      'The Importance of Regular Dental Checkups',
      'Tips for Maintaining a Healthy Smile',
      'Understanding Modern Dental Technology',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText(/Regular dental visits can prevent/)).toBeInTheDocument()

    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks).toHaveLength(3)
  })
})
