import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and six icon cards on the light background', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
