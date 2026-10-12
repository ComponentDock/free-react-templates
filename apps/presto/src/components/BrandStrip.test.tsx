import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandStrip } from './BrandStrip'

describe('BrandStrip', () => {
  it('renders a bordered strip with exactly seven own marks', () => {
    render(<BrandStrip />)
    const section = screen.getByRole('region', { name: 'Trusted by' })
    const strip = section.firstElementChild as HTMLElement
    expect(strip).toHaveClass('border-y', 'border-line', 'pt-[50px]', 'pb-[40px]')

    const marks = within(section).getAllByRole('listitem')
    expect(marks.map((mark) => mark.textContent)).toEqual([
      'Northwind',
      'Kite',
      'Lumen',
      'Arbor',
      'Tessellate',
      'Mono',
      'Vertex',
    ])
  })

  it('renders the marks as flat uppercase text, not borrowed artwork', () => {
    render(<BrandStrip />)
    const mark = screen.getByText('Northwind')
    expect(mark).toHaveClass('uppercase', 'text-copy-soft')
    expect(mark.querySelector('img')).toBeNull()
  })
})
