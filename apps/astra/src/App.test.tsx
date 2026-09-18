import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { App } from './App'

// Mock IntersectionObserver for Stats component
beforeAll(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    },
  )
})

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Astra' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('01 Who We Are')).toBeInTheDocument()
    expect(screen.getByText('02 What We Do')).toBeInTheDocument()
    expect(screen.getByText('03 Recent Works')).toBeInTheDocument()
    expect(screen.getByText('Selected Clients')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    render(<App />)

    const allText = document.body.innerHTML

    const navbarIdx = allText.indexOf('Astra')
    const heroIdx = allText.indexOf('We provide creative')
    const aboutIdx = allText.indexOf('01 Who We Are')
    const servicesIdx = allText.indexOf('02 What We Do')
    const worksIdx = allText.indexOf('03 Recent Works')
    const clientsIdx = allText.indexOf('Selected Clients')
    const statsIdx = allText.indexOf('Projects Completed')
    const contactIdx = allText.indexOf('Get In Touch')
    const footerIdx = allText.indexOf('Component Dock')

    expect(navbarIdx).toBeLessThan(heroIdx)
    expect(heroIdx).toBeLessThan(aboutIdx)
    expect(aboutIdx).toBeLessThan(servicesIdx)
    expect(servicesIdx).toBeLessThan(worksIdx)
    expect(worksIdx).toBeLessThan(clientsIdx)
    expect(clientsIdx).toBeLessThan(statsIdx)
    expect(statsIdx).toBeLessThan(contactIdx)
    expect(contactIdx).toBeLessThan(footerIdx)
  })
})
