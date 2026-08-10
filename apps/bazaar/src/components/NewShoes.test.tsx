import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NewShoes } from './NewShoes'

describe('NewShoes', () => {
  it('shows the sub-title, the headline and the shop CTA', () => {
    render(<NewShoes />)

    expect(screen.getByText('#New Summer Collection 2019')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'New Shoes' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
  })
})
