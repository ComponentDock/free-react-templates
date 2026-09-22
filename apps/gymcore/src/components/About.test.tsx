import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about text and play button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /story about us/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })
})
