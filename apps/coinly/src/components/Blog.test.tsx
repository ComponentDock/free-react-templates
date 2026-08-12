import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section title and three blog cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(3)
    expect(screen.getAllByText('by Admin')).toHaveLength(3)
    expect(screen.getAllByText(/Likes/)).toHaveLength(3)
    expect(screen.getAllByText(/comments/)).toHaveLength(3)
  })
})
