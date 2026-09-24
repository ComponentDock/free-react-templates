import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders welcome heading', () => {
    render(<Welcome />)

    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
    expect(screen.getByText(/Modern Clinic/)).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Welcome />)

    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
  })

  it('renders Our Departments button', () => {
    render(<Welcome />)

    expect(screen.getByText('Our Departments')).toBeInTheDocument()
  })

  it('renders clinic image', () => {
    render(<Welcome />)

    const img = screen.getByAltText('Doctor at Medprime clinic')
    expect(img).toBeInTheDocument()
  })

  it('scrolls to departments section when Our Departments is clicked', async () => {
    const user = userEvent.setup()
    const deptSection = document.createElement('div')
    deptSection.id = 'departments'
    document.body.appendChild(deptSection)

    render(<Welcome />)

    await user.click(screen.getByText('Our Departments'))
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()

    document.body.removeChild(deptSection)
  })
})
