import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChooseCar } from './ChooseCar'

describe('ChooseCar', () => {
  it('renders the section title and tabs', () => {
    render(<ChooseCar />)
    expect(screen.getByRole('heading', { level: 2, name: /choose your car/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /popular cars/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /newest cars/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /our office/i })).toBeInTheDocument()
  })

  it('shows six popular cars by default', () => {
    render(<ChooseCar />)
    expect(screen.getByRole('tab', { name: /popular cars/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('heading', { name: 'Dodge Ram 1500' })).toBeInTheDocument()
    expect(screen.getAllByText('$55/day')).toHaveLength(6)
    expect(screen.getAllByText('Hatchback')).toHaveLength(1)
  })

  it('switches to newest cars when the tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ChooseCar />)
    await user.click(screen.getByRole('tab', { name: /newest cars/i }))
    expect(screen.getByRole('tab', { name: /newest cars/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('heading', { name: 'Toyota RAV4 EV' })).toBeInTheDocument()
    expect(screen.getAllByText('$35/day')).toHaveLength(3)
    expect(screen.queryByText('$55/day')).not.toBeInTheDocument()
  })

  it('switches to the office panel when the tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ChooseCar />)
    await user.click(screen.getByRole('tab', { name: /our office/i }))
    expect(screen.getByRole('heading', { name: 'Dhaka' })).toBeInTheDocument()
    expect(screen.getByText('Race Course, Comilla')).toBeInTheDocument()
    expect(screen.queryByText('$55/day')).not.toBeInTheDocument()
  })
})
