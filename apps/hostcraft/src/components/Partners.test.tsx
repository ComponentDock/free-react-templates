import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner logo images', () => {
    render(<Partners />)
    const images = screen.getAllByAltText(/Partner/)
    expect(images).toHaveLength(5)
  })
})
