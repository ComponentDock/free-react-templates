import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service titles', () => {
    render(<Services />)
    expect(screen.getByText('Find Places Anywhere In The World')).toBeInTheDocument()
    expect(screen.getByText('We Have Agents With Experience')).toBeInTheDocument()
    expect(screen.getByText('Buy & Rent Modern Properties')).toBeInTheDocument()
    expect(screen.getByText('Making Money')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/A small river named Duden/)
    expect(descriptions).toHaveLength(4)
  })
})
