import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchTabs } from './SearchTabs'

describe('SearchTabs', () => {
  it('renders four tab buttons with correct labels', () => {
    render(<SearchTabs />)

    expect(screen.getByRole('tab', { name: /HOTEL ONLY/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /HOTEL \+ FLIGHT$/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /HOTEL \+ FLIGHT \+ CAR/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /HOTEL \+ CAR/i })).toBeInTheDocument()
  })

  it('defaults to HOTEL ONLY being selected', () => {
    render(<SearchTabs />)
    const hotelOnly = screen.getByRole('tab', { name: /HOTEL ONLY/i })
    expect(hotelOnly).toHaveAttribute('aria-selected', 'true')
  })

  it('switches active tab on click', async () => {
    const user = userEvent.setup()
    render(<SearchTabs />)

    const hotelFlight = screen.getByRole('tab', { name: /HOTEL \+ FLIGHT$/i })
    await user.click(hotelFlight)

    expect(hotelFlight).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /HOTEL ONLY/i })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('calls onTabChange when a tab is clicked', async () => {
    const user = userEvent.setup()
    const onTabChange = vi.fn()
    render(<SearchTabs onTabChange={onTabChange} />)

    await user.click(screen.getByRole('tab', { name: /HOTEL \+ CAR/i }))
    expect(onTabChange).toHaveBeenCalledWith('hotel-car')
  })

  it('uses controlled activeTab when provided', () => {
    render(<SearchTabs activeTab="hotel-flight-car" />)

    expect(screen.getByRole('tab', { name: /HOTEL \+ FLIGHT \+ CAR/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: /HOTEL ONLY/i })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })
})
