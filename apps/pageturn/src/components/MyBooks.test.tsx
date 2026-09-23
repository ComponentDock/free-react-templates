import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyBooks } from './MyBooks'

describe('MyBooks', () => {
  it('renders heading and 8 book cards', () => {
    render(<MyBooks />)

    expect(screen.getByText('My Other Books')).toBeInTheDocument()
    expect(screen.getByText('The Great Adventure')).toBeInTheDocument()
    expect(screen.getByText('Digital Future')).toBeInTheDocument()
    expect(screen.getByText('Ocean Dreams')).toBeInTheDocument()
    expect(screen.getByText('Mountain Path')).toBeInTheDocument()
    expect(screen.getByText('City Lights')).toBeInTheDocument()
    expect(screen.getByText('Wild Spirit')).toBeInTheDocument()
    expect(screen.getByText('Star Crossing')).toBeInTheDocument()
    expect(screen.getByText('Golden Hour')).toBeInTheDocument()
  })

  it('renders genre tags', () => {
    render(<MyBooks />)

    expect(screen.getByText('Fiction')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Sci-Fi')).toBeInTheDocument()
    expect(screen.getByText('Poetry')).toBeInTheDocument()
  })

  it('renders book cover images', () => {
    render(<MyBooks />)

    const covers = screen.getAllByRole('img')
    expect(covers).toHaveLength(8)
  })
})
