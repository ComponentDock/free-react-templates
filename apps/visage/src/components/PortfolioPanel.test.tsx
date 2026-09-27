import { render, screen } from '@testing-library/react'
import { PortfolioPanel } from './PortfolioPanel'

describe('PortfolioPanel', () => {
  it('renders the section heading', () => {
    render(<PortfolioPanel />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('renders all portfolio items', () => {
    render(<PortfolioPanel />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Web Application')).toBeInTheDocument()
    expect(screen.getByText('Mobile App UI')).toBeInTheDocument()
    expect(screen.getByText('E-commerce Site')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Design')).toBeInTheDocument()
    expect(screen.getByText('Landing Page')).toBeInTheDocument()
  })

  it('renders images with picsum placeholders', () => {
    render(<PortfolioPanel />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
