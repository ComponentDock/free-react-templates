// fallow-ignore-file unused-file
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'

/** Check that the icon span contains an SVG (lucide-react chevron). */
const hasIcon = (button: HTMLElement) => button.querySelector('[aria-hidden="true"] svg') !== null

describe('Accordion', () => {
  it('opens the first panel by default and the others closed', () => {
    render(<Accordion />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    const second = screen.getByRole('button', { name: 'How to create your paypal account?' })
    const third = screen.getByRole('button', { name: 'How to link your paypal and bank account?' })

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(third).toHaveAttribute('aria-expanded', 'false')
    expect(hasIcon(first)).toBe(true)
    expect(hasIcon(second)).toBe(true)
    expect(hasIcon(third)).toBe(true)

    const region = screen.getByRole('region', { name: 'How to download and register?' })
    expect(region).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'How to create your paypal account?' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'How to link your paypal and bank account?' }),
    ).not.toBeInTheDocument()
  })

  it('renders each panel body region labelled by its toggle button', () => {
    render(<Accordion />)
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    const region = screen.getByRole('region', { name: 'How to download and register?' })
    expect(region).toHaveAttribute('aria-labelledby', firstButton.id)
    expect(firstButton).toHaveAttribute('aria-controls', region.id)
  })

  it('shows panel content inside the open body', () => {
    render(<Accordion />)
    const region = screen.getByRole('region', { name: 'How to download and register?' })
    expect(within(region).getByText(/Anim pariatur cliche reprehenderit/)).toBeInTheDocument()
  })

  it('keeps only one panel open: opening the second closes the first', async () => {
    const user = userEvent.setup()
    render(<Accordion />)
    const second = screen.getByRole('button', { name: 'How to create your paypal account?' })
    await user.click(second)

    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(hasIcon(second)).toBe(true)
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'How to download and register?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(hasIcon(screen.getByRole('button', { name: 'How to download and register?' }))).toBe(
      true,
    )
  })

  it('toggles a panel closed when its open header is activated again', async () => {
    const user = userEvent.setup()
    render(<Accordion />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByRole('region', { name: 'How to download and register?' }),
    ).not.toBeInTheDocument()
  })

  it('toggles via keyboard (Enter) like a native button', async () => {
    const user = userEvent.setup()
    render(<Accordion />)
    const second = screen.getByRole('button', { name: 'How to create your paypal account?' })
    second.focus()
    await user.keyboard('{Enter}')

    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to create your paypal account?' }),
    ).toBeInTheDocument()
  })

  it('styles header buttons full-width with icon at far right', () => {
    render(<Accordion />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    expect(first.className).toContain('w-full')
    expect(first.className).toContain('text-left')
    expect(hasIcon(first)).toBe(true)
  })

  it('active header shows header-active text color', () => {
    render(<Accordion />)
    const first = screen.getByRole('button', { name: 'How to download and register?' })
    // Active header uses text-header-active (brand green #72c02c)
    expect(first.className).toContain('text-header-active')
  })

  it('inactive headers show grey text color', () => {
    render(<Accordion />)
    const second = screen.getByRole('button', { name: 'How to create your paypal account?' })
    const third = screen.getByRole('button', { name: 'How to link your paypal and bank account?' })
    expect(second.className).toContain('text-header-inactive')
    expect(third.className).toContain('text-header-inactive')
  })
})
