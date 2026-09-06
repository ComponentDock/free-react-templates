import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('renders the button with default label', () => {
    render(<Dropdown />)
    expect(screen.getByRole('button', { name: /Filetype/i })).toBeInTheDocument()
  })

  it('renders a custom button label', () => {
    render(<Dropdown buttonLabel="Custom Label" />)
    expect(screen.getByRole('button', { name: /Custom Label/i })).toBeInTheDocument()
  })

  it('has a file-text icon to the left of the label', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('button has gray background by default', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    expect(button).toHaveStyle({ backgroundColor: '#f8f9fa' })
  })

  it('dropdown menu is hidden by default', () => {
    render(<Dropdown />)
    expect(screen.queryByText('Markup HTML')).not.toBeInTheDocument()
    expect(screen.queryByText('Photoshop PDF')).not.toBeInTheDocument()
    expect(screen.queryByText('Illustrator AI')).not.toBeInTheDocument()
    expect(screen.queryByText('Sketch')).not.toBeInTheDocument()
  })

  it('button changes to blue background when menu opens', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    await user.click(button)
    expect(button).toHaveStyle({ backgroundColor: '#007bff' })
  })

  it('button text changes to white when menu opens', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    await user.click(button)
    expect(button).toHaveStyle({ color: '#fff' })
  })

  it('opens menu with file-type items', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Filetype/i }))
    expect(screen.getByText('Markup HTML')).toBeInTheDocument()
    expect(screen.getByText('Photoshop PDF')).toBeInTheDocument()
    expect(screen.getByText('Illustrator AI')).toBeInTheDocument()
    expect(screen.getByText('Sketch')).toBeInTheDocument()
  })

  it('each menu item has an icon', async () => {
    const user = userEvent.setup()
    const { container } = render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Filetype/i }))
    const menuItems = container.querySelectorAll('.group.relative.cursor-pointer')
    menuItems.forEach((item) => {
      const svg = item.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  it('menu items are separated by borders (except last)', async () => {
    const user = userEvent.setup()
    const { container } = render(<Dropdown />)
    await user.click(screen.getByRole('button', { name: /Filetype/i }))
    const menuItems = container.querySelectorAll('.group.relative.cursor-pointer')
    expect(menuItems.length).toBe(4)
    expect(menuItems[0]).toHaveClass('border-b')
    expect(menuItems[1]).toHaveClass('border-b')
    expect(menuItems[2]).toHaveClass('border-b')
    expect(menuItems[3]).not.toHaveClass('border-b')
  })

  it('menu closes and button resets on second click', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    await user.click(button)
    expect(screen.getByText('Markup HTML')).toBeInTheDocument()
    expect(button).toHaveStyle({ backgroundColor: '#007bff' })
    await user.click(button)
    expect(screen.queryByText('Markup HTML')).not.toBeInTheDocument()
    expect(button).toHaveStyle({ backgroundColor: '#f8f9fa' })
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Dropdown />
        <div data-testid="outside">Outside element</div>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Filetype/i }))
    expect(screen.getByText('Markup HTML')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByText('Markup HTML')).not.toBeInTheDocument()
  })

  it('sets aria-expanded to false when closed', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets aria-expanded to true when open', async () => {
    const user = userEvent.setup()
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on the button', () => {
    render(<Dropdown />)
    const button = screen.getByRole('button', { name: /Filetype/i })
    expect(button).toHaveAttribute('aria-haspopup', 'true')
  })
})
