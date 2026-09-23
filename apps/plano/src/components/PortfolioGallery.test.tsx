import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGallery } from './PortfolioGallery'

describe('PortfolioGallery', () => {
  it('renders the section heading', () => {
    render(<PortfolioGallery />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Works' })).toBeInTheDocument()
  })

  it('renders four project rows', () => {
    render(<PortfolioGallery />)
    expect(screen.getByText('White Blocks House')).toBeInTheDocument()
    expect(screen.getAllByText('Art Gallery Design')).toHaveLength(2)
    expect(screen.getByText('Office Space')).toBeInTheDocument()
  })

  it('renders Details buttons for each project', () => {
    render(<PortfolioGallery />)
    const detailsButtons = screen.getAllByRole('link', { name: 'Details' })
    expect(detailsButtons).toHaveLength(4)
  })

  it('renders project images', () => {
    render(<PortfolioGallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
