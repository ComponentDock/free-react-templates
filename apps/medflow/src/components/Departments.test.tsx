import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Departments from './Departments'

describe('Departments', () => {
  it('renders section heading and description', () => {
    render(<Departments />)

    expect(screen.getByText('Departments')).toBeInTheDocument()
    expect(screen.getByText(/specialized departments/)).toBeInTheDocument()
  })

  it('renders all department tabs', () => {
    render(<Departments />)

    expect(screen.getByRole('tab', { name: /Dentistry/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Cardiology/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /ENT Specialists/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Neurology/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Blood Screening/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /More/ })).toBeInTheDocument()
  })

  it('defaults to Dentistry tab selected', () => {
    render(<Departments />)

    const dentistryTab = screen.getByRole('tab', { name: /Dentistry/ })
    expect(dentistryTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Comprehensive Dental Care')).toBeInTheDocument()
  })

  it('switches tab content when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    await user.click(screen.getByRole('tab', { name: /Cardiology/ }))

    expect(screen.getByRole('tab', { name: /Cardiology/ })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Heart Health Specialists')).toBeInTheDocument()
  })

  it('renders Make An Appointment button for active department', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    await user.click(screen.getByRole('tab', { name: /ENT Specialists/ }))

    expect(screen.getByText('Make An Appointment')).toBeInTheDocument()
  })

  it('switches to Blood Screening tab', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    await user.click(screen.getByRole('tab', { name: /Blood Screening/ }))

    expect(screen.getByText('Blood Screening & Diagnostics')).toBeInTheDocument()
  })

  it('switches to Neurology tab', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    await user.click(screen.getByRole('tab', { name: /Neurology/ }))

    expect(screen.getByText('Neurological Care')).toBeInTheDocument()
  })

  it('switches to More tab', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    await user.click(screen.getByRole('tab', { name: /More/ }))

    expect(screen.getByText('Additional Services')).toBeInTheDocument()
  })

  it('renders department image', () => {
    render(<Departments />)

    expect(screen.getByAltText(/Comprehensive Dental Care/)).toBeInTheDocument()
  })

  it('scrolls to appointment section when Make An Appointment is clicked', async () => {
    const user = userEvent.setup()
    const appointmentSection = document.createElement('div')
    appointmentSection.id = 'appointment'
    document.body.appendChild(appointmentSection)

    render(<Departments />)

    await user.click(screen.getByText('Make An Appointment'))
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()

    document.body.removeChild(appointmentSection)
  })
})
