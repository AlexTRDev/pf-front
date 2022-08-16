import React from 'react'
import { useSelector } from 'react-redux'
export default function Pedidos() {
  const {pedidos}= useSelector(({pedidosStore})=> pedidosStore)
  const {usuario}= useSelector(({usuariosStore})=> usuariosStore)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="sticky left-0 p-4 text-left bg-white">
              <label className="sr-only" htmlFor="row_all">
                Select All
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_all"
              />
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">
                Nombre
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
              </div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">
                Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
              </div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">
                Estado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
              </div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">
                Numero de Telefono
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">
                Order de Compra
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1.5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
{pedidos&& pedidos.map((p)=>(
  <tr>
            <td className="sticky left-0 p-4 bg-white">
              <label className="sr-only" htmlFor="row_1">
                Row 1
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_1"
              />
            </td>
            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
              {p.name}
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
            {p.email}

            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
               {p.estado}
              </strong>
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
            {p.precioTotal}

              
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              SHOP-1268-8910
            </td>
          </tr>
          


))}

          
        </tbody>
      </table>
    </div>
  )
}
