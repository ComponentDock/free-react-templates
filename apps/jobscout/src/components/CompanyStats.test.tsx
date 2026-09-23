import { render, screen } from '@testing-library/react'
import { CompanyStats } from './CompanyStats'

describe('CompanyStats', () => {
  it('renders the heading', () => {
    render(<CompanyStats />)
    expect(screen.getByText('24k Talented people are getting Jobs')).toBeInTheDocument()
  })

  it('renders the Post a Job button', () => {
    render(<CompanyStats />)
    expect(screen.getByText('Post a Job')).toBeInTheDocument()
  })

  it('renders the Since 1994 badge', () => {
    render(<CompanyStats />)
    expect(screen.getByText('1994')).toBeInTheDocument()
    expect(screen.getByText('Since')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CompanyStats />)
    expect(screen.getByText('What we are doing')).toBeInTheDocument()
  })
})
