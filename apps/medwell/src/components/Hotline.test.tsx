import { render, screen } from '@testing-library/react'
import { Hotline } from './Hotline'

describe('Hotline', () => {
  it('renders heading and phone number', () => {
    render(<Hotline />)
    expect(screen.getByText('Emergency Hotline')).toBeInTheDocument()
    expect(screen.getByText('(+01) – 256 567 550')).toBeInTheDocument()
  })

  it('renders support message', () => {
    render(<Hotline />)
    expect(screen.getByText(/24\/7 customer support/i)).toBeInTheDocument()
  })
})
