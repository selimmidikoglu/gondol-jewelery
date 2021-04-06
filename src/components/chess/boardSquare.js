import React from 'react'
import Square from './square'
import { canMoveKnight, moveKnight } from './game'
import { ItemTypes } from './constants'
import { useDrop } from 'react-dnd'

function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1
  const [{ isOver,canDrop }, drop] = useDrop(() => ({
    accept: "Knight",
    canDrop:() => canMoveKnight(x,y),
    drop: () => moveKnight(x, y),
    
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
  }), [x, y])

  return (
    <div
      ref={drop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'green',
          }}
        />
      )}
      {isOver && !canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'red',
          }}
        />
      )}
      {!isOver && canDrop && (
        <div
          style={{
            
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  )
}

export default BoardSquare