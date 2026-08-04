import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the three service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Services for every dog')

    for (const service of ['Pet Boarding', 'Healthy Meals', 'Pet Spa']) {
      expect(screen.getByRole('heading', { level: 3, name: service })).toBeInTheDocument()
    }
  })
})
