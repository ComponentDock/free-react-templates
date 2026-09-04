import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SelectionSection } from './SelectionSection'

describe('SelectionSection', () => {
  it('renders the heading "Checkbox #04"', () => {
    render(<SelectionSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Checkbox #04')
  })

  it('renders the selection prompt', () => {
    render(<SelectionSection />)
    expect(screen.getByText('Select your preferences')).toBeInTheDocument()
  })

  it('renders all 3 checkbox options with labels', () => {
    render(<SelectionSection />)
    expect(screen.getByText('Email Notifications')).toBeInTheDocument()
    expect(screen.getByText('Weekly Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Accept Terms & Conditions')).toBeInTheDocument()
  })

  it('renders description text for each option', () => {
    render(<SelectionSection />)
    expect(screen.getByText('Receive updates about your account activity')).toBeInTheDocument()
    expect(screen.getByText('Get our weekly digest of curated content')).toBeInTheDocument()
    expect(
      screen.getByText('I agree to the terms of service and privacy policy'),
    ).toBeInTheDocument()
  })

  it('renders 3 checkbox inputs', () => {
    render(<SelectionSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(3)
  })

  it('confines content in a centered layout', () => {
    const { container } = render(<SelectionSection />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
