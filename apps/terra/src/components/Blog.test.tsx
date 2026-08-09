import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getAllByRole('heading', { name: 'Tips for Perfect Makeup' })).toHaveLength(3)
  })
})
