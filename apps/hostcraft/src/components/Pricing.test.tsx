import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading and 4 pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('Startup')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('renders Choose Plan buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Choose Plan')
    expect(buttons).toHaveLength(4)
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Website')).toBeInTheDocument()
    expect(screen.getByText('5 Websites')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Websites')).toBeInTheDocument()
  })
})
