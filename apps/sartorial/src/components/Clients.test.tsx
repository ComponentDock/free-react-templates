import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders client logos', () => {
    render(<Clients />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('has alt text for each client', () => {
    render(<Clients />)
    expect(screen.getByAltText('Client 1')).toBeInTheDocument()
    expect(screen.getByAltText('Client 5')).toBeInTheDocument()
  })
})
