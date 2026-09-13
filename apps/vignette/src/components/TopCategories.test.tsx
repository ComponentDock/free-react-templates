import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCategories } from './TopCategories'

describe('TopCategories', () => {
  it('renders two category cards', () => {
    render(<TopCategories />)
    expect(screen.getByText('Sale 30%')).toBeInTheDocument()
    expect(screen.getByText('Designer Bags')).toBeInTheDocument()
  })

  it('renders SHOP NOW buttons', () => {
    render(<TopCategories />)
    const buttons = screen.getAllByRole('link', { name: /SHOP NOW/i })
    expect(buttons).toHaveLength(2)
  })

  it('renders category labels', () => {
    render(<TopCategories />)
    expect(screen.getByText('On Accessories')).toBeInTheDocument()
    expect(screen.getByText('In Bags excepting the new collection')).toBeInTheDocument()
  })
})
