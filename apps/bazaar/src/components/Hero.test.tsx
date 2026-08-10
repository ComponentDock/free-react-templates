import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the collection sub-title, the headline and the shop CTA', () => {
    render(<Hero />)

    expect(screen.getByText('#New Summer Collection 2019')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Arrivals Sales')
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
  })
})
