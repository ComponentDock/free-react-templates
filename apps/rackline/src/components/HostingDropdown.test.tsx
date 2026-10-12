import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { HostingDropdown } from './HostingDropdown'

function renderDropdown(overrides: { active?: boolean } = {}) {
  const onSelect = vi.fn()
  const view = render(
    <ul>
      <HostingDropdown active={overrides.active ?? false} onSelect={onSelect} />
    </ul>,
  )
  const trigger = screen.getByRole('button', { name: /Hosting/ })
  const item = view.container.querySelector('li') as HTMLLIElement
  return { onSelect, trigger, item, ...view }
}

describe('HostingDropdown', () => {
  it('renders a collapsed trigger wired to the panel', () => {
    const { trigger } = renderDropdown()

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()
  })

  it('highlights the trigger once the current page is Hosting', () => {
    const { trigger } = renderDropdown({ active: true })

    expect(trigger).toHaveClass('text-white')
  })

  it('opens on hover with the four hosting kinds and marks the entry active', async () => {
    const { onSelect, item, trigger } = renderDropdown()

    fireEvent.mouseEnter(item)

    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()
    for (const label of ['Dedicated Hosting', 'Premium Hosting', 'Cloud Hosting']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Sub Menu/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    const shared = screen.getByRole('link', { name: 'Shared Hosting' })
    shared.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(shared)
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes again when the pointer leaves the group', () => {
    const { item } = renderDropdown()

    fireEvent.mouseEnter(item)
    expect(screen.getByRole('link', { name: 'Cloud Hosting' })).toBeInTheDocument()

    fireEvent.mouseLeave(item)
    expect(screen.queryByRole('link', { name: 'Cloud Hosting' })).not.toBeInTheDocument()
  })

  it('opens from the trigger and resets the nested panel each time', async () => {
    const { trigger } = renderDropdown()

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await userEvent.click(screen.getByRole('button', { name: /Sub Menu/ }))
    expect(screen.getByRole('link', { name: 'Uptime Monitor' })).toBeInTheDocument()

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.queryByRole('link', { name: 'Uptime Monitor' })).not.toBeInTheDocument()
  })

  it('opens the nested sub-menu on hover, on focus and with the keyboard', async () => {
    const { item } = renderDropdown()
    fireEvent.mouseEnter(item)

    fireEvent.mouseEnter(screen.getByRole('button', { name: /Sub Menu/ }).parentElement as HTMLElement)
    expect(
      screen.getAllByRole('link', { name: /Uptime Monitor|Migration Desk|Backup Vault/ }),
    ).toHaveLength(3)

    // Leaving the group closes the panel and the nested list with it.
    fireEvent.mouseLeave(item)
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()

    // Back inside, the nested list stays shut until it is hovered or focused.
    fireEvent.mouseEnter(item)
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Migration Desk' })).not.toBeInTheDocument()

    const subTrigger = screen.getByRole('button', { name: /Sub Menu/ })
    fireEvent.focusIn(subTrigger)
    expect(screen.getByRole('link', { name: 'Migration Desk' })).toBeInTheDocument()

    await userEvent.click(subTrigger)
    expect(screen.getByRole('link', { name: 'Migration Desk' })).toBeInTheDocument()
  })

  it('opens from the keyboard without navigating the page', () => {
    const { trigger } = renderDropdown()

    const enter = createEvent.keyDown(trigger, { key: 'Enter' })
    fireEvent(trigger, enter)
    expect(enter.defaultPrevented).toBe(true)
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()

    fireEvent.blur(trigger.parentElement as HTMLElement)
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()

    fireEvent.blur(trigger.parentElement as HTMLElement)
    fireEvent.keyDown(trigger, { key: ' ' })
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()
  })

  it('closes on Escape and hands focus back to the trigger', () => {
    const { trigger, item } = renderDropdown()

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()

    fireEvent.keyDown(item, { key: 'Escape' })
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger)
  })

  it('ignores keys other than Escape once open', () => {
    const { item } = renderDropdown()

    fireEvent.mouseEnter(item)
    fireEvent.keyDown(item, { key: 'Tab' })

    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()
  })

  it('leaves keys that never open the panel to the browser', () => {
    const { trigger } = renderDropdown()

    fireEvent.keyDown(trigger, { key: 'Tab' })
    fireEvent.keyDown(trigger, { key: 'Escape' })

    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()
  })

  it('closes when focus leaves the group and stays open while it is inside', () => {
    const { item, trigger } = renderDropdown()

    fireEvent.mouseEnter(item)
    fireEvent.blur(item, { relatedTarget: trigger })
    expect(screen.getByRole('link', { name: 'Shared Hosting' })).toBeInTheDocument()

    fireEvent.blur(item, { relatedTarget: document.body })
    expect(screen.queryByRole('link', { name: 'Shared Hosting' })).not.toBeInTheDocument()
  })

  it('closes when focus leaves to nothing at all', () => {
    const { item } = renderDropdown()

    fireEvent.mouseEnter(item)
    fireEvent.blur(item)

    expect(screen.queryByRole('link', { name: 'Cloud Hosting' })).not.toBeInTheDocument()
  })
})
