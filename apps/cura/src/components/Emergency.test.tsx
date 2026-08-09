import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Emergency } from './Emergency'

describe('Emergency', () => {
  it('renders the emergency messaging and hotline', () => {
    render(<Emergency />)
    expect(screen.getByRole('heading', { name: '24/7 Emergency Care' })).toBeInTheDocument()
    expect(screen.getByText('(555) 911-0000')).toBeInTheDocument()
  })

  it('provides a call CTA linking to the hotline', () => {
    render(<Emergency />)
    expect(screen.getByRole('link', { name: /Call Emergency Line/ })).toHaveAttribute(
      'href',
      'tel:+15559110000',
    )
    expect(screen.getByRole('link', { name: '(555) 911-0000' })).toHaveAttribute(
      'href',
      'tel:+15559110000',
    )
  })
})
