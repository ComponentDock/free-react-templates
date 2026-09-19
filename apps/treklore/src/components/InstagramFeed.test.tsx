import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders section title', () => {
    render(<InstagramFeed />)
    expect(screen.getByText('@Treklore on Instagram')).toBeInTheDocument()
    expect(screen.getByText('follow our journey')).toBeInTheDocument()
  })

  it('renders 6 images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders images with alt text', () => {
    render(<InstagramFeed />)
    expect(screen.getByAltText('Treklore Instagram post 1')).toBeInTheDocument()
    expect(screen.getByAltText('Treklore Instagram post 6')).toBeInTheDocument()
  })

  it('renders links with accessible labels', () => {
    render(<InstagramFeed />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(6)
  })
})
