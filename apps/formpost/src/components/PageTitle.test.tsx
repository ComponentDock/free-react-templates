import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  it('renders the page title heading', () => {
    render(<PageTitle />)
    expect(screen.getByRole('heading', { name: /contact form #09/i })).toBeInTheDocument()
  })

  it('uses a serif font', () => {
    render(<PageTitle />)
    const heading = screen.getByRole('heading', { name: /contact form #09/i })
    expect(heading.className).toContain('Playfair_Display')
  })
})
