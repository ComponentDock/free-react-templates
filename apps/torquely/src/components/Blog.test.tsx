import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest news from our blog/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Best wheel alignment & air conditioning/i }),
    ).toHaveLength(3)
    expect(screen.getAllByText(/Posted by John doe/i)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Best wheel alignment/i })).toHaveLength(3)
  })
})
