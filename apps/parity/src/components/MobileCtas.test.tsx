import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK, PLANS } from '../content'
import { MobileCtas } from './MobileCtas'

describe('MobileCtas', () => {
  it('offers one reaching-every-plan CTA below the table', () => {
    render(<MobileCtas plans={PLANS} />)

    const links = screen.getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual([
      'Sign up with Basic',
      'Start trial with Team',
      'Start trial with Business',
    ])
    for (const link of links) {
      expect(link).toHaveAttribute('href', COMPONENT_DOCK)
    }
  })

  it('fills only the featured plan', () => {
    render(<MobileCtas plans={PLANS} />)

    const links = screen.getAllByRole('link')
    expect(links.map((link) => link.classList.contains('pt-mobile-cta--pop'))).toEqual([
      false,
      true,
      false,
    ])
  })
})
