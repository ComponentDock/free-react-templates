import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  it('renders the page title', () => {
    render(<PageTitle />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Form #10')
  })

  it('centers the title', () => {
    render(<PageTitle />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.className).toContain('text-center')
  })
})
