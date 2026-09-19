import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/Latest Posts/i)).toBeInTheDocument()
  })

  it('renders blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Learning to teach/i)).toBeInTheDocument()
    expect(screen.getByText(/The future of online/i)).toBeInTheDocument()
  })
})
