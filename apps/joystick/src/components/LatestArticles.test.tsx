import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestArticles } from './LatestArticles'

describe('LatestArticles', () => {
  it('renders the section', () => {
    render(<LatestArticles />)
    expect(screen.getByLabelText('Latest Articles')).toBeDefined()
  })

  it('renders section heading', () => {
    render(<LatestArticles />)
    expect(screen.getByText('Latest Articles')).toBeDefined()
  })

  it('renders 3 articles', () => {
    render(<LatestArticles />)
    expect(screen.getByText("Sony's New Releases for 2025")).toBeDefined()
    expect(screen.getByText('10 Tips to Be a Better Gamer')).toBeDefined()
    expect(screen.getByText('Microsoft Has Some New Tips')).toBeDefined()
  })

  it('renders article dates', () => {
    render(<LatestArticles />)
    expect(screen.getByText('July 12, 2025')).toBeDefined()
  })

  it('renders article comments count', () => {
    render(<LatestArticles />)
    expect(screen.getByText('2 Comments')).toBeDefined()
  })

  it('renders sidebar deal section', () => {
    render(<LatestArticles />)
    expect(screen.getByText("This week's deal")).toBeDefined()
  })

  it('renders article images', () => {
    render(<LatestArticles />)
    expect(screen.getByAltText("Sony's New Releases for 2025")).toBeDefined()
  })
})
