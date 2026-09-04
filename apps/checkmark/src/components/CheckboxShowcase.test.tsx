import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckboxShowcase } from './CheckboxShowcase'

describe('CheckboxShowcase', () => {
  it('renders the heading', () => {
    render(<CheckboxShowcase />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Checkbox #07')
  })

  it('renders the description text', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText(/Custom styled checkboxes/)).toBeInTheDocument()
  })

  it('renders all 3 section headings', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Profile Settings')).toBeInTheDocument()
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })

  it('renders 9 checkbox options total', () => {
    render(<CheckboxShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(9)
  })

  it('renders all checkbox labels', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByText('Enable two-factor authentication')).toBeInTheDocument()
    expect(screen.getByText('Show online status')).toBeInTheDocument()
    expect(screen.getByText('Allow friend requests')).toBeInTheDocument()
    expect(screen.getByText('Email notifications')).toBeInTheDocument()
    expect(screen.getByText('Push notifications')).toBeInTheDocument()
    expect(screen.getByText('Weekly digest')).toBeInTheDocument()
    expect(screen.getByText('Profile visible to search engines')).toBeInTheDocument()
    expect(screen.getByText('Share activity with friends')).toBeInTheDocument()
    expect(screen.getByText('Show read receipts')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    const { container } = render(<CheckboxShowcase />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('has defaultChecked checkboxes checked', () => {
    render(<CheckboxShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Email notifications' })).toBeChecked()
    expect(screen.getByRole('checkbox', { name: 'Share activity with friends' })).toBeChecked()
  })
})
