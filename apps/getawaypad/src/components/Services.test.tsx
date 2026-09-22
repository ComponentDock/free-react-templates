import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Map Direction')).toBeInTheDocument()
    expect(screen.getByText('Accommodation Services')).toBeInTheDocument()
    expect(screen.getByText('Great Experience')).toBeInTheDocument()
  })

  it('renders Read more buttons', () => {
    render(<Services />)
    const buttons = screen.getAllByText('Read more')
    expect(buttons).toHaveLength(3)
  })
})
