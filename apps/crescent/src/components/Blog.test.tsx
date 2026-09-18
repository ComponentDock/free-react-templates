import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('A guide to community outreach programs')).toBeInTheDocument()
    expect(screen.getByText('A daily guide to spiritual growth')).toBeInTheDocument()
    expect(screen.getByText('The importance of community service')).toBeInTheDocument()
  })

  it('renders author and date', () => {
    render(<Blog />)
    expect(screen.getByText('Luke Coppen')).toBeInTheDocument()
    expect(screen.getByText('April 23, 2025')).toBeInTheDocument()
  })

  it('has data-testid', () => {
    render(<Blog />)
    expect(screen.getByTestId('blog')).toBeInTheDocument()
  })
})
