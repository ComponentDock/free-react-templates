import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Fresh Vegetables')).toBeInTheDocument()
    expect(screen.getByText('Agricultural Products')).toBeInTheDocument()
    expect(screen.getByText('Organic Products')).toBeInTheDocument()
    expect(screen.getByText('Dairy Products')).toBeInTheDocument()
  })

  it('renders read more buttons', () => {
    render(<Services />)
    const buttons = screen.getAllByRole('button', { name: /learn more/i })
    expect(buttons).toHaveLength(4)
  })

  it('renders images with alt text', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: 'Fresh Vegetables' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Agricultural Products' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Organic Products' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Dairy Products' })).toBeInTheDocument()
  })
})
