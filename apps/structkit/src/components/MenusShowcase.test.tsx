import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MenusShowcase } from './MenusShowcase'

describe('MenusShowcase', () => {
  it('renders the plain menu with its current item and the icon-prefixed menu', () => {
    render(<MenusShowcase />)

    expect(screen.getAllByText('Menu', { selector: 'p' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: /Discover\s*\(current\)/ })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Profile' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Settings' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Setting' })).toBeInTheDocument()
  })

  it('opens the header dropdown with the full item list', async () => {
    const user = userEvent.setup()
    render(<MenusShowcase />)

    const trigger = screen.getByRole('button', { name: /Dropdown header/ })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Separated link')).toBeInTheDocument()
    expect(screen.getByText('One more separated link')).toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
})
