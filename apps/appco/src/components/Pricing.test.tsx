import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices and Get Started buttons', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose Your Very Best Pricing Plan.' }),
    ).toBeInTheDocument()

    for (const name of ['Basic', 'Pro', 'Enterprise']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()

    const buttons = screen.getAllByRole('link', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#download')
    }
  })
})
