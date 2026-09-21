import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Games } from './Games'

describe('Games', () => {
  it('renders 3 game cards', () => {
    render(<Games />)
    const buttons = screen.getAllByText('View Games')
    expect(buttons).toHaveLength(3)
  })

  it('renders game images', () => {
    render(<Games />)
    expect(screen.getByAltText('Cyber Quest')).toBeDefined()
    expect(screen.getByAltText('Shadow Realm')).toBeDefined()
    expect(screen.getByAltText('Star Frontier')).toBeDefined()
  })

  it('has a games section', () => {
    render(<Games />)
    expect(screen.getByLabelText('Games')).toBeDefined()
  })
})
