import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title and description', () => {
    render(<About />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText(/We provide all kinds of fresh flower services/)).toBeInTheDocument()
  })

  it('renders the Contact us CTA', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the video play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
