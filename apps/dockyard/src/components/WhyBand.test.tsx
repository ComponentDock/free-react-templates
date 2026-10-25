import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyBand } from './WhyBand'
import { why } from '../data'

describe('WhyBand', () => {
  it('splits into a text column and a full-bleed photograph', () => {
    const { container } = render(<WhyBand />)

    const section = container.querySelector('#why-us') as HTMLElement
    expect(section).toHaveClass('lg:grid-cols-2', 'border-t')

    const image = screen.getByRole('img', { name: /quay/i })
    expect(image).toHaveAttribute('src', why.image)
    expect(image.className).toContain('object-cover')
    expect(image.closest('div')).toHaveClass('lg:order-2')
  })

  it('lists the five checked reasons at a 32px uppercase heading', () => {
    render(<WhyBand />)

    expect(screen.getByRole('heading', { level: 2, name: why.title })).toHaveClass(
      'text-[32px]',
      'uppercase',
    )

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(why.items.length)
    for (const item of why.items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(items[0]?.querySelector('svg')).toHaveClass('text-brand')
  })
})
