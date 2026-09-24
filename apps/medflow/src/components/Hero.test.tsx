import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from './Hero'

describe('Hero', () => {
  it('renders headline and tagline', () => {
    render(<Hero />)

    expect(screen.getByText('The best medical center')).toBeInTheDocument()
    expect(screen.getByText(/Bringing health/)).toBeInTheDocument()
    expect(screen.getByText(/to life for the whole family/)).toBeInTheDocument()
  })

  it('renders Discover More button', () => {
    render(<Hero />)

    expect(screen.getByText('Discover More')).toBeInTheDocument()
  })

  it('scrolls to about section when Discover More is clicked', async () => {
    const user = userEvent.setup()
    const aboutSection = document.createElement('div')
    aboutSection.id = 'about'
    document.body.appendChild(aboutSection)

    render(<Hero />)
    const spy = vi.spyOn(aboutSection, 'scrollIntoView')

    await user.click(screen.getByText('Discover More'))
    expect(spy).toHaveBeenCalledWith({ behavior: 'smooth' })

    spy.mockRestore()
    document.body.removeChild(aboutSection)
  })
})
