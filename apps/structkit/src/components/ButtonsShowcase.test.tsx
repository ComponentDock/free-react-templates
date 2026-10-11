import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ButtonsShowcase } from './ButtonsShowcase'

describe('ButtonsShowcase', () => {
  it('renders the style row: default, round, icon pill, FAB and simple link', () => {
    render(<ButtonsShowcase />)

    expect(screen.getByRole('button', { name: 'Default' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Round' })).toHaveClass('rounded-[40px]')
    expect(screen.getByRole('button', { name: 'With Icon' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Favourite this kit' })).toHaveClass('rounded-full')
    expect(screen.getByRole('button', { name: 'Simple' })).toHaveClass('border-transparent')
  })

  it('renders sizes, the colour palette, links, disabled rows and blocks', () => {
    render(<ButtonsShowcase />)

    expect(screen.getAllByRole('button', { name: 'Small Size' })).toHaveLength(2)
    expect(screen.getAllByRole('button', { name: 'Large Size' })[0]).toHaveClass('text-[20px]')
    expect(screen.getAllByRole('button', { name: 'Warning' })[0]).toHaveClass('bg-warning')
    expect(screen.getAllByRole('button', { name: 'Dark' })[0]).toHaveClass('bg-dark')
    expect(screen.getAllByRole('button', { name: 'Primary link' })[1]).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Secondary Link' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Block Level info' })).toHaveClass('w-full')
    expect(screen.getByRole('link', { name: 'Block Level Success' })).toHaveClass('w-full')
  })

  it('opens a dropdown button menu and closes it when an item is chosen', async () => {
    const user = userEvent.setup()
    render(<ButtonsShowcase />)

    const triggers = screen.getAllByRole('button', { name: /Dropdown button/ })
    const first = triggers[0]!
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('list', { name: 'Dropdown button menu 0' })
    expect(menu).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Another action' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Something else here' }))
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
