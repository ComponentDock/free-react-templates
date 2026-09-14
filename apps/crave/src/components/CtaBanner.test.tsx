import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA text and heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Some Trendy And Popular Courses Offered')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Under replenish give saying thing',
    )
  })

  it('renders a Reservation button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: 'Reservation' })).toBeInTheDocument()
  })
})
