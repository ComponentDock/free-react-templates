import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with icons and blurbs', () => {
    const { container } = render(<Services />)
    for (const title of ['Help & Support', 'Adoption', 'Volunteering', 'Education']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(container.querySelectorAll('svg').length).toBe(4)
  })
})
