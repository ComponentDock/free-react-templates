import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and blog cards with authors and dates', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Blog Post/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /john deo/i }).length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/May 02 2019/i).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByRole('link', { name: /Next/i })).toBeInTheDocument()
  })
})
