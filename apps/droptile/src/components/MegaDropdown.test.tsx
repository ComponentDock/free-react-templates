import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MegaDropdown } from './MegaDropdown'

describe('MegaDropdown', () => {
  it('renders the trigger with default label', () => {
    render(<MegaDropdown />)
    expect(screen.getByRole('button', { name: /Dropdown/i })).toBeInTheDocument()
  })

  it('renders a custom trigger label', () => {
    render(<MegaDropdown triggerLabel="Menu" />)
    expect(screen.getByRole('button', { name: /Menu/i })).toBeInTheDocument()
  })

  it('trigger text is gray by default', () => {
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    expect(button).toHaveStyle({ color: '#888' })
  })

  it('trigger text turns black when open', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    await user.click(button)
    expect(button).toHaveStyle({ color: '#000' })
  })

  it('mega menu is hidden by default', () => {
    render(<MegaDropdown />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes menu on second trigger click', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    await user.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(button)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MegaDropdown />
        <div data-testid="outside">Outside</div>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
    // Click on hero image to move focus away from button, then press a non-Escape key
    await user.click(screen.getByAltText('Hero'))
    await user.keyboard('{a}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('has three equal-width columns', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    const menu = screen.getByRole('menu')
    const columns = menu.querySelectorAll('.w-1\\/3')
    expect(columns.length).toBe(3)
  })

  it('left column has hero image', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    const heroImg = screen.getByAltText('Hero')
    expect(heroImg).toBeInTheDocument()
    expect(heroImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('left column has PSD Mockups bold link and View All Here text', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    const psdLinks = screen.getAllByRole('link', { name: /PSD Mockups/i })
    expect(psdLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('View All Here')).toBeInTheDocument()
  })

  it('middle column has 6 category links', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByText(/Code/)).toBeInTheDocument()
    expect(screen.getByText(/Fonts/)).toBeInTheDocument()
    expect(screen.getByText(/HTML Templates/)).toBeInTheDocument()
    expect(screen.getAllByText(/Mockups/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Logo/)).toBeInTheDocument()
  })

  it('right column has 6 category links', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByText(/Sketch App/)).toBeInTheDocument()
    expect(screen.getByText(/User Interface/)).toBeInTheDocument()
    expect(screen.getByText(/WordPress/)).toBeInTheDocument()
    expect(screen.getByText(/User Experience/)).toBeInTheDocument()
    expect(screen.getByText(/WebGL/)).toBeInTheDocument()
  })

  it('has aria-haspopup on the trigger', () => {
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    expect(button).toHaveAttribute('aria-haspopup', 'true')
  })

  it('sets aria-expanded to false when closed', () => {
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets aria-expanded to true when open', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    const button = screen.getByRole('button', { name: /Dropdown/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('mega menu panel has role="menu"', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('category links show counts', async () => {
    const user = userEvent.setup()
    render(<MegaDropdown />)
    await user.click(screen.getByRole('button', { name: /Dropdown/i }))
    expect(screen.getByText(/\(5\)/)).toBeInTheDocument()
    expect(screen.getByText(/\(12\)/)).toBeInTheDocument()
    expect(screen.getByText(/\(81\)/)).toBeInTheDocument()
    expect(screen.getByText(/\(32\)/)).toBeInTheDocument()
    expect(screen.getByText(/\(61\)/)).toBeInTheDocument()
    expect(screen.getByText(/\(73\)/)).toBeInTheDocument()
  })
})
