import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section title and four ticket plans with prices and features', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Ticket Pricing' })).toBeInTheDocument()
    for (const plan of ['Basic', 'Starter', 'Business', 'Enterprise']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('£39')).toBeInTheDocument()
    expect(screen.getByText('£99')).toBeInTheDocument()
    expect(screen.getByText('RAM 1 GB')).toBeInTheDocument()
    expect(screen.getByText('SSD Storage 100 GB')).toBeInTheDocument()
    expect(screen.getByText('Individuals/Freelancers')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(4)
  })
})
