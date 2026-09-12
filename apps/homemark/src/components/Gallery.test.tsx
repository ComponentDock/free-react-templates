import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and gallery images', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Houses')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders text columns', () => {
    render(<Gallery />)
    expect(screen.getByText('INTERIOR')).toBeInTheDocument()
    expect(screen.getByText('ENVIRONMENT FRIENDLY')).toBeInTheDocument()
  })

  it('renders image links with eye icons', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })
})
