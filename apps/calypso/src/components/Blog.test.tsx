import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section', () => {
    render(<Blog />)
    expect(screen.getByTestId('blog')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Articles')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Design Systems in 2026')).toBeInTheDocument()
    expect(screen.getByText('How to Run Effective User Interviews')).toBeInTheDocument()
    expect(screen.getByText('From Junior to Senior: Growing as a Designer')).toBeInTheDocument()
  })

  it('renders blog categories', () => {
    render(<Blog />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('UX Research')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
  })

  it('renders blog dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
