import { render, screen } from '@testing-library/react'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders the section heading', () => {
    render(<SocialButtons />)
    expect(screen.getByText('Social Buttons')).toBeInTheDocument()
  })

  it('renders all 5 social brand rows', () => {
    render(<SocialButtons />)
    expect(screen.getAllByText(/Share/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Connect with Twitter/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Connect with Linkedin/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Pin it/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Find us on Dribbble/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders icon-only buttons for each brand', () => {
    render(<SocialButtons />)
    const section = screen.getByTestId('social-buttons')
    const iconOnlyButtons = section.querySelectorAll('button')
    // 5 brands * 7 variants each = 35 buttons
    expect(iconOnlyButtons.length).toBe(35)
  })

  it('renders round variant buttons', () => {
    render(<SocialButtons />)
    const section = screen.getByTestId('social-buttons')
    const roundButtons = section.querySelectorAll('.btn-matrix-round')
    expect(roundButtons.length).toBe(10)
  })
})
