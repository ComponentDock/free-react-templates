import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServicesTabs } from './ServicesTabs'

describe('ServicesTabs', () => {
  it('renders the section heading', () => {
    render(<ServicesTabs />)

    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
  })

  it('shows all three tab buttons', () => {
    render(<ServicesTabs />)

    expect(screen.getByRole('tab', { name: 'Interior Design' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Architecture' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Building Modeling' })).toBeInTheDocument()
  })

  it('defaults to Interior Design tab selected', () => {
    render(<ServicesTabs />)

    const tab = screen.getByRole('tab', { name: 'Interior Design' })
    expect(tab).toHaveAttribute('aria-selected', 'true')

    const panel = screen.getByRole('tabpanel')
    expect(panel).toBeInTheDocument()
  })

  it('switches tab content when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ServicesTabs />)

    await user.click(screen.getByRole('tab', { name: 'Architecture' }))

    expect(screen.getByRole('tab', { name: 'Architecture' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'Interior Design' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('shows bullet list in active panel', () => {
    render(<ServicesTabs />)

    const bullets = screen.getAllByText(/paradisematic country/)
    expect(bullets.length).toBeGreaterThanOrEqual(1)
  })

  it('displays service images', () => {
    render(<ServicesTabs />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
