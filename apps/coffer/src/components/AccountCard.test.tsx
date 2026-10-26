import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccountCard } from './AccountCard'
import { ACCOUNT } from '../data/accounts'

describe('AccountCard', () => {
  it('names the card with its own heading', () => {
    render(<AccountCard account={ACCOUNT} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Everyday account')
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', 'coffer-account')
  })

  it('sets the balance with its cents one size down', () => {
    const { container } = render(<AccountCard account={ACCOUNT} />)

    const balance = [...container.querySelectorAll('p')].find((p) =>
      p.textContent?.includes('€6,482'),
    )!
    expect(balance.textContent).toBe('€6,482.30')
    expect(balance.className).toContain('text-[36px]')
    expect(balance.className).toContain('tracking-[-.03em]')
    expect(balance.className).toContain('tabular-nums')
    expect(balance.querySelector('span')!.textContent).toBe('.30')
    expect(balance.querySelector('span')!.className).toContain('text-[20px]')
  })

  it('prints the card number in bullets with a screen-reader prefix', () => {
    render(<AccountCard account={ACCOUNT} />)

    expect(screen.getByText('Card ending in')).toHaveClass('sr-only')
    expect(screen.getByText('•••• •••• ••••')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('4821')).toBeInTheDocument()
  })

  it('bottom-anchors the holder and expiry strip', () => {
    const { container } = render(<AccountCard account={ACCOUNT} />)

    const strip = container.querySelector('.mt-auto')!
    expect(strip.textContent).toBe('Card holderLina MorettiExpires08/29')
    expect(strip.className).toContain('gap-9')
    expect(strip.className).toContain('font-semibold')
  })

  it('draws the issuer mark and the chip as inline SVG and no image', () => {
    const { container } = render(<AccountCard account={ACCOUNT} />)

    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2)
  })
})
