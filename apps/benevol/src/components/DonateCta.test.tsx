import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DonateCta } from './DonateCta'
import { DONATE_HEADLINE, DONATE_LABEL } from '../data'

describe('DonateCta', () => {
  it('renders the headline and the block Donate Now button', () => {
    render(<DonateCta />)
    expect(screen.getByRole('heading', { level: 2, name: DONATE_HEADLINE })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: DONATE_LABEL })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
