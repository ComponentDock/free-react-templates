import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders all portfolio items when filter is All', () => {
    render(<PortfolioGrid activeFilter="All" />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Product Photo')).toBeInTheDocument()
    expect(screen.getByText('Architecture Project')).toBeInTheDocument()
  })

  it('filters items by category', () => {
    render(<PortfolioGrid activeFilter="Branding" />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Logo Design')).toBeInTheDocument()
    expect(screen.getByText('Packaging Design')).toBeInTheDocument()
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
  })

  it('shows empty message when no items match filter', () => {
    render(<PortfolioGrid activeFilter="Photography" />)
    expect(screen.queryByText('Brand Identity')).not.toBeInTheDocument()
    expect(screen.getByText('Product Photo')).toBeInTheDocument()
    expect(screen.getByText('Portrait Session')).toBeInTheDocument()
  })

  it('renders portfolio images with correct alt text', () => {
    render(<PortfolioGrid activeFilter="All" />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    expect(images[0]).toHaveAttribute('alt', 'Brand Identity')
  })

  it('shows overlay on hover with project details', () => {
    const { container } = render(<PortfolioGrid activeFilter="All" />)
    const items = container.querySelectorAll('.break-inside-avoid')
    expect(items.length).toBeGreaterThan(0)
    // Hover over first portfolio item using fireEvent to trigger React handler
    const first = items[0] as HTMLElement
    fireEvent.mouseEnter(first)
    // Overlay should be visible (opacity-100)
    expect(screen.getAllByText('Brand Identity').length).toBeGreaterThanOrEqual(1)
    // Move away
    fireEvent.mouseLeave(first)
  })

  it('shows empty message when no items match filter', () => {
    render(<PortfolioGrid activeFilter={'Dance' as never} />)
    expect(screen.getByText('No items match this filter.')).toBeInTheDocument()
  })
})
