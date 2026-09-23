import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturesAccordion } from './FeaturesAccordion'

describe('FeaturesAccordion', () => {
  it('renders section heading', () => {
    render(<FeaturesAccordion />)
    expect(screen.getByText('Why choose our platform')).toBeInTheDocument()
  })

  it('renders four accordion items', () => {
    render(<FeaturesAccordion />)
    expect(screen.getByText('Powerful Analytics Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Seamless Team Collaboration')).toBeInTheDocument()
    expect(screen.getByText('Automated Workflows')).toBeInTheDocument()
    expect(screen.getByText('Enterprise-Grade Security')).toBeInTheDocument()
  })

  it('first item is expanded by default', () => {
    render(<FeaturesAccordion />)
    expect(screen.getByText(/Track real-time metrics/)).toBeInTheDocument()
  })

  it('clicking a header toggles content', async () => {
    const user = userEvent.setup()
    render(<FeaturesAccordion />)
    const secondBtn = screen.getByText('Seamless Team Collaboration')
    await user.click(secondBtn)
    expect(screen.getByText(/Invite teammates/)).toBeInTheDocument()
    // First item should collapse
    expect(screen.queryByText(/Track real-time metrics/)).not.toBeInTheDocument()
  })

  it('clicking open item collapses it', async () => {
    const user = userEvent.setup()
    render(<FeaturesAccordion />)
    const firstBtn = screen.getByText('Powerful Analytics Dashboard')
    await user.click(firstBtn)
    expect(screen.queryByText(/Track real-time metrics/)).not.toBeInTheDocument()
  })

  it('renders feature image', () => {
    render(<FeaturesAccordion />)
    expect(screen.getByRole('img', { name: /platform features/i })).toBeInTheDocument()
  })
})
