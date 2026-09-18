import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { describe, expect, it } from 'vitest'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pricing Table')
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic plan')).toBeInTheDocument()
    expect(screen.getByText('Silver plan')).toBeInTheDocument()
    expect(screen.getByText('Gold plan')).toBeInTheDocument()
  })

  it('renders correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getByText('$39')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    const features = screen.getAllByText('1GB Disk Space')
    expect(features.length).toBe(3)
  })

  it('renders Purchase now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Purchase now')
    expect(buttons.length).toBe(3)
  })
})
