import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from '../components/Portfolio'

describe('Portfolio', () => {
  it('renders the Our Works heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /our works/i })).toBeInTheDocument()
  })

  it('renders 3 portfolio items', () => {
    render(<Portfolio />)
    const titles = ['Cassette Tape', 'Miniwall Clock', 'Mobile App Design']
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Application')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Portfolio />)
    const authors = screen.getAllByText('Jamie Jonson')
    expect(authors.length).toBe(3)
  })

  it('renders View Portfolio buttons', () => {
    render(<Portfolio />)
    const buttons = screen.getAllByRole('link', { name: /view portfolio/i })
    expect(buttons.length).toBe(3)
  })

  it('renders project images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    const projectImages = images.filter((img) =>
      img.getAttribute('alt')?.includes('project preview'),
    )
    expect(projectImages.length).toBe(3)
  })
})
