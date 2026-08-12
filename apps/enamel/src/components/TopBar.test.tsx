import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows contact info, the centered brand and open hours', () => {
    render(<TopBar />)

    expect(screen.getByText('Free Call')).toBeInTheDocument()
    expect(screen.getByText('+1 234 456 78910')).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()

    expect(screen.getByText('Enamel')).toBeInTheDocument()
    expect(screen.getByText('Dental Clinic')).toBeInTheDocument()

    expect(screen.getByText('Open Hours')).toBeInTheDocument()
    expect(screen.getByText('Mon - Sat: 8:00am - 9:00pm')).toBeInTheDocument()
    expect(screen.getByText('Sun: Closed')).toBeInTheDocument()
  })
})
