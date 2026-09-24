import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: /medwell experience doctors/i }),
    ).toBeInTheDocument()
  })

  it('renders three doctor cards', () => {
    render(<Team />)
    expect(screen.getByText('Dr. Adam Brain')).toBeInTheDocument()
    expect(screen.getByText('Dr. Blian Judge')).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Wells')).toBeInTheDocument()
  })

  it('shows specialties and phone numbers', () => {
    render(<Team />)
    expect(screen.getAllByText('Cardiologist')).toHaveLength(1)
    expect(screen.getAllByText('Neurologist')).toHaveLength(1)
    expect(screen.getAllByText('Pediatrician')).toHaveLength(1)
    expect(screen.getAllByText('+7 235 365 2365')).toHaveLength(3)
  })

  it('renders social media icons for each doctor', () => {
    render(<Team />)
    expect(screen.getAllByLabelText('Facebook')).toHaveLength(3)
    expect(screen.getAllByLabelText('Twitter')).toHaveLength(3)
    expect(screen.getAllByLabelText('Instagram')).toHaveLength(3)
  })
})
