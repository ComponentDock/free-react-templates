import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Steps } from './Steps'

describe('Steps', () => {
  it('renders the heading and five numbered steps', () => {
    render(<Steps />)
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()

    const numbers = ['01', '02', '03', '04', '05']
    for (const number of numbers) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Time & Place' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Car' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Details' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Checkout' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Done' })).toBeInTheDocument()
  })
})
