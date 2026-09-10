import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders all partner logos', () => {
    render(<Partners />)
    expect(screen.getByAltText('Partner 1')).toBeDefined()
    expect(screen.getByAltText('Partner 2')).toBeDefined()
    expect(screen.getByAltText('Partner 3')).toBeDefined()
    expect(screen.getByAltText('Partner 4')).toBeDefined()
    expect(screen.getByAltText('Partner 5')).toBeDefined()
    expect(screen.getByAltText('Partner 6')).toBeDefined()
  })

  it('renders 6 partner images', () => {
    const { container } = render(<Partners />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBe(6)
  })
})
