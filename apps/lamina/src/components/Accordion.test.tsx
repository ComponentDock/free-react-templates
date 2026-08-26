import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

const iconOf = (button: HTMLElement) => button.getAttribute('data-icon')

describe('Accordion', () => {
  it('renders all three accordion items with question texts', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByText('How to manage account?')).toBeInTheDocument()
    expect(screen.getByText('How to become Pro')).toBeInTheDocument()
    expect(screen.getByText('How to create an account?')).toBeInTheDocument()
  })

  it('starts with all items collapsed showing plus icons and green backgrounds', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      const button = screen.getByRole('button', { name: item.question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(iconOf(button)).toBe('plus')
      expect(button.className).toContain('bg-toggle-collapsed')
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('expands an item when its toggle is clicked, showing answer text', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to become Pro' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(iconOf(button)).toBe('minus')
    expect(button.className).toContain('bg-toggle-expanded')
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

  it('allows multiple items to be open simultaneously', async () => {
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

  it('toggle buttons have correct aria-controls and content panels have aria-labelledby', async () => {
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
    expect(screen.getByRole('region', { name: 'How to become Pro' })).toBeInTheDocument()
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

  it('toggle buttons are 40x40 with rounded corners', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      const button = screen.getByRole('button', { name: item.question })
      expect(button.className).toContain('h-10')
      expect(button.className).toContain('w-10')
      expect(button.className).toContain('rounded')
    }
  })

  it('accordion items are separated by a 0.5rem gap', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('gap-2')
  })

  it('each item has a white background', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="bg-accordion-bg"]')
    expect(items.length).toBe(3)
  })

  it('toggle buttons have white icon color', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to manage account?' })
    expect(button.className).toContain('text-white')
  })
})
