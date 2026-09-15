import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features heading', () => {
    render(<Features />)
    expect(screen.getByText('Top Features')).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('High Performance')).toBeInTheDocument()
    expect(screen.getByText('Smart Controls')).toBeInTheDocument()
    expect(screen.getByText('Premium Build')).toBeInTheDocument()
    expect(screen.getByText('Seamless Sync')).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(<Features />)
    const img = screen.getByRole('img', { name: /wristly smartwatch product/i })
    expect(img).toBeInTheDocument()
  })
})
