import { render, screen } from '@testing-library/react'
import { Platform } from './Platform'

describe('Platform', () => {
  it('renders platform heading', () => {
    render(<Platform />)
    expect(
      screen.getByRole('heading', { level: 2, name: /advanced learning system/i }),
    ).toBeInTheDocument()
  })

  it('renders platform description', () => {
    render(<Platform />)
    expect(screen.getByText(/interactive video lessons/i)).toBeInTheDocument()
  })

  it('renders platform features', () => {
    render(<Platform />)
    expect(screen.getByText('Learn Anywhere')).toBeInTheDocument()
    expect(screen.getByText('Verified Certificates')).toBeInTheDocument()
  })

  it('renders platform image', () => {
    render(<Platform />)
    const img = screen.getByAltText(/learnhub advanced learning/i)
    expect(img).toBeInTheDocument()
  })
})
