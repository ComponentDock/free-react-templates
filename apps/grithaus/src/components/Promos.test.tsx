import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Promos } from './Promos'
import { promos } from '../data'

describe('Promos', () => {
  it('renders the offer banner and the class banner as links', () => {
    render(<Promos />)
    const offer = screen.getByRole('link', { name: /25% Discount/ })
    const classes = screen.getByRole('link', { name: /Fitness Class/ })
    expect(offer).toHaveAttribute('data-variant', 'offer')
    expect(offer).toHaveAttribute('href', '#pricing')
    expect(classes).toHaveAttribute('data-variant', 'photo')
    expect(screen.getAllByRole('link')).toHaveLength(promos.length)
    expect(screen.getByText(promos[0]!.copy)).toBeInTheDocument()
  })
})
