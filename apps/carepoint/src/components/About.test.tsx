import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('A great medical team to help your needs')).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/committed to providing exceptional healthcare/i)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<About />)
    expect(screen.getByText('Read More')).toHaveAttribute('href', '#about')
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Medical team providing care')).toHaveAttribute(
      'src',
      expect.stringContaining('carepoint-about'),
    )
  })
})
