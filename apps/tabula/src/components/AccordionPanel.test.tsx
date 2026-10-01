import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccordionPanel } from './AccordionPanel'
import { products } from '../data/products'

describe('AccordionPanel', () => {
  it('renders an open panel row with the full-width animated band', () => {
    render(<AccordionPanel product={products[0]!} isOpen />)
    const row = screen.getAllByRole('row')[0] as HTMLElement
    expect(row).not.toHaveAttribute('aria-hidden')
    const td = row.querySelector('td') as HTMLElement
    expect(td).toHaveAttribute('colspan', '6')
    expect(td).toHaveAttribute('id', 'panel-1')
    expect(td.className).toContain('bg-panel')
    expect(td.className).toContain('border-none')
    expect(td.className).toContain('p-0')
    const animated = td.firstElementChild as HTMLElement
    expect(animated.className).toContain('grid')
    expect(animated.className).toContain('grid-rows-[1fr]')
    expect(animated.className).toContain('transition-[grid-template-rows]')
    expect(animated.className).toContain('duration-[350ms]')
    expect(animated.className).toContain('motion-reduce:transition-none')
    const inner = animated.firstElementChild as HTMLElement
    expect(inner.className).toContain('min-h-0')
    expect(inner.className).toContain('overflow-hidden')
    const paragraph = inner.querySelector('p') as HTMLElement
    expect(paragraph).toHaveTextContent(products[0]!.detail)
    expect(paragraph.className).toContain('p-[30px]')
    expect(paragraph.className).toContain('text-[14px]')
  })

  it('renders a closed panel row collapsed and hidden from assistive tech', () => {
    render(<AccordionPanel product={products[1]!} isOpen={false} />)
    const row = screen.getAllByRole('row', { hidden: true })[0] as HTMLElement
    expect(row).toHaveAttribute('aria-hidden', 'true')
    const td = row.querySelector('td') as HTMLElement
    expect(td).toHaveAttribute('id', 'panel-2')
    expect(td.className).toContain('bg-panel')
    const animated = td.firstElementChild as HTMLElement
    expect(animated.className).toContain('grid-rows-[0fr]')
    expect(animated.className).toContain('ease-out')
    const inner = animated.firstElementChild as HTMLElement
    expect(inner.className).toContain('overflow-hidden')
    expect(inner.querySelector('p')).toHaveTextContent(products[1]!.detail)
  })
})
