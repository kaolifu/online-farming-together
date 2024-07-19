'use client'

import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface BasicMenuProps {
  anchor: React.ReactNode
  children: React.ReactNode
}

export default function BasicMenu({ anchor, children }: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div onClick={handleClick}>{anchor}</div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {React.Children.map(children, (child) => (
          <MenuItem onClick={handleClose}>{child}</MenuItem>
        ))}
      </Menu>
    </div>
  )
}
