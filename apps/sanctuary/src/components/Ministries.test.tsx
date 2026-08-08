import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Ministries } from './Ministries'

describe('Ministries', () => {
  it('shows the Get Connected heading and intro', () => {
    render(<Ministries />)

    expect(screen.getByRole('heading', { level: 2, name: /Get Connected/ })).toBeInTheDocument()
    expect(screen.getByText(/Find your place in our church family/)).toBeInTheDocument()
  })

  it('shows six ministry cards with leaders and meeting times', () => {
    render(<Ministries />)

    for (const name of [
      "Children's Ministry",
      'Youth Ministry',
      'Small Groups',
      'Worship Team',
      'Outreach & Missions',
      'Care Ministry',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Pastor Mike Davis')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Pastor Rachel Kim')).toBeInTheDocument()
    expect(screen.getByText('Linda Martinez')).toBeInTheDocument()
    expect(screen.getByText(/Sundays during services/)).toBeInTheDocument()
    expect(screen.getByText('Fridays 6:30 PM')).toBeInTheDocument()
    expect(screen.getByText('Various times')).toBeInTheDocument()
    expect(screen.getByText('Thursdays 7:00 PM')).toBeInTheDocument()
  })

  it('links to View All Ministries', () => {
    render(<Ministries />)

    expect(screen.getByRole('link', { name: /View All Ministries/ })).toBeInTheDocument()
  })
})
