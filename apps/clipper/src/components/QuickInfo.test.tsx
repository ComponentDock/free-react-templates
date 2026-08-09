import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuickInfo } from './QuickInfo'

describe('QuickInfo', () => {
  it('renders phone, location, and hours items', () => {
    render(<QuickInfo />)
    expect(screen.getByText('+1 234 5633 342')).toBeInTheDocument()
    expect(screen.getByText('Call us 24/7 we will get back to you ASAP')).toBeInTheDocument()
    expect(screen.getByText('249 Division Rad')).toBeInTheDocument()
    expect(screen.getByText('Fake st. New York, New York City, PO 2923 USA')).toBeInTheDocument()
    expect(screen.getByText('Daily: 8 am - 10 pm')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri, Sunday · Saturday: Closed')).toBeInTheDocument()
  })
})
