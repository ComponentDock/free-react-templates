import { render, screen } from '@testing-library/react'
import { Ministries } from './Ministries'

describe('Ministries', () => {
  it('renders the section heading', () => {
    render(<Ministries />)
    expect(screen.getByText('Ministries')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Ministries />)
    expect(screen.getByText('Events & Ministries')).toBeInTheDocument()
  })

  it('renders ministry titles', () => {
    render(<Ministries />)
    expect(screen.getByText('Prayer & Devotional for Children')).toBeInTheDocument()
    expect(screen.getByText('We Must Walk In The Middle of The Road')).toBeInTheDocument()
    expect(screen.getByText('Tracts Giving')).toBeInTheDocument()
  })

  it('renders ministry categories', () => {
    render(<Ministries />)
    expect(screen.getByText('Children Ministries')).toBeInTheDocument()
    expect(screen.getByText('Missions')).toBeInTheDocument()
    expect(screen.getByText('Care Ministry')).toBeInTheDocument()
  })

  it('renders ministry images', () => {
    render(<Ministries />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders ministry descriptions', () => {
    render(<Ministries />)
    expect(screen.getByText(/Join our dedicated prayer sessions/)).toBeInTheDocument()
    expect(screen.getByText(/Our missions outreach/)).toBeInTheDocument()
    expect(screen.getByText(/Providing care and support/)).toBeInTheDocument()
  })
})
