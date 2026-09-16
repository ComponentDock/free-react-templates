import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'

describe('Facts', () => {
  it('renders all five stat items', () => {
    render(<Facts />)
    expect(screen.getByText('2536')).toBeInTheDocument()
    expect(screen.getByText('6784')).toBeInTheDocument()
    expect(screen.getByText('1059')).toBeInTheDocument()
    expect(screen.getByText('2239')).toBeInTheDocument()
    expect(screen.getByText('435')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Facts />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Total Tasks')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('In House Professionals')).toBeInTheDocument()
  })

  it('renders with brand color background', () => {
    const { container } = render(<Facts />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-brand')
  })
})
