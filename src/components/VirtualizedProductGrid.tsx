import React from 'react';
import { FixedSizeGrid } from 'react-window';
import ProductCard from './ProductCard';
import type { Product } from '../types';

interface VirtualizedProductGridProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const VirtualizedProductGrid: React.FC<VirtualizedProductGridProps> = ({ products, onAddToCart }) => {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(1200);
  const [columns, setColumns] = React.useState(4);

  React.useEffect(() => {
    function handleResize() {
      const w = gridRef.current?.offsetWidth || window.innerWidth;
      setWidth(w);
      console.log('Grid width:', w);
      if (w > 1280) setColumns(4);         // Desktop
      else  setColumns(2);                 // Tablet             
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rowCount = Math.ceil(products.length / columns);
  const gap = 24; // px
  const cellHeight = 500 + gap;
  const cellWidth = width / columns;

  const Cell = React.useCallback(({
    columnIndex,
    rowIndex,
    style
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const idx = rowIndex * columns + columnIndex;
    if (idx >= products.length) return null;
    const product = products[idx];
    // Ajusta el padding para crear el gap visual
    const cellStyle = {
      ...style,
      left: (style.left as number) + gap / 2,
      top: (style.top as number) + gap / 2,
      width: (style.width as number) - gap,
      height: (style.height as number) - gap,
      padding: 0
    };
    return (
      <div style={cellStyle}>
        <ProductCard
          product={product}
          onAddToCart={() => onAddToCart(product.id)}
        />
      </div>
    );
  }, [products, onAddToCart, columns, gap]);

  // Calculate the total height needed for all rows
  const totalHeight = rowCount * cellHeight;
  return (
    <div ref={gridRef} style={{ width: '100%', minHeight: totalHeight }}>
      <FixedSizeGrid
        columnCount={columns}
        rowCount={rowCount}
        columnWidth={cellWidth}
        rowHeight={cellHeight}
        height={totalHeight}
        width={width}
        style={{ overflowY: 'hidden' }}
      >
        {Cell}
      </FixedSizeGrid>
    </div>
  );
};

export default VirtualizedProductGrid;
