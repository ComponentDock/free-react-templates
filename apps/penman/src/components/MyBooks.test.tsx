import { render, screen } from '@testing-library/react'
import { MyBooks } from './MyBooks'
import { describe, it, expect } from 'vitest'

describe('MyBooks', () => {
  it('renders the section heading', () => {
    render(<MyBooks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Other Books')
  })

  it('renders the projects label', () => {
    render(<MyBooks />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders 8 book cards', () => {
    render(<MyBooks />)
    const images = screen.getAllByAltText('Book cover')
    expect(images).toHaveLength(8)
  })

  it('renders book titles', () => {
    render(<MyBooks />)
    expect(screen.getAllByText('You Are Your Only Limit')).toHaveLength(8)
  })

  it('renders genre labels', () => {
    render(<MyBooks />)
    expect(screen.getAllByText('Romance')).toHaveLength(8)
  })
})
