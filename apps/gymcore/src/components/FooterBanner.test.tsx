import { render, screen } from '@testing-library/react'
import { FooterBanner } from './FooterBanner'

describe('FooterBanner', () => {
  it('renders both banner sections', () => {
    render(<FooterBanner />)
    expect(screen.getByText('New member')).toBeInTheDocument()
    expect(screen.getByText('7 days for free')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('09 746 204')).toBeInTheDocument()
    const getStartedButtons = screen.getAllByText('Get Started')
    expect(getStartedButtons).toHaveLength(2)
  })
})
