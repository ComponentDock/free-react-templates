import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the turquoise band with the white outline pill', () => {
    const { container } = render(<CtaBand />)

    expect(container.querySelector('section')?.className).toContain('bg-brand')

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Plan your travel now and get in touch with us.',
      }),
    ).toHaveClass('text-white')

    const lead = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit?',
    )
    expect(lead.className).toContain('text-white/70')

    const cta = screen.getByRole('link', { name: 'Get in touch' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('border-2')
    expect(cta.className).toContain('hover:bg-white')
  })
})
