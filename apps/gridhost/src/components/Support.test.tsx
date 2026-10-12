import { render, screen } from '@testing-library/react'
import { Support } from './Support'

describe('Support', () => {
  it('carries the copy block with the support-grey heading and white body', () => {
    render(<Support />)

    expect(screen.getByRole('heading', { level: 2, name: 'An engineer, not a ticket queue' })).toHaveClass(
      'text-support-heading',
    )
    expect(screen.getByText(/Average first reply over the last quarter: four hours/)).toHaveClass(
      'text-white',
    )
  })

  it('offers two brand-pink contact cards, one a phone link and one a text action', () => {
    render(<Support />)

    const call = screen.getByRole('link', { name: 'Call support on +1 888 240 1180' })
    expect(call).toHaveAttribute('href', 'tel:+18882401180')
    expect(call).toHaveClass('h-[136px]', 'w-[165px]', 'bg-brand', 'rounded-tile')

    const chat = screen.getByRole('link', { name: 'Chat by text' })
    expect(chat).toHaveAttribute('href', '#domains')
  })
})
