import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders section heading', () => {
    render(<WhyUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Eduforge')
  })

  it('renders feature titles', () => {
    render(<WhyUs />)
    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders video thumbnail with play icon', () => {
    render(<WhyUs />)
    expect(screen.getByAltText('Watch our introduction video')).toBeInTheDocument()
  })

  it('renders divider', () => {
    const { container } = render(<WhyUs />)
    const hr = container.querySelector('hr')
    expect(hr).toBeInTheDocument()
  })
})
