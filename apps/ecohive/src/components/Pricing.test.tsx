import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the band title and its supporting paragraph', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Choose plan which fit for you',
    )
    expect(screen.getByText(/Three plans, one dashboard/)).toBeInTheDocument()
  })

  it('renders the three tiers with their prices and starting-at label', () => {
    render(<Pricing />)
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 4, name: 'Shared Hosting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Dedicated Hosting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Cloud Hosting' })).toBeInTheDocument()
    expect(screen.getByText('$2.95 / month')).toBeInTheDocument()
    expect(screen.getByText('$89.99 / month')).toBeInTheDocument()
    expect(screen.getByText('$14.99 / month')).toBeInTheDocument()
    expect(screen.getAllByText('Starting at')).toHaveLength(3)
  })

  it('lists the five features of every tier', () => {
    render(<Pricing />)
    for (const feature of [
      '50 GB SSD storage',
      '10 databases',
      '2 TB SSD storage',
      '8 dedicated CPU cores',
      '200 GB SSD storage',
      'hourly snapshots',
    ]) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
    expect(screen.getAllByText('unlimited databases')).toHaveLength(2)
    expect(screen.getAllByText('unmetered bandwidth')).toHaveLength(2)
    expect(screen.getAllByText('daily backups')).toHaveLength(2)
    expect(screen.getAllByText('free domain for a year')).toHaveLength(3)
    expect(screen.getAllByRole('list')).toHaveLength(3)
  })

  it('gives every tier an outline Get Started button', () => {
    render(<Pricing />)
    const ctas = screen.getAllByRole('link', { name: 'Get Started' })
    expect(ctas).toHaveLength(3)
    for (const cta of ctas) {
      expect(cta).toHaveAttribute('href', '#pricing')
      expect(cta.className).toContain('border-accent')
    }
  })
})
