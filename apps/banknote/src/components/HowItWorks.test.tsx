import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section title', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders three numbered steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Online Applications')).toBeInTheDocument()
    expect(screen.getByText('Get an approval')).toBeInTheDocument()
    expect(screen.getByText('Card delivery')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<HowItWorks />)
    expect(screen.getByLabelText('Previous')).toBeInTheDocument()
    expect(screen.getByLabelText('Next')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<HowItWorks />)
    const links = screen.getAllByText('Learn More →')
    expect(links.length).toBe(3)
  })
})
