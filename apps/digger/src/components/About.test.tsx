import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about section with stats', () => {
    render(<About />)
    expect(screen.getByText('About Digger')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('1500+')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<About />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })
})
