import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Solutions } from './Solutions'

describe('Solutions', () => {
  it('renders the heading on the cream band and six image cards', () => {
    const { container } = render(<Solutions />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Solutions' })).toBeInTheDocument()

    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(6)
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Consectetur Adipisicing Elit' }),
    ).toHaveLength(2)
    expect(screen.getAllByRole('heading', { level: 3, name: 'Beatae Doloribu' })).toHaveLength(2)
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Accusantium Eius Soluta' }),
    ).toHaveLength(2)

    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
