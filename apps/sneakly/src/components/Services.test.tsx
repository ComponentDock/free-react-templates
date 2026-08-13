import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the three benefit columns with headings and copy', () => {
    const { container } = render(<Services />)

    for (const title of ['Free Shipping', 'Support Customer', 'Secure Payments']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(3)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(3)
    expect(screen.getByTestId('services')).toHaveClass('bg-white')
  })
})
