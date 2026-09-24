import { render, screen } from '@testing-library/react'
import { InternationalNews } from './InternationalNews'

describe('InternationalNews', () => {
  it('renders the section heading', () => {
    render(<InternationalNews />)
    expect(screen.getByText('International News')).toBeInTheDocument()
  })

  it('renders the featured post', () => {
    render(<InternationalNews />)
    expect(
      screen.getByText('Diplomatic Talks Resume in Geneva Amid Rising Tensions'),
    ).toBeInTheDocument()
  })

  it('renders smaller posts', () => {
    render(<InternationalNews />)
    expect(screen.getByText('New Trade Policy Framework Takes Shape')).toBeInTheDocument()
    expect(screen.getByText('Central Banks Signal Shift in Monetary Policy')).toBeInTheDocument()
  })

  it('renders category sidebar', () => {
    render(<InternationalNews />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getAllByText('World').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Politics').length).toBeGreaterThanOrEqual(1)
  })

  it('has correct aria-labelledby', () => {
    render(<InternationalNews />)
    const section = screen.getByLabelText('International News')
    expect(section).toHaveAttribute('aria-labelledby', 'intl-heading')
  })
})
