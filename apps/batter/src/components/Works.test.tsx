import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the section heading', () => {
    render(<Works />)
    expect(screen.getByText('Our Amazing Works')).toBeInTheDocument()
  })

  it('renders all six portfolio items', () => {
    render(<Works />)
    expect(screen.getByText('Vector Illustration')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
  })

  it('renders placeholder images with correct alt text', () => {
    render(<Works />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('alt', 'Vector Illustration')
  })
})
