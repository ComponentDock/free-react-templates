import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders section heading', () => {
    render(<Volunteers />)

    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Our Volunteer')).toBeInTheDocument()
  })

  it('renders four volunteer cards', () => {
    render(<Volunteers />)

    expect(screen.getByText('Jason Smith')).toBeInTheDocument()
    expect(screen.getByText('Anne Hayes')).toBeInTheDocument()
    expect(screen.getByText('Martha Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Tyson')).toBeInTheDocument()
  })

  it('renders volunteer roles', () => {
    render(<Volunteers />)

    const roles = screen.getAllByText('Volunteer')
    expect(roles).toHaveLength(4)
  })

  it('renders social links for each volunteer', () => {
    render(<Volunteers />)

    // 4 volunteers x 4 socials = 16 social links
    const socialLinks = screen.getAllByRole('link', {
      name: /^(Twitter|Facebook|Google|Instagram)$/,
    })
    expect(socialLinks).toHaveLength(16)
  })

  it('renders volunteer images with alt text', () => {
    render(<Volunteers />)

    expect(screen.getByAltText('Jason Smith - Volunteer')).toBeInTheDocument()
    expect(screen.getByAltText('Anne Hayes - Volunteer')).toBeInTheDocument()
    expect(screen.getByAltText('Martha Smith - Volunteer')).toBeInTheDocument()
    expect(screen.getByAltText('Mike Tyson - Volunteer')).toBeInTheDocument()
  })

  it('has section with id volunteer', () => {
    const { container } = render(<Volunteers />)

    const section = container.querySelector('#volunteer')
    expect(section).toBeInTheDocument()
  })
})
