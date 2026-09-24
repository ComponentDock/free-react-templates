import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders welcome heading', () => {
    render(<Welcome />)

    expect(screen.getByText(/Welcome To/)).toBeInTheDocument()
    expect(screen.getByText(/Modern Clinic/)).toBeInTheDocument()
  })

  it('renders checklist items', () => {
    render(<Welcome />)

    expect(screen.getByText(/Compassionate and personalized care/)).toBeInTheDocument()
    expect(screen.getByText(/Board-certified specialist physicians/)).toBeInTheDocument()
    expect(screen.getByText(/State-of-the-art medical equipment/)).toBeInTheDocument()
  })

  it('renders About us button', () => {
    render(<Welcome />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders clinic image', () => {
    render(<Welcome />)

    const img = screen.getByAltText('Modern medical clinic interior')
    expect(img).toBeInTheDocument()
  })

  it('scrolls to departments section when About Us is clicked', async () => {
    const user = userEvent.setup()
    const deptSection = document.createElement('div')
    deptSection.id = 'departments'
    document.body.appendChild(deptSection)

    render(<Welcome />)

    await user.click(screen.getByText('About Us'))
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()

    document.body.removeChild(deptSection)
  })
})
