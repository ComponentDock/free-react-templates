import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /We want you to express yourself/ }),
    ).toBeInTheDocument()
    for (const title of ['Refund Policy', 'Premium Packaging', 'Superior Quality']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
