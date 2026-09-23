import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /our blog/i })).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Understanding Your Rights in Civil Litigation')).toBeInTheDocument()
    expect(screen.getByText('Key Strategies for Personal Injury Claims')).toBeInTheDocument()
    expect(screen.getByText('How to Choose the Right Legal Counsel')).toBeInTheDocument()
  })

  it('renders dates on cards', () => {
    render(<Blog />)
    const dates = screen.getAllByText('June 29, 2018')
    expect(dates.length).toBe(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Understanding Your Rights in Civil Litigation')).toBeInTheDocument()
    expect(screen.getByAltText('Key Strategies for Personal Injury Claims')).toBeInTheDocument()
    expect(screen.getByAltText('How to Choose the Right Legal Counsel')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    const authors = screen.getAllByText('Admin')
    expect(authors.length).toBe(3)
  })

  it('renders comment counts', () => {
    render(<Blog />)
    const comments = screen.getAllByText('19')
    expect(comments.length).toBe(3)
  })
})
