import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices and buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Choose Your Price Plan' })).toBeInTheDocument()
    for (const plan of ['Real Basic', 'Real Standard', 'Real Premium']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Per Month').length).toBe(3)
    expect(screen.getAllByRole('link', { name: 'Get Started' }).length).toBe(3)
  })

  it('lists the plan features', () => {
    render(<Pricing />)

    expect(screen.getByText('2.5 GB Space')).toBeInTheDocument()
    expect(screen.getByText('10 GB Space')).toBeInTheDocument()
    expect(screen.getByText('20 GB Space')).toBeInTheDocument()
    expect(screen.getAllByText('Secure Online Transfer').length).toBe(3)
    expect(screen.getAllByText('Customer Service').length).toBe(3)
  })
})
