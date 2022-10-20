import Image from 'next/image'
import logoImage from 'public/images/logo.webp'
import { LightModeIcon, DarkModeIcon } from '@components/icons'
import { useTheme } from 'next-themes'
import { useMounted } from '@lib/hooks'

const Header = (): JSX.Element => {
  const isMounted = useMounted()
  const { theme, setTheme } = useTheme()
  const isLight = theme === 'light'
  const ModeIcon = isLight ? DarkModeIcon : LightModeIcon

  const toggleThemeMode = (): void => {
    setTheme(isLight ? 'dark' : 'light')
  }

  return (
    <header className="fixed top-0 h-16 w-full flex items-center justify-between px-3 bg-neutral-variant-90 dark:bg-neutral-variant-10">
      <div className="mt-2">
        <Image
          alt="Logo"
          layout="fixed"
          width={100}
          height={28}
          src={logoImage}
        />
      </div>
      {isMounted && (
        <button
          className="text-on-surface grid place-items-center rounded-full w-12 h-12 hover:bg-neutral-variant-80 dark:hover:bg-neutral-variant-20"
          aria-label={`Switch to ${theme} mode`}
          onClick={toggleThemeMode}
        >
          <ModeIcon size="24" />
        </button>
      )}
    </header>
  )
}

export default Header
