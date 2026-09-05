import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DropdownShowcase } from './DropdownShowcase'

describe('DropdownShowcase', () => {
  it('renders the main heading', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown')
  })

  it('renders all four variation columns', () => {
    render(<DropdownShowcase />)
    expect(screen.getByText('Dropdown Variation')).toBeInTheDocument()
    expect(screen.getByText('Dropup Variation')).toBeInTheDocument()
    expect(screen.getByText('Dropright Variation')).toBeInTheDocument()
    expect(screen.getByText('Dropleft Variation')).toBeInTheDocument()
  })

  it('renders regular dropdown toggle buttons for each variation', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('button', { name: 'Dropdown', expanded: false })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dropup', expanded: false })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dropright', expanded: false })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dropleft', expanded: false })).toBeInTheDocument()
  })

  it('renders split dropdown caret toggle buttons', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('button', { name: 'Toggle Split Dropdown' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle Split Dropup' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle Split Dropright' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle Split Dropleft' })).toBeInTheDocument()
  })

  it('renders all buttons total (4 regular + 4 split caret + 4 split main = 12)', () => {
    render(<DropdownShowcase />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(12)
  })
})
