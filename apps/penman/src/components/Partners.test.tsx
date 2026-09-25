import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'
import { describe, it, expect } from 'vitest'

describe('Partners', () => {
  it('renders 5 partner logos', () => {
    render(<Partners />)
    const images = screen.getAllByAltText('Partner logo')
    expect(images).toHaveLength(5)
  })
})
