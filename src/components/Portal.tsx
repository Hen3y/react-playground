import React, { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  container?: Element
}

export const Portal: FC<PropsWithChildren<Props>> = ({ children, container }) => {
  const portalRoot = container || document.getElementById('portal-root') as HTMLElement
  
  return createPortal(children, portalRoot)
}
