import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WeatherDropdown } from './WeatherDropdown'

describe('WeatherDropdown', () => {
  it('renders the heading and dropdown button', () => {
    render(<WeatherDropdown />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Weather Forecast')
    expect(screen.getByRole('button', { name: /today's weather/i })).toBeInTheDocument()
  })

  it('toggles the dropdown open and closed on button click', async () => {
    const user = userEvent.setup()
    render(<WeatherDropdown />)

    const button = screen.getByRole('button', { name: /today's weather/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    const menu = screen.getByRole('menu')
    expect(within(menu).getByText('Sunny')).toBeInTheDocument()
    expect(within(menu).getByText('Rainy')).toBeInTheDocument()
    expect(within(menu).getByText('Cloudy')).toBeInTheDocument()
    expect(within(menu).getByText('Thunderstorm')).toBeInTheDocument()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(<WeatherDropdown />)

    await user.click(screen.getByRole('button', { name: /today's weather/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await user.click(document.body)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes the dropdown when a menu item is clicked', async () => {
    const user = userEvent.setup()
    render(<WeatherDropdown />)

    await user.click(screen.getByRole('button', { name: /today's weather/i }))
    const menu = screen.getByRole('menu')
    await user.click(within(menu).getByText('Rainy'))

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('has correct aria attributes on the button', () => {
    render(<WeatherDropdown />)
    const button = screen.getByRole('button', { name: /today's weather/i })
    expect(button).toHaveAttribute('aria-haspopup', 'menu')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('each menu item has role menuitem', async () => {
    const user = userEvent.setup()
    render(<WeatherDropdown />)

    await user.click(screen.getByRole('button', { name: /today's weather/i }))
    const menu = screen.getByRole('menu')
    const items = within(menu).getAllByRole('menuitem')
    expect(items).toHaveLength(4)
  })
})
