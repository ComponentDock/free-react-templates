import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the subheading and heading', () => {
    render(<AboutSplit />)
    expect(screen.getByText('Welcome to Edifica')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /we create and turn into reality/i }),
    ).toBeInTheDocument()
  })

  it('renders three tab buttons', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('tab', { name: /our mission/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /our vision/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /our value/i })).toBeInTheDocument()
  })

  it('shows mission content by default', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/exceptional construction services/i)
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<AboutSplit />)
    await user.click(screen.getByRole('tab', { name: /our vision/i }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/leading construction firm/i)
  })

  it('switches to value tab', async () => {
    const user = userEvent.setup()
    render(<AboutSplit />)
    await user.click(screen.getByRole('tab', { name: /our value/i }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/transparency, safety/i)
  })

  it('renders the video play button', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
