import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Latest Posts from Our Blog',
    )
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Revolutionizing Factory Automation with AI')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Industrial Practices for 2025')).toBeInTheDocument()
    expect(screen.getByText('The Future of Smart Manufacturing')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Revolutionizing Factory Automation with AI')).toBeInTheDocument()
    expect(screen.getByAltText('Sustainable Industrial Practices for 2025')).toBeInTheDocument()
    expect(screen.getByAltText('The Future of Smart Manufacturing')).toBeInTheDocument()
  })
})
