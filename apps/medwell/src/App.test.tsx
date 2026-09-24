import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Medwell')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /making health care better/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Primary Care')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /awesome health service/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/second abundantly/i)).toBeInTheDocument()
    expect(screen.getByText('Dr. Adam Brain')).toBeInTheDocument()
    expect(screen.getByText('Have Some Questions?')).toBeInTheDocument()
    expect(screen.getByText('Emergency Hotline')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /get every single update/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Medwell — Medical & Healthcare')
  })
})
