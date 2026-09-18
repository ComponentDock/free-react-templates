import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders 5 client logos', () => {
    render(<Clients />)
    const logos = screen.getAllByAltText(/Client/)
    expect(logos).toHaveLength(5)
  })
})
