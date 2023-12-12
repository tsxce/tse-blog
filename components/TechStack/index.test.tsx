import { render, screen, within } from '@testing-library/react'
import TechStack from './index'

// Test if TechStack renders correctly in mobile view
it('renders TechStack correctly in mobile view', () => {
  render(<TechStack />)

  const mobileView = screen.getByTestId('tech-stack-mobile-view')
  expect(mobileView).toBeInTheDocument()

  const mobileIcons = within(mobileView).getAllByTestId('stack-icon')
  expect(mobileIcons).toHaveLength(16)
})

// Test if TechStack renders correctly in desktop view
it('renders TechStack correctly in desktop view', () => {
  render(<TechStack />)

  const desktopView = screen.getByTestId('tech-stack-desktop-view')
  expect(desktopView).toBeInTheDocument()

  const desktopIcons = within(desktopView).getAllByTestId('stack-icon')
  expect(desktopIcons).toHaveLength(18)
})
