import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the Membership Plans heading', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Membership Plans' })).toBeInTheDocument()
  })

  it('renders the three pricing plans', () => {
    render(<Pricing />)

    for (const title of ['One Day Training', 'Pay Every Month', '1 Year Membership']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('$7')).toBeInTheDocument()
    expect(screen.getByText('$65')).toBeInTheDocument()
    expect(screen.getByText('$125')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })

  it('lists features per plan', () => {
    render(<Pricing />)

    expect(screen.getByText('Onetime Access To All Club')).toBeInTheDocument()
    expect(screen.getAllByText('Group Trainer')).toHaveLength(3)
    expect(screen.getByText('Book A Group Class')).toBeInTheDocument()
    expect(screen.getAllByText('Fitness Orientation')).toHaveLength(3)
    expect(screen.getAllByText('Discuss Fitness Goals')).toHaveLength(2)
  })
})
