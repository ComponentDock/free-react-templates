import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  COLOR_LABELS,
  KIT_COLORS,
  KitButton,
  KitLink,
  type KitSize,
  type KitVariant,
} from './KitButton'

const VARIANTS: KitVariant[] = ['solid', 'round', 'outline', 'link', 'white']
const SIZES: KitSize[] = ['sm', 'md', 'lg', 'block']

describe('KitButton', () => {
  it('renders every colour, variant and size combination', () => {
    for (const color of KIT_COLORS) {
      for (const variant of VARIANTS) {
        for (const size of SIZES) {
          const { unmount } = render(
            <KitButton color={color} variant={variant} size={size}>
              {`${color}-${variant}-${size}`}
            </KitButton>,
          )
          expect(screen.getByRole('button')).toHaveClass('inline-flex')
          unmount()
        }
      }
    }
  })

  it('exposes a label for every kit colour', () => {
    expect(KIT_COLORS.map((color) => COLOR_LABELS[color])).toEqual([
      'Primary',
      'Secondary',
      'Success',
      'Danger',
      'Warning',
      'Info',
      'Light',
      'Dark',
      'Rose',
    ])
  })

  it('renders the pill treatment and the circular icon button', () => {
    render(
      <>
        <KitButton color="primary" variant="round" size="md">
          Round
        </KitButton>
        <KitButton color="primary" variant="round" size="md" circle aria-label="Favourite">
          ♥
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Round' })).toHaveClass('rounded-[40px]')
    expect(screen.getByRole('button', { name: 'Favourite' })).toHaveClass('rounded-full')
  })

  it('fires the click handler and supports the disabled state', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <>
        <KitButton color="primary" variant="solid" size="md" onClick={onClick}>
          Default
        </KitButton>
        <KitButton color="primary" variant="solid" size="md" disabled>
          Disabled
        </KitButton>
      </>,
    )

    await user.click(screen.getByRole('button', { name: 'Default' }))
    expect(onClick).toHaveBeenCalledTimes(1)

    const disabled = screen.getByRole('button', { name: 'Disabled' })
    expect(disabled).toBeDisabled()
    expect(disabled).toHaveClass('disabled:opacity-60')
  })
})

describe('KitLink', () => {
  it('renders an anchor styled like a kit button', () => {
    render(
      <KitLink href="#cards" color="success" variant="white" size="lg" className="px-6">
        Block Level Success
      </KitLink>,
    )

    const link = screen.getByRole('link', { name: 'Block Level Success' })
    expect(link).toHaveAttribute('href', '#cards')
    expect(link).toHaveClass('bg-white')
    expect(link).toHaveClass('rounded')
  })
})
