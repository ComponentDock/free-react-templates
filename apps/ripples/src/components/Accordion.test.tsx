import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

describe('Accordion', () => {
  it('renders all three accordion items', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByText('How to download and register?')).toBeInTheDocument()
    expect(screen.getByText('How to create your paypal account?')).toBeInTheDocument()
    expect(screen.getByText('How to link your paypal and bank account?')).toBeInTheDocument()
  })

  it('starts with the first item expanded and others collapsed', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    const secondButton = screen.getByRole('button', { name: 'How to create your paypal account?' })
    expect(secondButton).toHaveAttribute('aria-expanded', 'false')

    const thirdButton = screen.getByRole('button', {
      name: 'How to link your paypal and bank account?',
    })
    expect(thirdButton).toHaveAttribute('aria-expanded', 'false')

    // Only the first panel should be visible
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
  })

  it('closes the previous item when a new item is clicked (exclusive behavior)', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)

    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    const secondButton = screen.getByRole('button', { name: 'How to create your paypal account?' })

    // First is already open
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    // Click second
    await user.click(secondButton)

    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')

    // Only one region visible
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('collapses an expanded item when the same item is clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)

    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstButton)

    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('toggle buttons are keyboard accessible via Enter', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    button.focus()
    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
    // Previous item should be closed
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggle buttons are keyboard accessible via Space', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to link your paypal and bank account?' })
    button.focus()
    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
    // Previous item should be closed
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggle buttons have correct aria-controls and panels have aria-labelledby', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-controls', 'paypal-account-panel')
    const region = screen.getByRole('region', { name: 'How to create your paypal account?' })
    expect(region).toHaveAttribute('aria-labelledby', 'paypal-account-toggle')
  })

  it('toggle button has focus-visible ring class', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('each item has a rounded border and shadow', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="rounded-xl"]')
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

  it('renders without errors when items array is empty', () => {
    const { container } = render(<Accordion items={[]} />)
    const wrapper = container.firstElementChild!
    expect(wrapper.children.length).toBe(0)
  })
})
