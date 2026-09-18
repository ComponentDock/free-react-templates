import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
  })

  it('renders 4 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('How To Ace Your Remote Job Interview')).toBeInTheDocument()
    expect(screen.getByText('Top 10 In-Demand Skills For 2026')).toBeInTheDocument()
    expect(screen.getByText('Building A Career In Tech')).toBeInTheDocument()
    expect(screen.getByText('Work-Life Balance Tips')).toBeInTheDocument()
  })

  it('renders authors', () => {
    render(<Blog />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Lisa Chen')).toBeInTheDocument()
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
    expect(screen.getByText('Anna Davis')).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
  })

  it('renders excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Master the art of remote interviews/)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})
