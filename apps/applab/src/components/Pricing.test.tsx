import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices and Get Now buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Unlock full Power' })).toBeInTheDocument()

    for (const name of ['Basic', 'Team', 'Business']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByText('$06')).toHaveLength(3)
    expect(screen.getByText('Unlimited Users')).toBeInTheDocument()

    const buttons = screen.getAllByRole('link', { name: 'Get Now' })
    expect(buttons).toHaveLength(3)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#download')
    }
  })
})
