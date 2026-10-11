import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropdownsShowcase } from './DropdownsShowcase'

const ITEMS = ['Action', 'Another action', 'Something else here']

describe('DropdownsShowcase', () => {
  it('renders four colour-variant dropdown toggles, all collapsed', () => {
    render(<DropdownsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Dropdowns')

    const toggles = screen.getAllByRole('button', { name: /dropdown button/i })
    expect(toggles).toHaveLength(4)
    toggles.forEach((toggle) => expect(toggle).toHaveAttribute('aria-expanded', 'false'))
    expect(screen.queryByRole('button', { name: 'Action' })).not.toBeInTheDocument()
  })

  it('opens one menu at a time and closes it by re-toggling', async () => {
    const user = userEvent.setup()
    render(<DropdownsShowcase />)

    const toggles = screen.getAllByRole('button', { name: /dropdown button/i })

    await user.click(toggles[0]!)
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('button', { name: 'Action' })).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Something else here' })).toBeInTheDocument()

    await user.click(toggles[1]!)
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false')
    expect(toggles[1]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('button', { name: 'Action' })).toHaveLength(1)

    await user.click(toggles[1]!)
    expect(toggles[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Action' })).not.toBeInTheDocument()
  })

  it('closes the menu when an item is picked', async () => {
    const user = userEvent.setup()
    render(<DropdownsShowcase />)

    await user.click(screen.getAllByRole('button', { name: /dropdown button/i })[0]!)
    await user.click(screen.getByRole('button', { name: ITEMS[1]! }))

    expect(screen.queryByRole('button', { name: ITEMS[1]! })).not.toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /dropdown button/i })[0]).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
