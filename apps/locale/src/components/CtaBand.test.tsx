import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { CTA, LISTINGS_ID } from '../lib/site'

describe('CtaBand', () => {
  it('renders the heading and the count line', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.text)).toBeInTheDocument()
  })

  it('offers the Explore More action pointing back at the listings', () => {
    render(<CtaBand />)

    expect(screen.getByRole('link', { name: CTA.action })).toHaveAttribute('href', `#${LISTINGS_ID}`)
    expect(screen.getByTestId('cta-band')).toHaveClass('border-edge')
  })

  it('carries the navy hover sweep behind the label', () => {
    const { container } = render(<CtaBand />)
    const sweep = container.querySelector('[aria-hidden="true"]') as HTMLElement

    expect(sweep).toHaveClass('scale-x-0')
    expect(sweep).toHaveClass('group-hover:scale-x-100')
    expect(sweep).toHaveClass('bg-navy')
  })
})
