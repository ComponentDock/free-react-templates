import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading and three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    const cards = screen.getAllByText('Engineering techniques & implementation')
    expect(cards).toHaveLength(3)
  })

  it('renders Read More links for each service', () => {
    render(<Services />)

    const links = screen.getAllByText('Read More +')
    expect(links).toHaveLength(3)
  })

  it('shows bottom icon strip', () => {
    render(<Services />)

    expect(screen.getByText('Bridge')).toBeInTheDocument()
    expect(screen.getByText('Building')).toBeInTheDocument()
    expect(screen.getByText('Road')).toBeInTheDocument()
    expect(screen.getByText('Warehouse')).toBeInTheDocument()
    expect(screen.getByText('Tower')).toBeInTheDocument()
  })
})
