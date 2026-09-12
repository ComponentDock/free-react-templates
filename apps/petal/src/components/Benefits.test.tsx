import { render, screen } from '@testing-library/react'
import { Benefits } from './Benefits'

describe('Benefits', () => {
  it('renders four benefit items', () => {
    render(<Benefits />)
    expect(screen.getByText('100% Freshness')).toBeInTheDocument()
    expect(screen.getByText('Made by artist')).toBeInTheDocument()
    expect(screen.getByText('Own courier')).toBeInTheDocument()
    expect(screen.getByText('Fast Delivery')).toBeInTheDocument()
  })
})
