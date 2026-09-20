import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Conference Gallery')).toBeInTheDocument()
  })

  it('renders four gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('gallery links open in new tab', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
