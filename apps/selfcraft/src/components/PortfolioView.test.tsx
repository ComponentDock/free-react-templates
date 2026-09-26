import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioView } from './PortfolioView'

describe('PortfolioView', () => {
  it('displays the Portfolio heading', () => {
    render(<PortfolioView />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Portfolio')
  })

  it('renders six project items', () => {
    render(<PortfolioView />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('displays project titles', () => {
    render(<PortfolioView />)

    expect(screen.getByRole('heading', { name: 'Brand Identity' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Application' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mobile App' })).toBeInTheDocument()
  })

  it('displays project subtitles', () => {
    render(<PortfolioView />)

    expect(screen.getByText('Visual Design')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Dev')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
  })

  it('overlay elements have hover transition classes', () => {
    render(<PortfolioView />)

    const projectCards = screen.getAllByText(
      /Brand Identity|Web Application|Mobile App|E-Commerce|Marketing|Photography/,
    )
    for (const card of projectCards) {
      expect(card.closest('.group')).not.toBeNull()
    }
  })
})
