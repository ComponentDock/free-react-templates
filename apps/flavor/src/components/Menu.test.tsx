import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Menu } from './Menu'
import { menuCategories, menuItems } from '../data'

describe('Menu', () => {
  it('renders the section heading', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Flavor Menu')
  })

  it('renders all three tab buttons with the first one active', () => {
    render(<Menu />)
    for (const category of menuCategories) {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Main' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows Main items by default', () => {
    render(<Menu />)
    const mainItems = menuItems.filter((item) => item.category === 'Main')
    for (const item of mainItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
      expect(screen.getByText(item.price)).toBeInTheDocument()
    }
  })

  it('filters to Desserts when that tab is clicked', () => {
    render(<Menu />)
    const dessertItems = menuItems.filter((item) => item.category === 'Desserts')

    fireEvent.click(screen.getByRole('button', { name: 'Desserts' }))
    expect(screen.getByRole('button', { name: 'Desserts' })).toHaveAttribute('aria-pressed', 'true')
    for (const item of dessertItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
    // Main items should be hidden
    const mainItems = menuItems.filter((item) => item.category === 'Main')
    for (const item of mainItems) {
      expect(screen.queryByRole('heading', { name: item.name })).not.toBeInTheDocument()
    }
  })

  it('filters to Drinks when that tab is clicked', () => {
    render(<Menu />)
    const drinkItems = menuItems.filter((item) => item.category === 'Drinks')

    fireEvent.click(screen.getByRole('button', { name: 'Drinks' }))
    expect(screen.getByRole('button', { name: 'Drinks' })).toHaveAttribute('aria-pressed', 'true')
    for (const item of drinkItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
  })

  it('switches back to Main when Main tab is clicked', () => {
    render(<Menu />)
    fireEvent.click(screen.getByRole('button', { name: 'Desserts' }))
    fireEvent.click(screen.getByRole('button', { name: 'Main' }))
    const mainItems = menuItems.filter((item) => item.category === 'Main')
    for (const item of mainItems) {
      expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument()
    }
  })
})
