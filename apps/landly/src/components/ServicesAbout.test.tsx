import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServicesAbout } from './ServicesAbout'
import { about, serviceSubtitle, services } from '../data'

describe('ServicesAbout', () => {
  it('renders the four reference services with the shared subtitle', () => {
    render(<ServicesAbout />)
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(serviceSubtitle)).toHaveLength(services.length)
  })

  it('renders the About column with the Mission and Vission rows', () => {
    render(<ServicesAbout />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.intro)).toBeInTheDocument()

    for (const row of about.rows) {
      expect(screen.getByRole('heading', { name: row.title })).toBeInTheDocument()
      expect(screen.getAllByText(row.body)).toHaveLength(about.rows.length)
    }
    expect(screen.getByRole('heading', { name: 'Vission' })).toBeInTheDocument()
  })
})
