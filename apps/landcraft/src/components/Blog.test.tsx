import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Creative Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Essential Spring Lawn Care Tips')).toBeInTheDocument()
    expect(screen.getByText('Designing a Low-Maintenance Garden')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Landscaping Practices')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/prepare your lawn/)).toBeInTheDocument()
  })

  it('renders Read More buttons for each post', () => {
    render(<Blog />)
    const buttons = screen.getAllByText('Read More')
    expect(buttons.length).toBe(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: 'Essential Spring Lawn Care Tips' })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Designing a Low-Maintenance Garden' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Sustainable Landscaping Practices' }),
    ).toBeInTheDocument()
  })
})
