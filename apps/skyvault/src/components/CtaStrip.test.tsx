import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaStrip } from './CtaStrip'

describe('CtaStrip', () => {
  it('renders the 135px violet strip with the price and the mint action', () => {
    render(<CtaStrip />)

    const section = document.getElementById('news')!
    expect(section).toHaveClass('bg-plum-mid', 'scroll-mt-[124px]')

    const content = section.querySelector('div > div')!
    expect(content).toHaveClass('min-[992px]:h-[135px]', 'pl-[5px]', 'min-[992px]:justify-between')

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Start building your site now',
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass(
      'text-[36px]',
      'font-bold',
      'text-white',
    )
  })

  it('drops the mint price with the small from and per-month spans', () => {
    render(<CtaStrip />)

    const price = screen.getByText('$9.90')
    expect(price).toHaveClass(
      'text-[48px]',
      'font-bold',
      'text-mint',
      'min-[992px]:translate-y-[-8px]',
    )
    expect(screen.getByText('from')).toHaveClass('text-[16px]')
    expect(screen.getByText('/month')).toHaveClass('text-[16px]')
  })

  it('links its action back into the page', () => {
    render(<CtaStrip />)

    const action = screen.getByRole('link', { name: 'Start now' })
    expect(action).toHaveAttribute('href', '#contact')
    expect(action).toHaveClass('bg-mint', 'h-[63px]', 'w-[148px]', 'text-ink-on-mint')
  })
})
