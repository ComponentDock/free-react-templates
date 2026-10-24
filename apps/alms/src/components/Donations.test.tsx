import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Donations } from './Donations'

describe('Donations', () => {
  it('renders the section header and the view-all link', () => {
    render(<Donations />)
    expect(screen.getByRole('heading', { name: 'Latest Donations' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Donations' })).toHaveAttribute(
      'href',
      '#donations',
    )
  })

  it('renders four donor cards with amount and cause', () => {
    render(<Donations />)
    expect(screen.getByRole('heading', { name: 'Jorge Smith' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Christine Charles' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Albert Sluyter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Andrew Holloway' })).toBeInTheDocument()

    expect(screen.getByText('$252')).toBeInTheDocument()
    expect(screen.getByText('$1,200')).toBeInTheDocument()
    expect(screen.getAllByText(/Clean Water for Urban Schools/).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Donated Just now')).toBeInTheDocument()
  })

  it('labels each avatar', () => {
    render(<Donations />)
    expect(screen.getByRole('img', { name: 'Jorge Smith avatar' })).toBeInTheDocument()
  })
})
