import { useState } from 'react'
import { useEffectOnce } from '@lib/hooks'

/**
 * Used to determine if a component is mounted.
 *
 * @returns A boolean indicating if the component is mounted.
 */
const useMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false)

  useEffectOnce(() => setIsMounted(true))

  return isMounted
}

export default useMounted
