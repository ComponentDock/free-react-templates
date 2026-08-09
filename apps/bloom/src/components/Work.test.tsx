import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('shows the heading and three portfolio tiles', () => {
    render(<Work />)

    expect(screen.getByRole('heading', { name: 'Our Work' })).toBeInTheDocument()
    expect(screen.getByText('Lips Makeover')).toBeInTheDocument()
    expect(screen.getByText('Hair Style')).toBeInTheDocument()
    expect(screen.getByText('Makeup')).toBeInTheDocument()
  })

  it('shows a photo per tile', () => {
    render(<Work />)

    expect(screen.getAllByRole('img').length).toBe(3)
    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
