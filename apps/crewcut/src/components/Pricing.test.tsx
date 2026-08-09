import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices and features', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose the Perfect Plan for you' }),
    ).toBeInTheDocument()
    for (const name of ['Standard', 'Business', 'Ultimate']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getByText('£199')).toBeInTheDocument()
    expect(screen.getByText('£399')).toBeInTheDocument()
    expect(screen.getByText('£499')).toBeInTheDocument()
    const buttons = screen.getAllByRole('button', { name: 'Purchase Plan' })
    expect(buttons).toHaveLength(3)
    expect(screen.getAllByText('2.5 GB Free Photos')).toHaveLength(3)
  })
})
