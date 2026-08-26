import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

describe('Accordion', () => {
  it('renders all three accordion items', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByText('How to manage account?')).toBeInTheDocument()
    expect(screen.getByText('How to become Pro')).toBeInTheDocument()
    expect(screen.getByText('How to create an account?')).toBeInTheDocument()
  })

  it('starts with all items collapsed', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      const button = screen.getByRole('button', { name: item.question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('expands an item when clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to become Pro' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: 'How to become Pro' })).toBeInTheDocument()
  })

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to manage account?' })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: 'How to manage account?' })).not.toBeInTheDocument()
  })

  it('allows multiple items open simultaneously', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const first = screen.getByRole('button', { name: 'How to manage account?' })
    const third = screen.getByRole('button', { name: 'How to create an account?' })

    await user.click(first)
    await user.click(third)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: 'How to manage account?' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'How to create an account?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'How to become Pro' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('toggle buttons have correct aria-controls and panels have aria-labelledby', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to manage account?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-controls', 'manage-account-panel')
    const region = screen.getByRole('region', { name: 'How to manage account?' })
    expect(region).toHaveAttribute('aria-labelledby', 'manage-account-toggle')
  })

  it('toggle buttons are keyboard accessible via Enter', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to become Pro' })
    button.focus()
    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle buttons are keyboard accessible via Space', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create an account?' })
    button.focus()
    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle button has focus-visible ring class', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to manage account?' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('each item has a rounded border and shadow', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="rounded-lg"]')
    expect(items.length).toBe(3)
    for (const item of items) {
      expect(item.className).toContain('shadow-sm')
    }
  })

  it('accordion items are separated by a gap-3 spacing', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('gap-3')
  })

  it('each item has white background', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="bg-accordion-bg"]')
    expect(items.length).toBe(3)
  })
})
