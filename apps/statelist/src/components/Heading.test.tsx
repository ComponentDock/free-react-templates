import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders the brand heading', () => {
    render(<Heading />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Statelist')
  })

  it('uses black text color', () => {
    render(<Heading />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveStyle({ color: '#000' })
  })
})
