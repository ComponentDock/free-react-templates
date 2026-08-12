import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RequestForm } from './RequestForm'
import { REQUEST_SERVICES } from '../data'

describe('RequestForm', () => {
  it('renders the request heading and form fields', () => {
    render(<RequestForm />)
    expect(screen.getByRole('heading', { level: 2, name: 'Request' })).toBeInTheDocument()
    expect(screen.getByLabelText('Services')).toBeInTheDocument()
    expect(screen.getByLabelText('Fullname')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    for (const service of REQUEST_SERVICES) {
      expect(screen.getByRole('option', { name: service })).toBeInTheDocument()
    }
  })

  it('shows per-field errors and blocks submission when invalid', () => {
    render(<RequestForm />)
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(alerts[0]).toHaveTextContent('Please choose a service')
    expect(alerts[1]).toHaveTextContent('Please enter your full name')
    expect(alerts[2]).toHaveTextContent('Please enter your phone number')
    expect(alerts[3]).toHaveTextContent('Please choose a date')
  })

  it('shows a success message on valid submission', () => {
    render(<RequestForm />)
    fireEvent.change(screen.getByLabelText('Services'), { target: { value: 'Yoga' } })
    fireEvent.change(screen.getByLabelText('Fullname'), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '+123456789' } })
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2026-08-20' } })
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you')
    expect(screen.queryByLabelText('Services')).not.toBeInTheDocument()
  })
})
