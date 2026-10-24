import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

describe('Accordion', () => {
  it('renders every item question', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      expect(screen.getByText(item.question)).toBeInTheDocument()
    }
  })

  it('starts fully collapsed when no defaultOpenId is given', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      expect(screen.getByRole('button', { name: item.question })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('opens the default row when defaultOpenId is given', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="paypal-account" />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
  })

  it('expands a closed row on click', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
  })

  it('collapses the open row on a second click', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('closes the open row when another row is opened', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    const third = screen.getByRole('button', {
      name: 'How to link your paypal and bank account?',
    })

    await user.click(third)

    expect(third).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('region')).toHaveLength(1)
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'How to link your paypal and bank account?' }),
    ).toBeInTheDocument()
  })

  it('wires aria-controls to the panel id and aria-labelledby back to the button', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })

    await user.click(button)

    expect(button).toHaveAttribute('id', 'download-register-toggle')
    expect(button).toHaveAttribute('aria-controls', 'download-register-panel')
    const region = screen.getByRole('region', { name: 'How to download and register?' })
    expect(region).toHaveAttribute('id', 'download-register-panel')
    expect(region).toHaveAttribute('aria-labelledby', 'download-register-toggle')
  })

  it('is operable with the Enter key', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to create your paypal account?' })
    button.focus()

    await user.keyboard('{Enter}')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('is operable with the Space key', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', {
      name: 'How to link your paypal and bank account?',
    })
    button.focus()

    await user.keyboard(' ')

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('draws a focus ring on the row buttons', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const button = screen.getByRole('button', { name: 'How to download and register?' })
    expect(button.className).toContain('focus-visible:ring-2')
  })

  it('separates closed rows with a hairline and hides the border under the open row', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="paypal-bank" />)
    const rows = container.querySelectorAll('[data-row]')

    expect(rows).toHaveLength(ACCORDION_ITEMS.length)
    expect(rows[0]!.className).toContain('border-separator')
    expect(rows[1]!.className).toContain('border-separator')
    expect(rows[2]!.className).toContain('border-transparent')
    expect(rows[0]!.className).toContain('border-b')
  })

  it('keeps the rows square with no gap between them', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const wrapper = container.firstElementChild as HTMLElement
    const rows = container.querySelectorAll('[data-row]')

    expect(wrapper.className).not.toContain('gap-')
    for (const row of rows) {
      expect(row.className).not.toContain('rounded')
      expect(row.className).not.toContain('mb-')
    }
  })

  it('paints the open label and chevron with the accent, closed rows muted', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId="download-register" />)
    const open = screen.getByRole('button', { name: 'How to download and register?' })
    const closed = screen.getByRole('button', { name: 'How to create your paypal account?' })

    expect(open.className).toContain('text-accent')
    expect(closed.className).toContain('text-label')
    expect(open.querySelector('svg')!.getAttribute('class')).toContain('text-accent')
    expect(closed.querySelector('svg')!.getAttribute('class')).toContain('text-label')

    await user.click(closed)

    expect(closed.className).toContain('text-accent')
    expect(open.className).toContain('text-label')
  })

  it('shows a panel body for every item when opened', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)

    for (const item of ACCORDION_ITEMS) {
      await user.click(screen.getByRole('button', { name: item.question }))
      const region = screen.getByRole('region', { name: item.question })
      expect(region.textContent!.trim().length).toBeGreaterThan(0)
    }
  })
})
