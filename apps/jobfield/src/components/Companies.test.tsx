import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Companies } from './Companies'

describe('Companies', () => {
  it('renders the heading and six companies with industry and location', () => {
    render(<Companies />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Companies Hiring Now' }),
    ).toBeInTheDocument()

    for (const name of [
      'TechFlow Inc.',
      'DesignCraft Studio',
      'DataVault Analytics',
      'CloudPeak Systems',
      'GrowthLab Marketing',
      'FinEdge Capital',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('Software Development')).toBeInTheDocument()
    expect(screen.getByText('Seattle, WA')).toBeInTheDocument()
    expect(screen.getByText('Financial Services')).toBeInTheDocument()
  })

  it('shows open-position counts and the View All Companies link', () => {
    render(<Companies />)

    for (const count of [
      '24 open positions',
      '12 open positions',
      '18 open positions',
      '31 open positions',
      '9 open positions',
      '15 open positions',
    ]) {
      expect(screen.getByRole('link', { name: count })).toHaveAttribute('href', '#jobs')
    }

    expect(screen.getByRole('link', { name: 'View All Companies' })).toHaveAttribute(
      'href',
      '#jobs',
    )
  })

  it('marks three companies with a live pulse indicator', () => {
    render(<Companies />)

    expect(screen.getAllByLabelText('Hiring now')).toHaveLength(3)
  })

  it('uses seeded placeholder images for company logos', () => {
    render(<Companies />)

    expect(screen.getAllByRole('img', { name: /logo/ })).toHaveLength(6)
    expect(screen.getByRole('img', { name: 'TechFlow Inc. logo' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/jobfield-7/96/96',
    )
  })
})
