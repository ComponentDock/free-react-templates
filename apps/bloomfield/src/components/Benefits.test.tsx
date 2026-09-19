import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Benefits } from './Benefits'

describe('Benefits', () => {
  it('renders all four benefit items', () => {
    render(<Benefits />)
    expect(screen.getByText('100% Freshness')).toBeInTheDocument()
    expect(screen.getByText('Made by artist')).toBeInTheDocument()
    expect(screen.getByText('Own courier')).toBeInTheDocument()
    expect(screen.getByText('100% Quality')).toBeInTheDocument()
  })

  it('renders benefit descriptions', () => {
    render(<Benefits />)
    const descriptions = screen.getAllByText(/Most people are unaware/)
    expect(descriptions.length).toBe(4)
  })
})
