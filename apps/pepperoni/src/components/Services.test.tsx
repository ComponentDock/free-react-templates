import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and 3 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
    expect(screen.getByText('Healthy Foods')).toBeInTheDocument()
    expect(screen.getByText('Fastest Delivery')).toBeInTheDocument()
    expect(screen.getByText('Original Recipes')).toBeInTheDocument()
  })
})
