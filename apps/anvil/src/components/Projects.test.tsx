import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and gallery images with captions', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /See Our Video/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText(/Dolores perferendis ipsam animi/i)).toBeInTheDocument()
  })

  it('renders a caption for each gallery image', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    for (const image of images) {
      expect(image).toHaveAttribute('alt')
    }
  })
})
