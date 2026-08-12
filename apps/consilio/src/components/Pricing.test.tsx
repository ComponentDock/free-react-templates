import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the eyebrow, heading, and three plans with monthly prices', () => {
    render(<Pricing />)

    expect(screen.getByText('Our Pricing Plans')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Choose Your Plan' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Starter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Professional' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Enterprise' })).toBeInTheDocument()

    expect(screen.getByText('$499')).toBeInTheDocument()
    expect(screen.getByText('$999')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
  })

  it('marks Professional as Most Popular and varies the CTA labels', () => {
    render(<Pricing />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('switches prices to the discounted yearly rate and back', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle yearly billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$399')).toBeInTheDocument()
    expect(screen.getByText('$799')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('$499')).toBeInTheDocument()
  })
})
