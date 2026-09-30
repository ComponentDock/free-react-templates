import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OrDivider } from './OrDivider'

describe('OrDivider', () => {
  it('renders the "or" text', () => {
    render(<OrDivider />)
    expect(screen.getByText('or')).toBeInTheDocument()
  })

  it('renders with horizontal lines', () => {
    render(<OrDivider />)
    const divider = screen.getByTestId('or-divider')
    expect(divider).toHaveClass('flex')
  })
})
