import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AdStrip } from './AdStrip'

describe('AdStrip', () => {
  it('renders the discount banner and the class promo banner', () => {
    render(<AdStrip />)

    expect(screen.getByRole('heading', { name: '25% Discount' })).toBeInTheDocument()
    expect(screen.getByText(/first month of any membership/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join today' })).toHaveAttribute('href', '#pricing')

    expect(screen.getByText('Fitness Class')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View classes' })).toHaveAttribute('href', '#services')
  })
})
