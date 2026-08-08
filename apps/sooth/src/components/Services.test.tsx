import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and six service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Treatments & Services' }),
    ).toBeInTheDocument()
    for (const title of [
      'Facial Treatments',
      'Massage Therapy',
      'Body Treatments',
      'Hair Salon',
      'Nail Care',
      'Wellness',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows a price line and Learn More link on every card', () => {
    render(<Services />)
    expect(screen.getByText('from $85')).toBeInTheDocument()
    expect(screen.getByText('from $95')).toBeInTheDocument()
    expect(screen.getByText('from $120')).toBeInTheDocument()
    expect(screen.getByText('from $65')).toBeInTheDocument()
    expect(screen.getByText('from $45')).toBeInTheDocument()
    expect(screen.getByText('from $150')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })
})
