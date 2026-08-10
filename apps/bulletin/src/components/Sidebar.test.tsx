import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { adWidgetLabel, newsletterTitle, subscribeLabel } from '../data'

describe('Sidebar', () => {
  it('renders the newsletter widget and the ad placeholder', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
    expect(screen.getByText(adWidgetLabel)).toBeInTheDocument()
  })
})
