import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuPricing } from './MenuPricing'

describe('MenuPricing', () => {
  it('renders section heading', () => {
    render(<MenuPricing />)
    expect(screen.getByText('Menu List with Price')).toBeInTheDocument()
  })

  it('renders all menu items', () => {
    render(<MenuPricing />)
    expect(screen.getByText('Warm Spinach Dip & Chips')).toBeInTheDocument()
    expect(screen.getByText('Key West Machos')).toBeInTheDocument()
    expect(screen.getByText('Crispy Onion Rings')).toBeInTheDocument()
    expect(screen.getByText('Lobster & Shrimp Quesadilla')).toBeInTheDocument()
    expect(screen.getByText('Grilled Chicken Caesar')).toBeInTheDocument()
    expect(screen.getByText('Pan-Seared Tuna')).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<MenuPricing />)
    expect(screen.getByText('$14.50')).toBeInTheDocument()
    expect(screen.getByText('$16.00')).toBeInTheDocument()
    expect(screen.getByText('$11.50')).toBeInTheDocument()
  })

  it('expands accordion on click', async () => {
    const user = userEvent.setup()
    render(<MenuPricing />)
    const firstItem = screen.getByRole('button', { name: /warm spinach dip/i })
    expect(firstItem).toHaveAttribute('aria-expanded', 'false')

    await user.click(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'true')
    // Description should now be visible in the expanded area
    expect(
      screen.getByText(/Creamy spinach dip served with seasoned tortilla chips/),
    ).toBeInTheDocument()
  })

  it('collapses accordion on second click', async () => {
    const user = userEvent.setup()
    render(<MenuPricing />)
    const firstItem = screen.getByRole('button', { name: /warm spinach dip/i })
    await user.click(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstItem)
    expect(firstItem).toHaveAttribute('aria-expanded', 'false')
  })
})
