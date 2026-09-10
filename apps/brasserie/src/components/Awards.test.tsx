import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Awards } from './Awards'

describe('Awards', () => {
  it('renders the awards heading and award cards', () => {
    render(<Awards />)
    expect(screen.getByRole('heading', { name: 'Awards' })).toBeInTheDocument()
    expect(screen.getByText('Best Fine Dining 2024')).toBeInTheDocument()
    expect(screen.getByText('Michelin Recommended')).toBeInTheDocument()
    expect(screen.getByText('Chef of the Year')).toBeInTheDocument()
  })
})
