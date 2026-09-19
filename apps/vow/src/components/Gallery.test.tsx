import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders hashtag links', () => {
    render(<Gallery />)
    expect(screen.getByText('#vow')).toBeInTheDocument()
    expect(screen.getByText('#vowinstagram')).toBeInTheDocument()
    expect(screen.getByText('#vowgirl')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Gallery />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('renders 6 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByAltText('Gallery item')
    expect(images).toHaveLength(6)
  })
})
