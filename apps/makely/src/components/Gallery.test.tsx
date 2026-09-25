import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Our Gallery/i })).toBeInTheDocument()
  })

  it('renders all gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('makely-gal1'))
  })

  it('renders gallery item titles', () => {
    render(<Gallery />)
    expect(screen.getByText('Bonzai Tree')).toBeInTheDocument()
    expect(screen.getByText('Simple Woman')).toBeInTheDocument()
    expect(screen.getByText('Cat With Cup')).toBeInTheDocument()
  })
})
