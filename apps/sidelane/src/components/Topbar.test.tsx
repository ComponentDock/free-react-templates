import { render, screen } from '@testing-library/react'
import { Topbar } from './Topbar'

describe('Topbar', () => {
  it('renders the topbar', () => {
    render(<Topbar />)
    expect(screen.getByTestId('topbar')).toBeInTheDocument()
  })

  it('renders as a header element', () => {
    render(<Topbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
