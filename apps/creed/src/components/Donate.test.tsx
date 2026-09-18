import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Donate } from './Donate'

describe('Donate', () => {
  it('renders the section heading', () => {
    render(<Donate />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Donate to our Charities')
  })

  it('shows all three cause cards', () => {
    render(<Donate />)
    expect(screen.getByText('Church Building')).toBeInTheDocument()
    expect(screen.getByText('Youth Foundation')).toBeInTheDocument()
    expect(screen.getByText("Children's Ministry")).toBeInTheDocument()
  })

  it('has donate buttons for each cause', () => {
    render(<Donate />)
    const donateButtons = screen.getAllByRole('link', { name: /donate/i })
    expect(donateButtons).toHaveLength(3)
  })
})
