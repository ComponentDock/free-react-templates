import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Quality is Our First Priority')).toBeDefined()
  })

  it('displays 3 feature cards', () => {
    render(<Services />)
    expect(screen.getByText('Premium Ingredients')).toBeDefined()
    expect(screen.getByText('Fast Delivery')).toBeDefined()
    expect(screen.getByText('Custom Orders')).toBeDefined()
  })

  it('shows the subtitle', () => {
    render(<Services />)
    expect(screen.getByText('Our Features')).toBeDefined()
  })
})
