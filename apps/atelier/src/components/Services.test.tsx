import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service items with icons', () => {
    const { container } = render(<Services />)

    for (const title of [
      'Free Shipping',
      'Money Back Guarantee',
      'Online Support 24/7',
      'Payment Secure',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })
})
