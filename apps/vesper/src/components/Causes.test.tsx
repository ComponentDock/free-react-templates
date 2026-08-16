import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the heading and four cause cards with progress bars and donate actions', () => {
    render(<Causes />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Causes Needs Our Help' }),
    ).toBeInTheDocument()

    for (const title of [
      'Health care, Food',
      'Restored the Old City Church',
      'Save Children For Hunger',
      'Support Missionary Work',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(4)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '40')

    expect(screen.getAllByRole('link', { name: 'Donate Now!' })).toHaveLength(4)
  })

  it('renders the donation-intro band with counter and donate button', () => {
    render(<Causes />)

    expect(screen.getByRole('heading', { level: 2, name: /Donation so far/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Donate now!' })).toBeInTheDocument()
  })
})
