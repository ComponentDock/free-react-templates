import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and at least three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent from blog/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /men.s hairstyle for all face shapes/i }),
    ).toHaveLength(3)
    expect(screen.getAllByText(/Sept 10, 2018/i).length).toBeGreaterThanOrEqual(3)
  })
})
