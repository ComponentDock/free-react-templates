import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /lawyers news/i })).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Blog />)
    expect(screen.getByText('Insight and Trends Articles')).toBeInTheDocument()
  })

  it('renders 2 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Understanding Your Legal Rights')).toBeInTheDocument()
    expect(screen.getByText('Corporate Law Trends in 2024')).toBeInTheDocument()
  })

  it('renders dates on cards', () => {
    render(<Blog />)
    expect(screen.getByText('October 27, 2020')).toBeInTheDocument()
    expect(screen.getByText('November 15, 2020')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Understanding Your Legal Rights')).toBeInTheDocument()
    expect(screen.getByAltText('Corporate Law Trends in 2024')).toBeInTheDocument()
  })
})
