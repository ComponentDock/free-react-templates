import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('We love to share our accomplishments')).toBeInTheDocument()
  })

  it('renders three project images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('has the projects section id', () => {
    render(<Portfolio />)
    expect(document.getElementById('projects')).toBeInTheDocument()
  })

  it('renders images with correct alt text', () => {
    render(<Portfolio />)
    expect(screen.getByAltText('Construction project 1')).toBeInTheDocument()
    expect(screen.getByAltText('Construction project 2')).toBeInTheDocument()
    expect(screen.getByAltText('Construction project 3')).toBeInTheDocument()
  })
})
