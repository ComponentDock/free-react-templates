import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what kind of coffee/i)
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('The Art of Pour-Over Coffee')).toBeInTheDocument()
    expect(screen.getByText('Why Single Origin Beans Matter')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('31st January, 2032')
    expect(dates).toHaveLength(2)
  })

  it('renders blog post tags', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'Coffee' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Lifestyle' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Travel' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Life Style' })).toBeInTheDocument()
  })
})
