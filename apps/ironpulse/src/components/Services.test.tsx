import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { services, servicesButtonLabel, servicesEyebrow, servicesTitle } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, heading, four service columns, and the button', () => {
    const { container } = render(<Services />)
    expect(screen.getByText(servicesEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()

    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(services.length)

    expect(screen.getByRole('link', { name: servicesButtonLabel })).toBeInTheDocument()
  })
})
