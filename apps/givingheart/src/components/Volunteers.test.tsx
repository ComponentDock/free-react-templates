import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section heading', () => {
    render(<Volunteers />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Volunteers')
  })

  it('renders the subtitle', () => {
    render(<Volunteers />)
    expect(screen.getByText(/incredible people who dedicate/)).toBeInTheDocument()
  })

  it('renders exactly 4 volunteer cards', () => {
    render(<Volunteers />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('renders volunteer names', () => {
    render(<Volunteers />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('uses a grid layout', () => {
    render(<Volunteers />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    const grid = section.querySelector('.grid')
    expect(grid).toBeInTheDocument()
  })
})
