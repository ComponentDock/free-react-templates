import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MenuSection } from './MenuSection'
import { menuCategories, menuItems } from '../data'

describe('MenuSection', () => {
  it('renders the section heading and subtitle', () => {
    render(<MenuSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'What kind of Foods we serve for you',
    )
  })

  it('renders all six filter pills with the first one active', () => {
    render(<MenuSection />)
    for (const category of menuCategories) {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'All Menu' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows every menu card by default', () => {
    render(<MenuSection />)
    for (const item of menuItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
      expect(screen.getByText(item.price)).toBeInTheDocument()
    }
  })

  it('filters cards when a pill is clicked', () => {
    render(<MenuSection />)
    const breakfast = menuItems.filter((item) => item.category === 'Breakfast')

    fireEvent.click(screen.getByRole('button', { name: 'Breakfast' }))
    expect(screen.getByRole('button', { name: 'Breakfast' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    for (const item of breakfast) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
    for (const item of menuItems.filter((entry) => entry.category !== 'Breakfast')) {
      expect(screen.queryByRole('heading', { name: item.name })).not.toBeInTheDocument()
    }
  })

  it('switches back to all cards when All Menu is clicked', () => {
    render(<MenuSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Lunch' }))
    fireEvent.click(screen.getByRole('button', { name: 'All Menu' }))
    for (const item of menuItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
  })
})
