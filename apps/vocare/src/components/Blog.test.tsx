import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the subheading and heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders four blog cards with meta and title', () => {
    render(<Blog />)
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getAllByText(/August 28, 2019/)).toHaveLength(4)
    expect(screen.getAllByText(/Admin/)).toHaveLength(4)
    expect(screen.getAllByText(/3/)).toHaveLength(4)
    expect(
      screen.getAllByText('Even the all-powerful Pointing has no control about the blind texts'),
    ).toHaveLength(4)
  })
})
