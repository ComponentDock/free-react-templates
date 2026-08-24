import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StudentsViewing } from './StudentsViewing'

describe('StudentsViewing', () => {
  it('renders the heading and 5 course cards', () => {
    render(<StudentsViewing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Students are viewing' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('img')
    expect(cards).toHaveLength(5)
  })
})
