import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the heading and five labeled progress bars with percentages', () => {
    render(<Skills />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Latest Gym With me' }),
    ).toBeInTheDocument()

    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(5)

    expect(screen.getByRole('progressbar', { name: 'Free Hand Workout' })).toHaveAttribute(
      'aria-valuenow',
      '90',
    )
    expect(screen.getByRole('progressbar', { name: 'Gym Trainer' })).toHaveAttribute(
      'aria-valuenow',
      '85',
    )
    expect(screen.getByRole('progressbar', { name: 'Hard Workout' })).toHaveAttribute(
      'aria-valuenow',
      '70',
    )
    expect(screen.getByRole('progressbar', { name: 'Soft Workout' })).toHaveAttribute(
      'aria-valuenow',
      '80',
    )
    expect(screen.getByRole('progressbar', { name: 'Foot Ball' })).toHaveAttribute(
      'aria-valuenow',
      '90',
    )

    expect(screen.getAllByText('90%')).toHaveLength(2)
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
  })

  it('renders a trainer photo beside the bars', () => {
    render(<Skills />)

    const photo = screen.getByRole('img', { name: /trainer/i })
    expect(photo).toHaveAttribute('src', expect.stringContaining('ironvault-skills'))
  })
})
