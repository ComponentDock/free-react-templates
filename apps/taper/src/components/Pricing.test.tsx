import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and priced items in two columns', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(screen.getByText('Styling')).toBeInTheDocument()
    expect(screen.getAllByText('$25').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Cut')).toBeInTheDocument()
    expect(screen.getByText('Shave')).toBeInTheDocument()
    expect(screen.getAllByText('$65').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('list')).toHaveLength(2)
  })

  it('renders at least six priced items in total', () => {
    render(<Pricing />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(6)
  })
})
