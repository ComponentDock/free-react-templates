import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('has correct link hrefs', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', '#facebook')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('href', '#twitter')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', '#instagram')
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', '#linkedin')
  })

  it('has phone link with tel protocol', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567').closest('a')).toHaveAttribute('href', 'tel:+001234567')
  })

  it('has email link with mailto protocol', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com').closest('a')).toHaveAttribute(
      'href',
      'mailto:youremail@email.com',
    )
  })
})
