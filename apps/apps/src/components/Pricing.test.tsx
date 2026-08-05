import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and the three pricing plans', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose the Perfect Plan for you' }),
    ).toBeInTheDocument()
    for (const plan of ['Standard', 'Business', 'Ultimate']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('£199')).toBeInTheDocument()
    expect(screen.getByText('£399')).toBeInTheDocument()
    expect(screen.getByText('£499')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Purchase Plan' })).toHaveLength(3)
  })
})
