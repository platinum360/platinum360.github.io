import React from 'react';
import './styles/StarBorder.css';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = 'var(--accentColor, white)',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={rest.style}
      {...rest}
    >
      <div className="star-border-mask" style={{ padding: `${thickness}px` }}>
        <div
          className="star-movement-bottom"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed
          }}
        ></div>
        <div
          className="star-movement-top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed
          }}
        ></div>
      </div>
      <div className="star-border-inner">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
