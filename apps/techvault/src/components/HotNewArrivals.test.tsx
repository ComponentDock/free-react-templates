import { render, screen, fireEvent } from '@testing-library/react'
import { HotNewArrivals } from './HotNewArrivals'

describe('HotNewArrivals', () => {
  it('renders the section title', () => {
    render(<HotNewArrivals />)
    expect(screen.getByText('Hot New Arrivals')).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<HotNewArrivals />)
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('shows arrivals products by default', () => {
    render(<HotNewArrivals />)
    expect(screen.getByText('Wireless Earbuds')).toBeInTheDocument()
    expect(screen.getByText('Laptop Stand')).toBeInTheDocument()
  })

  it('switches tabs when clicked', () => {
    render(<HotNewArrivals />)
    fireEvent.click(screen.getByText('Featured'))
    expect(screen.getByText('Gaming Headset')).toBeInTheDocument()
    expect(screen.getByText('Wireless Charger')).toBeInTheDocument()
  })

  it('switches to sale tab', () => {
    render(<HotNewArrivals />)
    fireEvent.click(screen.getByText('Sale'))
    expect(screen.getByText('Tablet Case')).toBeInTheDocument()
    expect(screen.getByText('Phone Mount')).toBeInTheDocument()
  })
})
