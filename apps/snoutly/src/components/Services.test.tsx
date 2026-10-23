import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and the three service cards with icons and copy', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'We Provide Best Services',
    )
    for (const title of ['Pet Surgeries', 'Pet Adoption', 'Pet Care']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(screen.getByText(/Safe, gentle surgical care/)).toBeInTheDocument()
  })
})
