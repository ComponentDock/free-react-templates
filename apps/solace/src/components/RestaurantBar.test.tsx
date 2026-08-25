import { render, screen } from '@testing-library/react'
import { RestaurantBar } from './RestaurantBar'

describe('RestaurantBar', () => {
  it('renders section heading', () => {
    render(<RestaurantBar />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Restaurant & Bar')
  })

  it('renders all 4 menu items', () => {
    render(<RestaurantBar />)
    expect(screen.getByText('Grilled Beef with Potatoes')).toBeInTheDocument()
    expect(screen.getByText('Ultimate Overload')).toBeInTheDocument()
    expect(screen.getByText('Ham & Pineapple')).toBeInTheDocument()
    expect(screen.getByText('Fresh Seafood Platter')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<RestaurantBar />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$22')).toBeInTheDocument()
    expect(screen.getByText('$55')).toBeInTheDocument()
  })

  it('displays food images', () => {
    render(<RestaurantBar />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('has resto-bar section id', () => {
    const { container } = render(<RestaurantBar />)
    expect(container.querySelector('#resto-bar')).toBeInTheDocument()
  })
})
