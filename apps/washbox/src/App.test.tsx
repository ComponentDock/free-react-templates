import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('WashBox').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Car Wash').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('We have the latest equipment')).toBeInTheDocument()
    expect(screen.getByText('We offer best services to our customer')).toBeInTheDocument()
    expect(screen.getByText('Why take our services?')).toBeInTheDocument()
    expect(screen.getByText('Your car will look as your new one')).toBeInTheDocument()
  })
})
