import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByText('Medical')).toBeInTheDocument()
    expect(screen.getByText('We Care for Your Health Every Moment')).toBeInTheDocument()
    expect(screen.getByText('Servicing Hours')).toBeInTheDocument()
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument()
    expect(screen.getByText('Our Latest Facilities')).toBeInTheDocument()
    expect(screen.getByText('Our Offered Services')).toBeInTheDocument()
    expect(screen.getByText('Our Consultants')).toBeInTheDocument()
    expect(screen.getByText("Enjoy our Client's Feedback")).toBeInTheDocument()
    expect(screen.getByText('Our Recent Blogs')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Medical — Healthcare Clinic Template')
  })
})
