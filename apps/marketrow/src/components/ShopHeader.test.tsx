import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShopHeader } from './ShopHeader'

describe('ShopHeader', () => {
  it('stacks the eyebrow over the headline, bottom-aligned with the chip', () => {
    render(<ShopHeader count={0} bumped={false} />)
    const header = screen.getByRole('banner')

    expect(header).toHaveClass('flex', 'flex-wrap', 'items-end', 'justify-between', 'gap-4', 'mb-7')
    expect(screen.getByText('Autumn edit')).toHaveClass('text-[14px]', 'font-medium', 'text-muted', 'm-0')
  })

  it('renders one clamped h1 with tight tracking', () => {
    render(<ShopHeader count={0} bumped={false} />)
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toHaveTextContent('Everyday carry')
    expect(title.className).toContain('text-[clamp(28px,3.6vw,40px)]')
    expect(title).toHaveClass('font-bold', 'leading-[1.1]', 'tracking-[-0.03em]', 'text-ink')
    expect(title).toHaveClass('m-0', 'mt-[2px]')
  })

  it('passes the bag count through to the chip', () => {
    render(<ShopHeader count={4} bumped />)

    expect(screen.getByTestId('bag-count')).toHaveTextContent('4')
    expect(screen.getByTestId('bag-count')).toHaveClass('scale-125')
  })
})
