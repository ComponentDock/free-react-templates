import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the heading and three trainer cards with green-shadowed photos', () => {
    const { container } = render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Trainers' })).toHaveClass('text-primary')
    for (const name of ['James Holmes', 'Kelly Green', 'Ben Smith']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Aerobatics Trainer')).toHaveLength(3)
    const photos = screen.getAllByRole('img')
    expect(photos).toHaveLength(3)
    for (const photo of photos) {
      expect(photo).toHaveClass('shadow-[10px_10px_0_0_#48d494]')
    }
    expect(container.querySelectorAll('h3')).toHaveLength(3)
  })
})
