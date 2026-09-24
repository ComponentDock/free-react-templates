import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EmergencyContact from './EmergencyContact'

describe('EmergencyContact', () => {
  it('renders emergency heading and text', () => {
    render(<EmergencyContact />)

    expect(screen.getByText('We are here for you')).toBeInTheDocument()
    expect(screen.getAllByText('Book Appointment').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Emergency Medical Care')).toBeInTheDocument()
    expect(screen.getByText('+1-465 4545')).toBeInTheDocument()
  })

  it('renders Book Appointment button', () => {
    render(<EmergencyContact />)

    const buttons = screen.getAllByText('Book Appointment')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('scrolls to appointment section when button is clicked', async () => {
    const user = userEvent.setup()
    const appointmentSection = document.createElement('div')
    appointmentSection.id = 'appointment'
    document.body.appendChild(appointmentSection)

    render(<EmergencyContact />)

    const buttons = screen.getAllByText('Book Appointment')
    const btn = buttons.find((b) => b.tagName === 'BUTTON')
    if (btn) {
      await user.click(btn)
      expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
    }

    document.body.removeChild(appointmentSection)
  })
})
