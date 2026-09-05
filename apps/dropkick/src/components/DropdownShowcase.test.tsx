import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DropdownShowcase } from './DropdownShowcase'

describe('DropdownShowcase', () => {
  it('renders the heading', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown #09')
  })

  it('renders the View Details button', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('button', { name: /view details/i })).toBeInTheDocument()
  })

  it('dropdown is closed initially', () => {
    render(<DropdownShowcase />)
    expect(screen.queryByText(/a small river named duden/i)).not.toBeInTheDocument()
  })

  it('opens the dropdown when button is clicked', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /view details/i }))
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()
  })

  it('shows the image in the dropdown', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /view details/i }))
    expect(screen.getByRole('img', { name: /detail illustration/i })).toHaveAttribute(
      'style',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <DropdownShowcase />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /view details/i }))
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByText(/a small river named duden/i)).not.toBeInTheDocument()
  })

  it('toggles dropdown on repeated clicks', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    const btn = screen.getByRole('button', { name: /view details/i })

    await user.click(btn)
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()

    await user.click(btn)
    expect(screen.queryByText(/a small river named duden/i)).not.toBeInTheDocument()
  })

  it('sets correct aria-expanded on button', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    const btn = screen.getByRole('button', { name: /view details/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
