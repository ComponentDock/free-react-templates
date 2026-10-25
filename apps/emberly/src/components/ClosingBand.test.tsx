import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingBand } from './ClosingBand'
import { CLOSING, PHONE_HREF } from '../content'

describe('ClosingBand', () => {
  it('renders the flat brand band with two CTAs and no form', () => {
    const { container } = render(<ClosingBand />)

    expect(container.querySelector('#contact')).toHaveClass('bg-primary-700')
    expect(screen.getByRole('heading', { name: CLOSING.heading })).toHaveClass(
      'text-white',
      'font-bold',
    )
    expect(screen.getByText(CLOSING.lede)).toHaveClass('text-primary-100')
    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelector('img')).toBeNull()
  })

  it('offers a white primary button and a ghost phone button', () => {
    render(<ClosingBand />)

    expect(screen.getByRole('link', { name: CLOSING.primary })).toHaveClass(
      'bg-white',
      'text-primary-700',
      'px-8',
      'py-4',
    )
    const phone = screen.getByRole('link', { name: CLOSING.secondary })
    expect(phone).toHaveAttribute('href', PHONE_HREF)
    expect(phone).toHaveClass('border-2', 'border-white/40')
    expect(phone.querySelector('svg')).not.toBeNull()
  })
})
