import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three entries with meta', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Know About Our God Who Created This Universe' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Aug 5, 2019/)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3)
  })
})
