import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section heading and all three product cards', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { name: 'Premium Solar Equipment' })).toBeInTheDocument()
    for (const name of ['SunPower Maxeon 6', 'LG NeON H+', 'Canadian Solar HiKu7']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('22.8% efficiency')).toBeInTheDocument()
    expect(screen.getByText('555W output')).toBeInTheDocument()
  })
})
