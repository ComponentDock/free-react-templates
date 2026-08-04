import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog posts with titles and read-more links', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Recent Blog' })).toBeInTheDocument()

    for (const title of [
      'Amazing Places To Visit In Summer',
      'Developing Creativithout Losing Visual',
      'Winter Photography Tips from Glenn',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
