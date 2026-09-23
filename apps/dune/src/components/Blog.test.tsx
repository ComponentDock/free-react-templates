import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and blog cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /From our Blog/i })).toBeInTheDocument()
    const titles = screen.getAllByText(/Forest responds to consultation/i)
    expect(titles).toHaveLength(3)
  })

  it('displays dates and comment counts', () => {
    render(<Blog />)
    expect(screen.getAllByText('Jan 03, 2024')).toHaveLength(3)
    expect(screen.getAllByText('03 Comments')).toHaveLength(3)
  })
})
