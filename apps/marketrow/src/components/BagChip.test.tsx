import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BagChip } from './BagChip'

describe('BagChip', () => {
  it('is a white pill counter, not a control', () => {
    render(<BagChip count={0} bumped={false} />)
    const chip = screen.getByText('Bag').closest('p')

    expect(chip).toHaveClass('inline-flex', 'rounded-full', 'bg-surface', 'gap-2', 'font-medium')
    expect(chip).toHaveClass('py-[10px]', 'pl-4', 'pr-[14px]')
    expect(chip?.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('prints the count in a 24px ink disc', () => {
    render(<BagChip count={3} bumped={false} />)
    const disc = screen.getByTestId('bag-count')

    expect(disc).toHaveTextContent('3')
    expect(disc).toHaveClass('h-6', 'min-w-6', 'bg-ink', 'rounded-full', 'text-[13px]', 'font-bold')
    expect(disc).not.toHaveClass('scale-125')
  })

  it('bumps the disc to 125% while the count is changing', () => {
    render(<BagChip count={1} bumped />)

    expect(screen.getByTestId('bag-count')).toHaveClass('scale-125', 'duration-[250ms]')
  })
})
