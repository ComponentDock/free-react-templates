import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LaunchApp } from './LaunchApp'
import { launchApp } from '../data'

describe('LaunchApp', () => {
  it('renders the heading, paragraph, image and Read more button', () => {
    render(<LaunchApp />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Launch your App')
    expect(screen.getByText(launchApp.text)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /two phones/i })).toHaveAttribute('src', launchApp.image)
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '#gallery')
  })
})
