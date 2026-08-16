import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Topbar } from './Topbar'

describe('Topbar', () => {
  it('shows the shipping message and utility links', () => {
    render(<Topbar />)
    expect(screen.getByText('Free shipping for standard order over $100')).toBeInTheDocument()
    for (const link of ['Help & FAQs', 'My Account', 'EN', 'USD']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
