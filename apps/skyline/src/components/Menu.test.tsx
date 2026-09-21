import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'
import { describe, it, expect } from 'vitest'

describe('Menu', () => {
  it('renders the section title', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu')
  })

  it('renders the See Full Menu button', () => {
    render(<Menu />)
    expect(screen.getByRole('link', { name: /See Full Menu/i })).toBeInTheDocument()
  })

  it('renders menu categories', () => {
    render(<Menu />)
    expect(screen.getByText('Appetizer')).toBeInTheDocument()
    expect(screen.getByText('Main Courses')).toBeInTheDocument()
    expect(screen.getByText('Drinks & Juices')).toBeInTheDocument()
  })

  it('renders menu items with prices', () => {
    render(<Menu />)
    expect(screen.getByText('Bruschetta al Pomodoro')).toBeInTheDocument()
    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getByText('Grilled Salmon Fillet')).toBeInTheDocument()
    expect(screen.getByText('$28')).toBeInTheDocument()
  })
})
