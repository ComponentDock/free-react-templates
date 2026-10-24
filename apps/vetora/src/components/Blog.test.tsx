import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and the three blog posts with titles and excerpts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest Blog Updates' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Shelter and Feed Animals that Are in Need' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Aug. 12, 2020 | Admin | 3')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
  })
})
