import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders contact info and CTA', () => {
    render(<Banner />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('09 746 204')).toBeInTheDocument()
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })
})
