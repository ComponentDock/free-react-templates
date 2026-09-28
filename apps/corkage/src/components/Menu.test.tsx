import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('shows the menu heading and default tab', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu')
    expect(screen.getByRole('button', { name: /Starters/i })).toBeInTheDocument()
    expect(screen.getByText('Samosa Platter')).toBeInTheDocument()
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Main Course/i }))
    expect(screen.getByText('Butter Chicken')).toBeInTheDocument()
    expect(screen.queryByText('Samosa Platter')).not.toBeInTheDocument()
  })

  it('switches to Desserts tab', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Desserts/i }))
    expect(screen.getByText('Gulab Jamun')).toBeInTheDocument()
  })
})
