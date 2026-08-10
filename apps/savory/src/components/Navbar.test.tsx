import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site wordmark with the Food Blog tagline', () => {
    render(<Navbar onOpenPanel={vi.fn()} />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Savory')).toBeInTheDocument()
    expect(screen.getByText('Food Blog')).toBeInTheDocument()
  })

  it('shows the nav links, Login/Register link and the hamburger trigger', () => {
    render(<Navbar onOpenPanel={vi.fn()} />)

    for (const link of ['Home', 'About Us', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Login / Register' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open trending panel' })).toBeInTheDocument()
  })

  it('opens the Recipes mega menu listing recipe categories and closes on selection', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenPanel={vi.fn()} />)

    const recipes = screen.getByRole('button', { name: 'Recipes' })
    expect(recipes).toHaveAttribute('aria-expanded', 'false')

    await user.click(recipes)
    expect(recipes).toHaveAttribute('aria-expanded', 'true')
    for (const category of ['Recipe', 'Bread', 'Breakfast', 'Meat', 'Fastfood', 'Salad', 'Soup']) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('link', { name: 'Bread' }))
    expect(recipes).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Bread' })).not.toBeInTheDocument()
  })

  it('closes the mega menu when the user clicks away', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenPanel={vi.fn()} />)

    const recipes = screen.getByRole('button', { name: 'Recipes' })
    await user.click(recipes)
    expect(recipes).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)
    expect(recipes).toHaveAttribute('aria-expanded', 'false')
  })

  it('calls onOpenPanel when the hamburger trigger is clicked', async () => {
    const onOpenPanel = vi.fn()
    const user = userEvent.setup()
    render(<Navbar onOpenPanel={onOpenPanel} />)

    await user.click(screen.getByRole('button', { name: 'Open trending panel' }))
    expect(onOpenPanel).toHaveBeenCalledTimes(1)
  })
})
