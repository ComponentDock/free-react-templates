import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the heading and at least three screenshot images', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { name: 'Awesome Screenshot' })).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
