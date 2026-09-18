import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BiWeekly } from './BiWeekly'

describe('BiWeekly', () => {
  it('renders the section heading', () => {
    render(<BiWeekly />)
    expect(screen.getByText('Bi-weekly episodes')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<BiWeekly />)
    expect(screen.getByText(/Cras congue et risus/)).toBeInTheDocument()
  })

  it('renders platform buttons', () => {
    render(<BiWeekly />)
    expect(screen.getByText('Amazon')).toBeInTheDocument()
    expect(screen.getByText('iTunes')).toBeInTheDocument()
    expect(screen.getByText('Spotify')).toBeInTheDocument()
  })

  it('renders the show image', () => {
    render(<BiWeekly />)
    const img = screen.getByAltText('Podcast show')
    expect(img).toBeInTheDocument()
  })

  it('renders logo watermark', () => {
    render(<BiWeekly />)
    expect(screen.getByText('my')).toBeInTheDocument()
    expect(screen.getByText('podcast')).toBeInTheDocument()
  })

  it('has a parallax background', () => {
    render(<BiWeekly />)
    const bg = document.querySelector('[style*="background-image"]')
    expect(bg).toBeTruthy()
  })
})
