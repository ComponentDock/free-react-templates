import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedClasses } from './FeaturedClasses'

describe('FeaturedClasses', () => {
  it('renders the section heading', () => {
    render(<FeaturedClasses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Classes')
  })

  it('renders all four class cards', () => {
    render(<FeaturedClasses />)
    expect(screen.getByText('Ashtanga Foundations')).toBeInTheDocument()
    expect(screen.getByText('Surya Vinyasa')).toBeInTheDocument()
    expect(screen.getByText('Chandra Vinyasa')).toBeInTheDocument()
    expect(screen.getByText('Yinyasa')).toBeInTheDocument()
  })

  it('displays prices for each class', () => {
    render(<FeaturedClasses />)
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByText('$32.99')).toBeInTheDocument()
    expect(screen.getByText('$22.99')).toBeInTheDocument()
    expect(screen.getByText('$34.99')).toBeInTheDocument()
  })

  it('renders Previous and Next buttons', () => {
    render(<FeaturedClasses />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('renders class images with alt text', () => {
    render(<FeaturedClasses />)
    expect(screen.getByAltText('Ashtanga Foundations')).toBeInTheDocument()
    expect(screen.getByAltText('Surya Vinyasa')).toBeInTheDocument()
  })
})
