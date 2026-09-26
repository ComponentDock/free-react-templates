import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
  })

  it('renders the brand name heading', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { name: 'Photosnap' })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/A Photographer\. I Capture Life/)).toBeInTheDocument()
  })

  it('renders the cursive signature', () => {
    render(<Hero />)
    const signatures = screen.getAllByText('Photosnap')
    expect(signatures.length).toBeGreaterThanOrEqual(2)
  })

  it('renders social media icons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('has banner landmark', () => {
    render(<Hero />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('has watermark text with aria-hidden', () => {
    render(<Hero />)
    const watermarks = screen.getAllByText('Photosnap')
    const hidden = watermarks.find((el) => el.getAttribute('aria-hidden') === 'true')
    expect(hidden).toBeInTheDocument()
  })

  it('applies background image', () => {
    render(<Hero />)
    const banner = screen.getByRole('banner')
    const bgDiv = banner.querySelector('[style*="background-image"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
