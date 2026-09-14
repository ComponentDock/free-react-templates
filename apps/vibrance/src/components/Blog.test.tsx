import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Design Inspiration')).toBeInTheDocument()
    expect(screen.getByText('Gradients are in!')).toBeInTheDocument()
    expect(screen.getByText('All about color')).toBeInTheDocument()
  })

  it('renders blog metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText('Design')).toHaveLength(3)
    expect(screen.getAllByText('Loredana Papp')).toHaveLength(3)
    expect(screen.getAllByText('3 comments')).toHaveLength(3)
  })

  it('renders read more buttons', () => {
    render(<Blog />)
    const buttons = screen.getAllByLabelText(/Read more about/)
    expect(buttons).toHaveLength(3)
  })
})
