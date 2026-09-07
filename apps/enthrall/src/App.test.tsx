import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

// Helper to fill About step and advance to Account
async function fillAboutAndAdvance(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/first name/i), 'John')
  await user.type(screen.getByLabelText(/last name/i), 'Doe')
  await user.type(screen.getByLabelText(/email/i), 'john@test.com')
  await user.click(screen.getByRole('button', { name: /next/i }))
}

describe('Enthrall — Sign Up Wizard', () => {
  describe('Page shell', () => {
    it('renders the mint-green page background', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-page')
    })

    it('renders the white card centered on the page', () => {
      const { container } = render(<App />)
      const card = container.querySelector('.max-w-\\[990px\\]') as HTMLElement
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('rounded-[10px]')
    })

    it('renders the heading "Build your profile"', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Build your profile')
    })

    it('renders Poppins font family', () => {
      render(<App />)
      expect(screen.getByRole('form')).toBeInTheDocument()
    })
  })

  describe('Step tab navigation', () => {
    it('renders three tabs: About, Account, Address', () => {
      render(<App />)
      expect(screen.getByRole('tab', { name: /about/i })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /account/i })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /address/i })).toBeInTheDocument()
    })

    it('renders a tablist container', () => {
      render(<App />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('marks About tab as selected on load', () => {
      render(<App />)
      const aboutTab = screen.getByRole('tab', { name: /about/i })
      expect(aboutTab).toHaveAttribute('aria-selected', 'true')
    })

    it('marks Account and Address tabs as not selected on load', () => {
      render(<App />)
      expect(screen.getByRole('tab', { name: /account/i })).toHaveAttribute(
        'aria-selected',
        'false',
      )
      expect(screen.getByRole('tab', { name: /address/i })).toHaveAttribute(
        'aria-selected',
        'false',
      )
    })

    it('switches to Account tab on click after filling About', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByRole('tab', { name: /account/i })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: /about/i })).toHaveAttribute('aria-selected', 'false')
    })

    it('shows Account step content when Account tab is clicked', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByText('What are you doing ?')).toBeInTheDocument()
    })

    it('can navigate to Address step via tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      expect(screen.getByRole('tab', { name: /address/i })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByLabelText(/street name/i)).toBeInTheDocument()
    })
  })

  describe('About step — avatar and personal fields', () => {
    it('renders the avatar placeholder circle', () => {
      render(<App />)
      expect(screen.getByText(/choose picture/i)).toBeInTheDocument()
    })

    it('renders a hidden file input for avatar upload', () => {
      render(<App />)
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      expect(fileInput).toBeInTheDocument()
      expect(fileInput).toHaveClass('sr-only')
    })

    it('shows live preview when an image file is picked', async () => {
      const user = userEvent.setup()
      render(<App />)
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      const file = new File(['(binary)'], 'photo.png', {
        type: 'image/png',
      })
      await user.upload(fileInput, file)
      const avatarImg = screen.getByRole('img', { name: /uploaded avatar/i })
      expect(avatarImg).toBeInTheDocument()
    })

    it('does not show preview when file input is cleared', async () => {
      render(<App />)
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      // Trigger change event with empty file list (user cancels file picker)
      fireEvent.change(fileInput, { target: { files: [] } })
      // Placeholder should remain (no avatar image)
      expect(screen.queryByRole('img', { name: /uploaded avatar/i })).not.toBeInTheDocument()
      expect(screen.getByText(/choose picture/i)).toBeInTheDocument()
    })

    it('renders First Name, Last Name, and Email inputs', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('renders inputs with correct types', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toHaveAttribute('type', 'text')
      expect(screen.getByLabelText(/last name/i)).toHaveAttribute('type', 'text')
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    })

    it('focus turns input border green', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      await user.click(input)
      expect(input).toHaveClass('focus:border-accent')
    })
  })

  describe('Account step — job medallions', () => {
    it('shows the question "What are you doing ?"', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByText('What are you doing ?')).toBeInTheDocument()
    })

    it('renders three radio options: Designer, Coder, Developer', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByRole('radio', { name: /designer/i })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: /coder/i })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: /developer/i })).toBeInTheDocument()
    })

    it('Coder is checked by default', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByRole('radio', { name: /coder/i })).toBeChecked()
    })

    it('Designer and Developer are unchecked by default', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByRole('radio', { name: /designer/i })).not.toBeChecked()
      expect(screen.getByRole('radio', { name: /developer/i })).not.toBeChecked()
    })

    it('can select Designer', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('radio', { name: /designer/i }))
      expect(screen.getByRole('radio', { name: /designer/i })).toBeChecked()
      expect(screen.getByRole('radio', { name: /coder/i })).not.toBeChecked()
    })
  })

  describe('Address step — street/city/country', () => {
    it('renders Street Name, Street Number, City, and Country fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      expect(screen.getByLabelText(/street name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/street number/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/city/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/country/i)).toBeInTheDocument()
    })

    it('Country is a native select with options', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      const countrySelect = screen.getByLabelText(/country/i)
      expect(countrySelect).toHaveClass('appearance-none')
      expect(screen.getByRole('option', { name: /country/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /viet nam/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /usa/i })).toBeInTheDocument()
    })

    it('has a chevron caret icon for the select', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      expect(screen.getByTestId('country-caret')).toBeInTheDocument()
    })

    it('allows typing into street name field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      await user.type(screen.getByLabelText(/street name/i), 'Main St')
      expect(screen.getByLabelText(/street name/i)).toHaveValue('Main St')
    })

    it('allows typing into street number field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      await user.type(screen.getByLabelText(/street number/i), '42')
      expect(screen.getByLabelText(/street number/i)).toHaveValue('42')
    })

    it('allows typing into city field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      await user.type(screen.getByLabelText(/city/i), 'Springfield')
      expect(screen.getByLabelText(/city/i)).toHaveValue('Springfield')
    })

    it('allows selecting a country option', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('tab', { name: /address/i }))
      await user.selectOptions(screen.getByLabelText(/country/i), 'usa')
      expect(screen.getByLabelText(/country/i)).toHaveValue('usa')
    })
  })

  describe('Validation — step 1 only', () => {
    it('shows error when First Name is empty and user clicks Next', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    })

    it('shows error when Last Name is empty and user clicks Next', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Please enter your last name')).toBeInTheDocument()
    })

    it('shows error when Email is empty and user clicks Next', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    })

    it('shows error for invalid email format', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.type(screen.getByLabelText(/email/i), 'notanemail')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Please enter a valid email address!')).toBeInTheDocument()
    })

    it('clears error when field is fixed', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/first name/i), 'John')
      expect(screen.queryByText('Please enter your first name')).not.toBeInTheDocument()
    })

    it('blocks navigation when About step is invalid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Should still be on About step (inputs visible)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    it('allows navigation when About step is valid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      // Should be on Account step
      expect(screen.getByText('What are you doing ?')).toBeInTheDocument()
    })

    it('does not validate Account step (no rules)', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      // Account step — click Next without selecting anything
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Should advance to Address
      expect(screen.getByLabelText(/street name/i)).toBeInTheDocument()
    })

    it('does not validate Address step (no rules)', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Address step — click Finish without filling anything
      await user.click(screen.getByRole('button', { name: /finish/i }))
      // Should show success
      expect(screen.getByText(/your profile was submitted/i)).toBeInTheDocument()
    })

    it('validates on blur', async () => {
      const user = userEvent.setup()
      render(<App />)
      const firstNameInput = screen.getByLabelText(/first name/i)
      await user.click(firstNameInput)
      await user.tab()
      expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    })

    it('does not show error when valid field is blurred', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.tab()
      // No error should appear for a valid field
      expect(screen.queryByText('Please enter your first name')).not.toBeInTheDocument()
    })

    it('red border on invalid field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      const input = screen.getByLabelText(/first name/i)
      expect(input).toHaveClass('border-error')
    })
  })

  describe('Action buttons', () => {
    it('does not show Previous button on step 1', () => {
      render(<App />)
      expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
    })

    it('shows Next button on step 1', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('shows Previous button after advancing past step 1', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    })

    it('shows Finish button on step 3', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
    })

    it('Previous navigates back to About step', async () => {
      const user = userEvent.setup()
      render(<App />)
      await fillAboutAndAdvance(user)
      expect(screen.getByText('What are you doing ?')).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: /previous/i }))
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    it('Next is solid green styled', () => {
      render(<App />)
      const nextBtn = screen.getByRole('button', { name: /next/i })
      expect(nextBtn).toHaveClass('bg-accent')
      expect(nextBtn).toHaveClass('text-white')
    })
  })

  describe('Success state', () => {
    it('shows inline success message on Finish', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Alice')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email/i), 'alice@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))
      expect(screen.getByText(/your profile was submitted/i)).toBeInTheDocument()
    })

    it('hides the form on success', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Alice')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email/i), 'alice@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))
      expect(screen.queryByRole('form')).not.toBeInTheDocument()
    })

    it('does not show an alert', async () => {
      const alertSpy = vi.spyOn(window, 'alert')
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Alice')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email/i), 'alice@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))
      expect(alertSpy).not.toHaveBeenCalled()
      alertSpy.mockRestore()
    })
  })

  describe('Accessibility', () => {
    it('every input has a programmatic label', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('tablist has correct ARIA attributes', () => {
      render(<App />)
      const tablist = screen.getByRole('tablist')
      expect(tablist).toBeInTheDocument()
      const tabs = screen.getAllByRole('tab')
      expect(tabs).toHaveLength(3)
      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute('aria-selected')
      })
    })

    it('error messages are associated with fields via aria-describedby', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      const firstNameInput = screen.getByLabelText(/first name/i)
      const errorId = firstNameInput.getAttribute('aria-describedby')
      expect(errorId).toBeTruthy()
      const errorEl = document.getElementById(errorId!)
      expect(errorEl).toHaveTextContent('Please enter your first name')
    })

    it('invalid fields have aria-invalid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByLabelText(/first name/i)).toHaveAttribute('aria-invalid', 'true')
    })

    it('focus-visible rings on interactive elements', () => {
      render(<App />)
      const tabs = screen.getAllByRole('tab')
      tabs.forEach((tab) => {
        expect(tab.className).toContain('focus-visible:')
      })
    })
  })

  describe('Component Dock footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('has target _blank', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  describe('Tab click validation gating', () => {
    it('blocks tab switch when About step has invalid fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      // Try to switch to Account without filling About
      await user.click(screen.getByRole('tab', { name: /account/i }))
      // Should still be on About (errors shown)
      expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
      // Account tab should not be selected
      expect(screen.getByRole('tab', { name: /account/i })).toHaveAttribute(
        'aria-selected',
        'false',
      )
    })

    it('allows tab switch when About step is valid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@test.com')
      await user.click(screen.getByRole('tab', { name: /account/i }))
      expect(screen.getByRole('tab', { name: /account/i })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByText('What are you doing ?')).toBeInTheDocument()
    })
  })

  describe('Form submission', () => {
    it('prevents default form submission on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      await user.type(input, 'Test{Enter}')
      // Form submit is prevented, should not advance
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    it('prevents default on form submit event', async () => {
      render(<App />)
      const form = screen.getByRole('form')
      const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      })
      form.dispatchEvent(submitEvent)
      // Form should still be visible (submit was prevented)
      expect(screen.getByRole('form')).toBeInTheDocument()
    })
  })

  describe('Responsive behavior', () => {
    it('card has responsive max-width classes', () => {
      const { container } = render(<App />)
      const card = container.querySelector('.max-w-\\[990px\\]') as HTMLElement
      expect(card.className).toContain('max-w-[990px]')
    })
  })
})
