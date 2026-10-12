import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { MobileMenu } from './MobileMenu'

function renderMenu(overrides: { open?: boolean; active?: string } = {}) {
  const onClose = vi.fn()
  const onNavigate = vi.fn()
  const trigger = document.createElement('button')
  trigger.textContent = 'hamburger'
  document.body.appendChild(trigger)

  const view = render(
    <MobileMenu
      open={overrides.open ?? true}
      onClose={onClose}
      onNavigate={onNavigate}
      active={overrides.active ?? 'Home'}
      triggerRef={{ current: trigger }}
    />,
  )

  return { onClose, onNavigate, trigger, ...view }
}

describe('MobileMenu', () => {
  it('renders nothing while it is closed', () => {
    renderMenu({ open: false })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens as a labelled dialog with every destination and moves focus into the panel', () => {
    renderMenu()

    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveClass('w-[300px]')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Domain' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close the menu' }))
  })

  it('marks the current page and reports navigation to the caller', async () => {
    const { onNavigate } = renderMenu({ active: 'Blog' })

    const blog = screen.getByRole('link', { name: 'Blog' })
    expect(blog).toHaveClass('text-lime')

    blog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(blog)
    expect(onNavigate).toHaveBeenCalledWith('Blog')

    const hosting = screen.getByRole('link', { name: 'Hosting' })
    hosting.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(hosting)
    expect(onNavigate).toHaveBeenCalledWith('Hosting')
  })

  it('marks the hosting destination current when it is the active page', () => {
    renderMenu({ active: 'Hosting' })

    const hosting = screen.getByRole('link', { name: 'Hosting' })
    expect(hosting).toHaveAttribute('aria-current', 'page')
    expect(hosting).toHaveClass('text-lime')
  })

  it('keeps the hosting list collapsed until the round control reveals it', async () => {
    const { onNavigate } = renderMenu()
    const collapse = screen.getByRole('button', { name: 'Show hosting links' })

    expect(collapse).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()

    await userEvent.click(collapse)

    expect(collapse).toHaveAttribute('aria-expanded', 'true')
    expect(collapse).toHaveClass('rotate-180')
    expect(screen.getAllByRole('link', { name: /Hosting|Monitor|Desk|Vault/ })).toHaveLength(8)
    expect(screen.getByText('Sub menu')).toHaveClass('pl-10', 'text-muted-alt')

    const shared = screen.getByRole('link', { name: 'Shared Hosting' })
    expect(shared).toHaveClass('pl-10')
    shared.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(shared)
    expect(onNavigate).toHaveBeenCalledWith('Hosting')

    const vault = screen.getByRole('link', { name: 'Backup Vault' })
    expect(vault).toHaveClass('pl-[60px]')
    vault.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(vault)
    expect(onNavigate).toHaveBeenCalledWith('Hosting')

    await userEvent.click(collapse)
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()
  })

  it('closes from the close control and returns focus to the hamburger', async () => {
    const { onClose, trigger } = renderMenu()

    await userEvent.click(screen.getByRole('button', { name: 'Close the menu' }))

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(document.activeElement).toBe(trigger)
    trigger.remove()
  })

  it('closes when the veil is clicked', async () => {
    const { onClose, trigger } = renderMenu()

    await userEvent.click(screen.getByTestId('menu-veil'))

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(document.activeElement).toBe(trigger)
    trigger.remove()
  })

  it('closes on Escape and traps Tab inside the panel', () => {
    const { onClose, trigger } = renderMenu()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(document.activeElement).toBe(trigger)

    const dialog = screen.getByRole('dialog')
    const closeControl = screen.getByRole('button', { name: 'Close the menu' })
    const lastLink = screen.getByRole('link', { name: 'Contact' })
    lastLink.focus()

    fireEvent.keyDown(dialog, { key: 'Tab' })
    expect(document.activeElement).toBe(closeControl)

    closeControl.focus()
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(lastLink)

    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(onClose).toHaveBeenCalledTimes(1)
    trigger.remove()
  })

  it('ignores Escape and Tab work when the panel is not open', () => {
    const { onClose } = renderMenu({ open: false })

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).not.toHaveBeenCalled()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes without a trigger reference without throwing', async () => {
    const onClose = vi.fn()
    render(
      <MobileMenu open onClose={onClose} onNavigate={vi.fn()} active="Home" />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Close the menu' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
