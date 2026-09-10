import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Work')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Gallery />)
    expect(screen.getByLabelText('Work gallery')).toBeInTheDocument()
  })

  it('renders all gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders portfolio label', () => {
    render(<Gallery />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
