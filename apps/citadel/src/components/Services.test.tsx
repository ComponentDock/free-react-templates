import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders the heading text', () => {
    render(<Services />)
    expect(screen.getByText(/We provide all of your/i)).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Industrial Construction')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
    expect(screen.getByText('Bridge Construction')).toBeInTheDocument()
  })

  it('renders Read More links for each service', () => {
    render(<Services />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive industrial construction/i)).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
