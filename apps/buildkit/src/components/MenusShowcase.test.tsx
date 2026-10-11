import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenusShowcase } from './MenusShowcase'

describe('MenusShowcase', () => {
  it('renders the light menu row and the icon dropdown trigger', () => {
    const { container } = render(<MenusShowcase />)

    expect(container.querySelector('section')!.id).toBe('menus')
    expect(screen.getAllByRole('heading', { name: 'Menu' })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Menu with Icons' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Discover (current)' }).className).toContain(
      'text-primary-600',
    )
    expect(screen.getByRole('link', { name: 'Profile' }).className).toContain('text-body')
    expect(screen.getByRole('button', { name: /Menu/ })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the icon dropdown with its grouped items', async () => {
    render(<MenusShowcase />)

    const trigger = screen.getByRole('button', { name: /Menu/ })
    expect(screen.queryByText('Dropdown header')).not.toBeInTheDocument()

    await userEvent.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Dropdown header')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Separated link' }).className).toContain('border-t')
    expect(screen.getByRole('link', { name: 'Another action' }).className).not.toContain('border-t')

    await userEvent.click(trigger)
    expect(screen.queryByText('Dropdown header')).not.toBeInTheDocument()
  })
})
