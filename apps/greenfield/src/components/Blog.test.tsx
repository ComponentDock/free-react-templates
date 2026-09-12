import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Post')).toBeInTheDocument()
  })

  it('renders all blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Modern Farming Techniques for 2025')).toBeInTheDocument()
    expect(screen.getByText('Benefits of Organic Agriculture')).toBeInTheDocument()
    expect(screen.getByText('Tips for Growing Healthy Crops')).toBeInTheDocument()
  })

  it('renders read more buttons', () => {
    render(<Blog />)
    const buttons = screen.getAllByRole('button', { name: /read more/i })
    expect(buttons).toHaveLength(3)
  })

  it('renders meta info', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 8, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2025')).toBeInTheDocument()
  })
})
