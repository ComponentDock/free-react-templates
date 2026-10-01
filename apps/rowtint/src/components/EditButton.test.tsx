import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EditButton } from './EditButton'

describe('EditButton', () => {
  it('renders a real button whose accessible name identifies its invoice row', () => {
    render(<EditButton invoice="1001" />)
    const button = screen.getByRole('button', { name: 'Edit invoice 1001' })
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders a white pencil-in-square icon sized to the cell font', () => {
    const { container } = render(<EditButton invoice="1001" />)
    const icon = container.querySelector('svg')
    expect(icon).not.toBeNull()
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon?.getAttribute('class')).toContain('h-[1em]')
    expect(icon?.getAttribute('class')).toContain('w-[1em]')
    const button = screen.getByRole('button', { name: 'Edit invoice 1001' })
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('inline-flex')
    expect(button.className).toContain('items-center')
    expect(button.className).toContain('justify-center')
  })

  it('shows a visible focus ring on keyboard focus', () => {
    render(<EditButton invoice="1001" />)
    const button = screen.getByRole('button', { name: 'Edit invoice 1001' })
    expect(button.className).toContain('focus-visible:ring-2')
    expect(button.className).toContain('focus-visible:ring-white')
  })

  it('shows a subtle hover opacity treatment', () => {
    render(<EditButton invoice="1001" />)
    const button = screen.getByRole('button', { name: 'Edit invoice 1001' })
    expect(button.className).toContain('hover:opacity-80')
    expect(button.className).toContain('transition-opacity')
  })

  it('navigates nowhere and mutates nothing when activated', async () => {
    const user = userEvent.setup()
    const { container } = render(<EditButton invoice="1001" />)
    const before = container.innerHTML
    const href = window.location.href
    const button = screen.getByRole('button', { name: 'Edit invoice 1001' })
    await user.click(button)
    expect(window.location.href).toBe(href)
    expect(container.innerHTML).toBe(before)
    expect(button).toBeInTheDocument()
  })
})
