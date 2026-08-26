import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

describe('Accordion', () => {
  it('renders all five accordion items', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByText('How do I manage my account settings?')).toBeInTheDocument()
    expect(screen.getByText('What payment methods are accepted?')).toBeInTheDocument()
    expect(screen.getByText('Can I cancel my subscription at any time?')).toBeInTheDocument()
    expect(screen.getByText('How do I contact support?')).toBeInTheDocument()
    expect(screen.getByText('What is your refund policy?')).toBeInTheDocument()
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
    const button = screen.getByRole('button', { name: 'What payment methods are accepted?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'What payment methods are accepted?' }),
    ).toBeInTheDocument()
  })

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How do I manage my account settings?' })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('region', { name: 'How do I manage my account settings?' }),
    ).not.toBeInTheDocument()
  })

  it('allows multiple items open simultaneously', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const first = screen.getByRole('button', { name: 'How do I manage my account settings?' })
    const third = screen.getByRole('button', { name: 'Can I cancel my subscription at any time?' })

    await user.click(first)
    await user.click(third)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How do I manage my account settings?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'Can I cancel my subscription at any time?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'What payment methods are accepted?' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggle buttons have correct aria-controls and panels have aria-labelledby', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How do I manage my account settings?' })
    await user.click(button)

    expect(button).toHaveAttribute('aria-controls', 'manage-account-panel')
    const region = screen.getByRole('region', { name: 'How do I manage my account settings?' })
    expect(region).toHaveAttribute('aria-labelledby', 'manage-account-toggle')
  })

  it('toggle buttons are keyboard accessible via Enter', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'What payment methods are accepted?' })
    button.focus()
    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle buttons are keyboard accessible via Space', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'Can I cancel my subscription at any time?' })
    button.focus()
    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggle button has focus-visible ring class', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How do I manage my account settings?' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('each item has a rounded border and shadow', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const items = container.querySelectorAll('[class*="rounded-xl"]')
    expect(items.length).toBe(5)
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
    expect(items.length).toBe(5)
  })
})
