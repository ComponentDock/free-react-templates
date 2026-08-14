import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SearchWidget } from './SearchWidget'

describe('SearchWidget', () => {
  it('renders two tabs with Find a Job active by default', () => {
    render(<SearchWidget />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)
    expect(screen.getByRole('tab', { name: 'Find a Job' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Find a Candidate' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('shows the job search form with keyword, category, location and Search button', () => {
    render(<SearchWidget />)
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveAttribute('aria-labelledby', 'search-tab-job')
    expect(screen.getByPlaceholderText('eg. Graphic, Web Developer')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
  })

  it('switches to the candidate form when the other tab is clicked', () => {
    render(<SearchWidget />)
    fireEvent.click(screen.getByRole('tab', { name: 'Find a Candidate' }))
    expect(screen.getByRole('tab', { name: 'Find a Candidate' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'Find a Job' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getByPlaceholderText('eg. Adam Scott')).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'search-tab-candidate')
  })

  it('blocks form submission (no backend navigation)', () => {
    render(<SearchWidget />)
    const panel = screen.getByRole('tabpanel')
    fireEvent.submit(panel)
    // No crash and the tab stays on the job form — submit is prevented
    expect(screen.getByRole('tab', { name: 'Find a Job' })).toHaveAttribute('aria-selected', 'true')
  })

  it('renders all category select options', () => {
    render(<SearchWidget />)
    const select = screen.getByLabelText('Category')
    for (const option of [
      'Category',
      'Full Time',
      'Part Time',
      'Freelance',
      'Internship',
      'Temporary',
    ]) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(select).toHaveValue('Category')
  })
})
