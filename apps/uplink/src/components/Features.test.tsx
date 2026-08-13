import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section heading and six feature cards', () => {
    const { container } = render(<Features />)
    expect(
      screen.getByRole('heading', { name: 'Some Features that Made us Unique' }),
    ).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toHaveLength(6)
    for (const title of [
      'Expert Technicians',
      'Data Security',
      '24/7 Support',
      'Fast Servers',
      'Easy Setup',
      'Money Back Guarantee',
    ]) {
      expect(titles).toContain(title)
    }
    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
