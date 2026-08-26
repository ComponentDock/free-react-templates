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

  it('starts with all items collapsed when no defaultOpenId', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      const button = screen.getByRole('button', { name: item.question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('opens the default item when defaultOpenId is provided', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
  })

  it('expands an item when clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
  })

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('allows multiple items open simultaneously', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    const third = screen.getByRole('button', { name: 'How to link your paypal and bank account?' })

    await user.click(first)
    await user.click(third)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'How to link your paypal and bank account?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'How to create your paypal account?' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggle buttons have correct aria-controls and panels have aria-labelledby', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-controls', 'download-register-panel')
    const region = screen.getByRole('region', { name: 'How to download and register?' })
    expect(region).toHaveAttribute('aria-labelledby', 'download-register-toggle')
  })

  it('toggle buttons are keyboard accessible via Enter', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    button.focus()
    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle buttons are keyboard accessible via Space', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to link your paypal and bank account?' })
    button.focus()
    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle button has focus-visible ring class', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('each item has the accordion background color', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="bg-accordion-bg"]')
    expect(items.length).toBe(3)
  })

  it('accordion items are separated by gap spacing', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('gap-')
  })

  it('active item shows green accent text', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    await user.click(button)

    expect(button.className).toContain('text-accent')
  })

  it('inactive item shows muted text', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    expect(button.className).toContain('text-muted')
  })

  it('shows Plus icon for collapsed items', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const plusIcons = container.querySelectorAll('[data-testid="plus-icon"], svg.lucide-plus')
    expect(plusIcons.length).toBe(3)
  })

  it('shows Minus icon for expanded items', async () => {
    const user = userEvent.setup()
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    await user.click(button)

    const minusIcons = container.querySelectorAll('svg.lucide-minus')
    expect(minusIcons.length).toBe(1)
  })
})
