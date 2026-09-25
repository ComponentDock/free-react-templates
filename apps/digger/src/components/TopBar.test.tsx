import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email and phone', () => {
    render(<TopBar />)
    expect(screen.getByText('info@digger.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
