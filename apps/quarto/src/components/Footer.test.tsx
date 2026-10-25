import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { person } from '../content'

describe('Footer', () => {
  it('renders the brand line and the fictional-sample notice', () => {
    render(<Footer />)

    expect(screen.getByText('Quarto · A portfolio in progress.')).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`${person.name}, education, experience`)),
    ).toBeInTheDocument()
  })

  it('attributes the template to Component Dock, not an external source', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.queryByText(/Template by/)).not.toBeInTheDocument()
  })
})
