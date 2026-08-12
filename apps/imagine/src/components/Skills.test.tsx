import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders on a black background with a white heading and paragraph on the left', () => {
    render(<Skills />)

    const section = screen.getByRole('region', { name: 'Skills' })
    expect(section).toHaveClass('bg-black')
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Our Fields of Expertness' }),
    ).toHaveClass('text-white')
    expect(within(section).getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders three labeled gradient progress rings', () => {
    const { container } = render(<Skills />)

    const section = screen.getByRole('region', { name: 'Skills' })
    const rings = container.querySelectorAll('.rounded-full')
    const labels = ['Wireframing', 'User Research', 'User Experience']
    for (const label of labels) {
      expect(within(section).getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }

    for (const label of ['83%', '90%', '75%']) {
      expect(within(section).getByText(label)).toBeInTheDocument()
    }
    expect(rings.length).toBeGreaterThanOrEqual(6)
  })
})
