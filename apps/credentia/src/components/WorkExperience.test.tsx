import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkExperience } from './WorkExperience'

describe('WorkExperience', () => {
  it('renders the section heading', () => {
    render(<WorkExperience />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  it('renders 2 work entries', () => {
    render(<WorkExperience />)
    expect(screen.getByText('2016-Present')).toBeInTheDocument()
    expect(screen.getByText('2014-2016')).toBeInTheDocument()
  })

  it('renders company and role for each entry', () => {
    render(<WorkExperience />)
    const companies = screen.getAllByText('Web Design Company')
    expect(companies).toHaveLength(2)
    const roles = screen.getAllByText('Web Designer')
    expect(roles).toHaveLength(2)
  })
})
