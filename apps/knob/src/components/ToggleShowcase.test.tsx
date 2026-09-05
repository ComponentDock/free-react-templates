import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ToggleShowcase } from './ToggleShowcase'

describe('ToggleShowcase', () => {
  it('renders the heading', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #18')
  })

  it('renders the subtitle', () => {
    render(<ToggleShowcase />)
    expect(screen.getByText('Toggle Buttons')).toBeInTheDocument()
  })

  it('renders all 4 toggle labels', () => {
    render(<ToggleShowcase />)
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Dark mode')).toBeInTheDocument()
    expect(screen.getByText('Auto-save')).toBeInTheDocument()
    expect(screen.getByText('Marketing emails')).toBeInTheDocument()
  })

  it('renders 4 checkbox inputs', () => {
    render(<ToggleShowcase />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)
  })

  it('marks Notifications as checked by default', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Notifications' })).toBeChecked()
  })

  it('marks Dark mode as unchecked by default', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Dark mode' })).not.toBeChecked()
  })

  it('marks Auto-save as unchecked by default', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Auto-save' })).not.toBeChecked()
  })

  it('marks Marketing emails as disabled', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Marketing emails' })).toBeDisabled()
  })

  it('marks Marketing emails as unchecked', () => {
    render(<ToggleShowcase />)
    expect(screen.getByRole('checkbox', { name: 'Marketing emails' })).not.toBeChecked()
  })
})
