import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
    expect(screen.getByText(/understanding your rights/i)).toBeInTheDocument()
    expect(screen.getByText(/how to choose the right lawyer/i)).toBeInTheDocument()
    expect(screen.getByText(/recent changes in business law/i)).toBeInTheDocument()
  })

  it('renders date labels', () => {
    render(<Blog />)
    expect(screen.getByText('Nov 23, 2024')).toBeInTheDocument()
    expect(screen.getByText('Nov 18, 2024')).toBeInTheDocument()
    expect(screen.getByText('Nov 10, 2024')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders excerpt text', () => {
    render(<Blog />)
    expect(screen.getByText(/guide to knowing/i)).toBeInTheDocument()
  })
})
