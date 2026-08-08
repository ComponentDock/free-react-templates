import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Awards } from './Awards'

describe('Awards', () => {
  it('renders the four award entries', () => {
    render(<Awards />)
    expect(screen.getByText('Awwwards Site of the Day')).toBeInTheDocument()
    expect(screen.getByText('CSS Design Awards')).toBeInTheDocument()
    expect(screen.getByText('FWA of the Month')).toBeInTheDocument()
    expect(screen.getByText('Webby Awards Honoree')).toBeInTheDocument()
    expect(screen.getAllByText('2024').length).toBe(2)
    expect(screen.getAllByText('2023').length).toBe(2)
  })
})
