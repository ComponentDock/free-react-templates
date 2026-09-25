import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestAlbums } from './LatestAlbums'

describe('LatestAlbums', () => {
  it('renders the section heading', () => {
    render(<LatestAlbums />)
    expect(screen.getByRole('heading', { name: 'Latest Albums' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<LatestAlbums />)
    expect(screen.getByText("See what's new")).toBeInTheDocument()
  })

  it('renders all album cards', () => {
    render(<LatestAlbums />)
    expect(screen.getByText('The Cure')).toBeInTheDocument()
    expect(screen.getByText('Sam Smith')).toBeInTheDocument()
    expect(screen.getByText('Beyonce')).toBeInTheDocument()
  })

  it('renders album images with alt text', () => {
    render(<LatestAlbums />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(6)
  })
})
