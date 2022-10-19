import type { EffectCallback } from 'react'
import { useEffect } from 'react'

/**
 * Use an effect only once.
 *
 * @param effect Imperative function that can return a cleanup function.
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
const useEffectOnce = (effect: EffectCallback): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

export default useEffectOnce
