import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service blocks with icons and headings', () => {
    render(<Services />)

    expect(screen.getByText('Enjoy Eating')).toBeInTheDocument()
    expect(screen.getByText('Fresh Sea Foods')).toBeInTheDocument()
    expect(screen.getByText('Cup of Coffees')).toBeInTheDocument()
    expect(screen.getByText('Meat Eaters')).toBeInTheDocument()

    // All service descriptions
    const descriptions = screen.getAllByText(/A small river named Duden/i)
    expect(descriptions).toHaveLength(4)
  })

  it('has section with services id', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('#services')
    expect(section).toBeInTheDocument()
  })
})
