import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallActionBand } from './CallActionBand'

describe('CallActionBand', () => {
  it('renders centred white copy on a solid brand band', () => {
    const { container } = render(<CallActionBand />)

    const band = container.querySelector('section')
    expect(band).toHaveClass('bg-brand', 'py-[120px]')
    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('text-white')
  })

  it('offers a white pill consultation CTA that inverts on hover', () => {
    render(<CallActionBand />)

    const cta = screen.getByRole('link', { name: 'Request Free Consultation' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('bg-surface', 'text-ink', 'rounded-[25px]')
    expect(cta).toHaveClass('hover:bg-transparent', 'hover:border-white', 'hover:text-white')
  })

  it('keeps the copy column centred at nine of twelve columns', () => {
    const { container } = render(<CallActionBand />)

    expect(container.querySelector('.lg\\:w-9\\/12')).toBeInTheDocument()
    expect(container.querySelector('.text-center')).toBeInTheDocument()
  })
})
