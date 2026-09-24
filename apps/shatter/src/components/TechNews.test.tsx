import { render, screen } from '@testing-library/react'
import { TechNews } from './TechNews'

describe('TechNews', () => {
  it('renders the section heading', () => {
    render(<TechNews />)
    expect(screen.getByText('Technology News')).toBeInTheDocument()
  })

  it('renders 4 tech news cards', () => {
    render(<TechNews />)
    expect(screen.getByText('Quantum Computing Reaches New Milestone')).toBeInTheDocument()
    expect(screen.getByText('Next-Gen Wearables Redefine Health Tracking')).toBeInTheDocument()
    expect(screen.getByText('Open Source AI Models Challenge Big Tech')).toBeInTheDocument()
    expect(screen.getByText('Space Tech Startups Secure Record Funding')).toBeInTheDocument()
  })

  it('has correct aria-labelledby', () => {
    render(<TechNews />)
    const section = screen.getByLabelText('Technology News')
    expect(section).toHaveAttribute('aria-labelledby', 'tech-heading')
  })
})
