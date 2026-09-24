import { render, screen } from '@testing-library/react'
import TopBar from './TopBar'

describe('TopBar', () => {
  it('renders without crashing', () => {
    render(<TopBar />)
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<TopBar />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Book')).toBeInTheDocument()
    expect(screen.getByText('Appointment')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<TopBar />)
    expect(screen.getByText('info@clinipoint.com')).toBeInTheDocument()
  })
})
