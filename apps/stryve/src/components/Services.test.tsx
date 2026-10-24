import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services, servicesCta, servicesHref, servicesHeading, servicesLabel } from '../data'

describe('Services', () => {
  it('renders the dark band heading recipe and four services', () => {
    render(<Services />)
    const section = document.querySelector('#services') as HTMLElement
    expect(section.className).toContain('bg-ink')
    expect(screen.getByText(servicesLabel)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: servicesHeading })).toBeInTheDocument()

    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.copy)).toBeInTheDocument()
    }
    expect(section.querySelectorAll('article')).toHaveLength(services.length)
  })

  it('links the see-all button to the class list', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: servicesCta })).toHaveAttribute('href', servicesHref)
  })
})
