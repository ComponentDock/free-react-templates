import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesHorizontal } from './ServicesHorizontal'

describe('ServicesHorizontal', () => {
  it('renders three horizontal service cards', () => {
    render(<ServicesHorizontal />)

    const titles = ['Vector Illustration', 'Graphic Design', 'Responsive Design']
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
