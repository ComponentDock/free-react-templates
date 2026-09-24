import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { breakingNews, navLinks, stockTicker } from '../data'

describe('Header', () => {
  it('renders the 3-tier header structure', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'NewsClip' })).toBeInTheDocument()
  })

  it('renders breaking news items', () => {
    render(<Header />)
    expect(screen.getAllByText('Breaking').length).toBeGreaterThan(0)
    for (const item of breakingNews) {
      expect(screen.getAllByText(item).length).toBeGreaterThan(0)
    }
  })

  it('renders stock ticker on desktop', () => {
    render(<Header />)
    for (const stock of stockTicker) {
      expect(screen.getByText(stock.symbol)).toBeInTheDocument()
      expect(screen.getByText(stock.value)).toBeInTheDocument()
      expect(screen.getByText(stock.change)).toBeInTheDocument()
    }
  })

  it('renders navigation links', () => {
    render(<Header />)
    for (const link of navLinks) {
      expect(screen.getByRole('menuitem', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the search button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders ad banner placeholder', () => {
    render(<Header />)
    expect(screen.getByText('Advertisement 728×90')).toBeInTheDocument()
  })
})
