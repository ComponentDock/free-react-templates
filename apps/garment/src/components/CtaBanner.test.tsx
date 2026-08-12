import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the discount label, the sale heading and the Buy Now button', () => {
    render(<CtaBanner />)

    expect(screen.getByText('-60%')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Global Sale' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Now' })).toHaveAttribute('href', '#shop')
  })
})
