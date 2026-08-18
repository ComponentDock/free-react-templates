import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { PANELS } from '../panels'

const iconOf = (button: HTMLElement) =>
  button.querySelector('[data-icon]')?.getAttribute('data-icon')

describe('Accordion', () => {
  it('opens the first panel by default with a minus icon and the second closed with a plus icon', () => {
    render(<Accordion panels={PANELS} />)
    const spa = screen.getByRole('button', { name: 'Spa Therapies' })
    const massage = screen.getByRole('button', { name: 'Massage Therapies' })
    expect(spa).toHaveAttribute('aria-expanded', 'true')
    expect(massage).toHaveAttribute('aria-expanded', 'false')
    expect(iconOf(spa)).toBe('minus')
    expect(iconOf(massage)).toBe('plus')

    const region = screen.getByRole('region', { name: 'Spa Therapies' })
    expect(region).toBeInTheDocument()
    expect(screen.queryByRole('region', { name: 'Massage Therapies' })).not.toBeInTheDocument()
  })

  it('renders each panel body region labelled by its toggle button', () => {
    render(<Accordion panels={PANELS} />)
    const spaButton = screen.getByRole('button', { name: 'Spa Therapies' })
    const region = screen.getByRole('region', { name: 'Spa Therapies' })
    expect(region).toHaveAttribute('aria-labelledby', spaButton.id)
    expect(spaButton).toHaveAttribute('aria-controls', region.id)
  })

  it('lists all four price rows inside each open body', () => {
    render(<Accordion panels={PANELS} />)
    const region = screen.getByRole('region', { name: 'Spa Therapies' })
    for (const name of [
      'Face Treatments',
      'Nail Treatments',
      'Medical Treatments',
      'Hair Treatments',
    ]) {
      expect(within(region).getByText(name)).toBeInTheDocument()
    }
  })

  it('keeps only one panel open: opening the second closes the first', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    const massage = screen.getByRole('button', { name: 'Massage Therapies' })
    await user.click(massage)

    expect(massage).toHaveAttribute('aria-expanded', 'true')
    expect(iconOf(massage)).toBe('minus')
    expect(screen.getByRole('region', { name: 'Massage Therapies' })).toBeInTheDocument()
    expect(screen.queryByRole('region', { name: 'Spa Therapies' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Spa Therapies' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(iconOf(screen.getByRole('button', { name: 'Spa Therapies' }))).toBe('plus')
  })

  it('toggles a panel closed when its open header is activated again', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    const spa = screen.getByRole('button', { name: 'Spa Therapies' })
    await user.click(spa)

    expect(spa).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: 'Spa Therapies' })).not.toBeInTheDocument()
  })

  it('toggles via keyboard (Enter) like a native button', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    const massage = screen.getByRole('button', { name: 'Massage Therapies' })
    massage.focus()
    await user.keyboard('{Enter}')

    expect(massage).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: 'Massage Therapies' })).toBeInTheDocument()
  })

  it('styles header buttons full-width, 20px, capitalized, black, with the icon at the far right', () => {
    render(<Accordion panels={PANELS} />)
    const spa = screen.getByRole('button', { name: 'Spa Therapies' })
    expect(spa.className).toContain('flex')
    expect(spa.className).toContain('w-full')
    expect(spa.className).toContain('justify-between')
    expect(spa.className).toContain('text-[20px]')
    expect(spa.className).toContain('capitalize')
    expect(spa.className).toContain('text-black')
    expect(iconOf(spa)).toBe('minus')
  })
})
