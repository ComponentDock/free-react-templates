import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders two blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Google saying pseudo-telephoto is more important')).toBeInTheDocument()
    expect(screen.getByText('The future of creative design in a digital world')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('October 18, 2024')).toBeInTheDocument()
    expect(screen.getByText('October 12, 2024')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    expect(screen.getByText('John Freeman')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Blog />)
    expect(screen.getByText('Thinker & Designer')).toBeInTheDocument()
    expect(screen.getByText('Art Director')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
