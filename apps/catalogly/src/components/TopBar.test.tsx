import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email link', () => {
    render(<TopBar />)
    expect(screen.getByText('support@catalogly.com')).toBeInTheDocument()
  })

  it('renders welcome text', () => {
    render(<TopBar />)
    expect(screen.getByText('Welcome to Catalogly')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })
})
