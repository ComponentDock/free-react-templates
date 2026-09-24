import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the feature article', () => {
    render(<MainContent />)
    expect(screen.getByText('10 Tips to travel in style for less')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<MainContent />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Celebs')).toBeInTheDocument()
    expect(screen.getByText('4 Fun')).toBeInTheDocument()
  })

  it('renders sidebar articles', () => {
    render(<MainContent />)
    expect(screen.getByText('Superstar spotted with new boyfriend')).toBeInTheDocument()
    expect(screen.getByText('Festival looks for all the party people')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<MainContent />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
