import { render, screen } from '@testing-library/react'
import Stats from './Stats'

describe('Stats', () => {
  it('renders all 4 stat values and labels', () => {
    render(<Stats />)
    expect(screen.getByText('8723')).toBeInTheDocument()
    expect(screen.getByText('Patients since opening')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('Specialist Doctors')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('83')).toBeInTheDocument()
    expect(screen.getByText('Pro Bono Works')).toBeInTheDocument()
  })
})
