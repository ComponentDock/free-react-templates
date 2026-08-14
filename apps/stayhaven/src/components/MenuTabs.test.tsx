import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuTabs } from './MenuTabs'
import { MENU_TABS } from '../data'

describe('MenuTabs', () => {
  it('shows the Food tab active by default with its six items', () => {
    render(<MenuTabs />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Restaurant Menu' }),
    ).toBeInTheDocument()

    const foodTab = screen.getByRole('tab', { name: 'Food' })
    expect(foodTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Desserts' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tab', { name: 'Drinks' })).toHaveAttribute('aria-selected', 'false')

    const food = MENU_TABS[0].items
    expect(food.length).toBe(6)
    for (const item of food) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.price)).toBeInTheDocument()
    }
    // Other tabs' items are hidden while Food is active.
    expect(screen.queryByText('Banana Split')).not.toBeInTheDocument()
    expect(screen.queryByText('Spring Water')).not.toBeInTheDocument()
  })

  it('switches items when the Desserts and Drinks tabs are activated', async () => {
    const user = userEvent.setup()
    render(<MenuTabs />)

    await user.click(screen.getByRole('tab', { name: 'Desserts' }))
    expect(screen.getByRole('tab', { name: 'Desserts' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Banana Split')).toBeInTheDocument()
    expect(screen.getByText('Sticky Toffee Pudding')).toBeInTheDocument()
    expect(screen.queryByText('Murgh Tikka Masala')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Drinks' }))
    expect(screen.getByRole('tab', { name: 'Drinks' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Spring Water')).toBeInTheDocument()
    expect(screen.getByText('Orange Fanta')).toBeInTheDocument()
    expect(screen.queryByText('Banana Split')).not.toBeInTheDocument()
  })
})
