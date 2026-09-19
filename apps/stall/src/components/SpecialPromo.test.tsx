import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialPromo } from './SpecialPromo'

describe('SpecialPromo', () => {
  it('renders promo heading, summer sale text, countdown, and shop button', () => {
    render(<SpecialPromo />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Special Promo')
    expect(screen.getByText('Summer Sale')).toBeInTheDocument()

    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#products')
  })
})
