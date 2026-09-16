import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialIcons } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders the stay-in-touch label', () => {
    render(<SocialIcons />)

    expect(screen.getByText('Stay in touch :')).toBeInTheDocument()
  })

  it('renders all social media links', () => {
    render(<SocialIcons />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google+' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })
})
