import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Progress } from 'antd'

export default function TopSellingProduct({ products }) {
  return (
    <ul>
      { /* eslint-disable-next-line */
        products.map(({ name, desc, percent, color }) => (
          <li key={name}>
            <Divider />
            <div className="flex items-center justify-end">
              <div className="mr-auto">
                <div className="mb-1 font-bold">{name}</div>
                <div className="text-sm text-gray-500">{desc}</div>
              </div>
              <div>
                <Progress
                  type="circle"
                  width={45}
                  strokeWidth={14}
                  strokeColor={`rgba(var(--${color}), .8)`}
                  showInfo={false}
                  percent={percent}
                />
              </div>
              <div className="ml-6 whitespace-no-wrap">
                <div>销售</div>
                <div className="font-bold">
                  {percent}
                  %
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

TopSellingProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}
